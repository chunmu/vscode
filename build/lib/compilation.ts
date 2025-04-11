/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import es from 'event-stream';
import fs from 'fs';
import gulp from 'gulp';
import path from 'path';
import { createReporter } from './reporter';
import * as util from './util';
import os from 'os';
import File from 'vinyl';
import * as task from './task';
import { gulpPostcss } from './postcss';
import ts = require('typescript');
const watch = require('./watch');


// --- gulp-tsb: compile and transpile --------------------------------

const reporter = createReporter();

function getTypeScriptCompilerOptions(src: string): ts.CompilerOptions {
	const rootDir = path.join(__dirname, `../../${src}`);
	const options: ts.CompilerOptions = {};
	options.verbose = false;
	options.sourceMap = true;
	if (process.env['VSCODE_NO_SOURCEMAP']) { // To be used by developers in a hurry
		options.sourceMap = false;
	}
	options.rootDir = rootDir;
	options.baseUrl = rootDir;
	options.sourceRoot = util.toFileUri(rootDir);
	options.newLine = /\r\n/.test(fs.readFileSync(__filename, 'utf8')) ? 0 : 1;
	return options;
}

interface ICompileTaskOptions {
	readonly build: boolean;
	readonly emitError: boolean;
	readonly transpileOnly: boolean | { esbuild: boolean };
}

export function createCompile(src: string, { build, emitError, transpileOnly }: ICompileTaskOptions) {
	const tsb = require('./tsb') as typeof import('./tsb');
	const sourcemaps = require('gulp-sourcemaps') as typeof import('gulp-sourcemaps');


	const projectPath = path.join(__dirname, '../../', src, 'tsconfig.json');
	const overrideOptions = { ...getTypeScriptCompilerOptions(src), inlineSources: Boolean(build) };
	if (!build) {
		overrideOptions.inlineSourceMap = true;
	}

	const compilation = tsb.create(projectPath, overrideOptions, {
		verbose: false,
		transpileOnly: Boolean(transpileOnly),
		transpileWithSwc: typeof transpileOnly !== 'boolean' && transpileOnly.esbuild
	}, err => reporter(err));

	function pipeline(token?: util.ICancellationToken) {
		const bom = require('gulp-bom') as typeof import('gulp-bom');

		const tsFilter = util.filter(data => /\.ts$/.test(data.path));
		const isUtf8Test = (f: File) => /(\/|\\)test(\/|\\).*utf8/.test(f.path);
		const isRuntimeJs = (f: File) => f.path.endsWith('.js') && !f.path.includes('fixtures');
		const isCSS = (f: File) => f.path.endsWith('.css') && !f.path.includes('fixtures');
		const noDeclarationsFilter = util.filter(data => !(/\.d\.ts$/.test(data.path)));

		const postcssNesting = require('postcss-nesting');

		const input = es.through();
		const output = input
			.pipe(util.$if(isUtf8Test, bom())) // this is required to preserve BOM in test files that loose it otherwise
			.pipe(util.$if(!build && isRuntimeJs, util.appendOwnPathSourceURL()))
			.pipe(util.$if(isCSS, gulpPostcss([postcssNesting()], err => reporter(String(err)))))
			.pipe(tsFilter)
			.pipe(util.loadSourcemaps())
			.pipe(compilation(token))
			.pipe(noDeclarationsFilter)
			// .pipe(util.$if(build, nls.nls({ preserveEnglish })))
			.pipe(noDeclarationsFilter.restore)
			.pipe(util.$if(!transpileOnly, sourcemaps.write('.', {
				addComment: false,
				includeContent: !!build,
				sourceRoot: overrideOptions.sourceRoot
			})))
			.pipe(tsFilter.restore)
			.pipe(reporter.end(!!emitError));

		return es.duplex(input, output);
	}
	pipeline.tsProjectSrc = () => {
		return compilation.src({ base: src });
	};
	pipeline.projectPath = projectPath;
	return pipeline;
}

export function transpileTask(src: string, out: string, esbuild: boolean): task.StreamTask {

	const task = () => {

		const transpile = createCompile(src, { build: false, emitError: true, transpileOnly: { esbuild } });
		const srcPipe = gulp.src(`${src}/**`, { base: `${src}` });

		return srcPipe
			.pipe(transpile())
			.pipe(gulp.dest(out));
	};

	task.taskName = `transpile-${path.basename(src)}`;
	return task;
}

export function compileTask(src: string, out: string, build: boolean): task.StreamTask {
	console.log(out, 'xxoutxxxfff')
	const task = () => {

		if (os.totalmem() < 4_000_000_000) {
			throw new Error('compilation requires 4GB of RAM');
		}
		const compile = createCompile(src, { build, emitError: true, transpileOnly: false });
		const srcPipe = gulp.src(`${src}/**`, { base: `${src}` });
		// mangle: TypeScript to TypeScript
		console.log(out, 'out')
		return srcPipe
			.pipe(compile())
			.pipe(gulp.dest(out));
	};

	task.taskName = `compile-${path.basename(src)}`;
	return task;
}

export function watchTask(out: string, build: boolean, srcPath: string = 'src'): task.StreamTask {

	const task = () => {
		const compile = createCompile(srcPath, { build, emitError: false, transpileOnly: false });

		const src = gulp.src(`${srcPath}/**`, { base: srcPath });
		const watchSrc = watch(`${srcPath}/**`, { base: srcPath, readDelay: 200 });

		return watchSrc
			.pipe(util.incremental(compile, src, true))
			.pipe(gulp.dest(out));
	};
	task.taskName = `watch-${path.basename(out)}`;
	return task;
}
