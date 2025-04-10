"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCompile = createCompile;
exports.transpileTask = transpileTask;
exports.compileTask = compileTask;
exports.watchTask = watchTask;
const event_stream_1 = __importDefault(require("event-stream"));
const fs_1 = __importDefault(require("fs"));
const gulp_1 = __importDefault(require("gulp"));
const path_1 = __importDefault(require("path"));
const reporter_1 = require("./reporter");
const util = __importStar(require("./util"));
const os_1 = __importDefault(require("os"));
const postcss_1 = require("./postcss");
const watch = require('./watch');
// --- gulp-tsb: compile and transpile --------------------------------
const reporter = (0, reporter_1.createReporter)();
function getTypeScriptCompilerOptions(src) {
    const rootDir = path_1.default.join(__dirname, `../../${src}`);
    const options = {};
    options.verbose = false;
    options.sourceMap = true;
    if (process.env['VSCODE_NO_SOURCEMAP']) { // To be used by developers in a hurry
        options.sourceMap = false;
    }
    options.rootDir = rootDir;
    options.baseUrl = rootDir;
    options.sourceRoot = util.toFileUri(rootDir);
    options.newLine = /\r\n/.test(fs_1.default.readFileSync(__filename, 'utf8')) ? 0 : 1;
    return options;
}
function createCompile(src, { build, emitError, transpileOnly }) {
    const tsb = require('./tsb');
    const sourcemaps = require('gulp-sourcemaps');
    const projectPath = path_1.default.join(__dirname, '../../', src, 'tsconfig.json');
    const overrideOptions = { ...getTypeScriptCompilerOptions(src), inlineSources: Boolean(build) };
    if (!build) {
        overrideOptions.inlineSourceMap = true;
    }
    const compilation = tsb.create(projectPath, overrideOptions, {
        verbose: false,
        transpileOnly: Boolean(transpileOnly),
        transpileWithSwc: typeof transpileOnly !== 'boolean' && transpileOnly.esbuild
    }, err => reporter(err));
    function pipeline(token) {
        const bom = require('gulp-bom');
        const tsFilter = util.filter(data => /\.ts$/.test(data.path));
        const isUtf8Test = (f) => /(\/|\\)test(\/|\\).*utf8/.test(f.path);
        const isRuntimeJs = (f) => f.path.endsWith('.js') && !f.path.includes('fixtures');
        const isCSS = (f) => f.path.endsWith('.css') && !f.path.includes('fixtures');
        const noDeclarationsFilter = util.filter(data => !(/\.d\.ts$/.test(data.path)));
        const postcssNesting = require('postcss-nesting');
        const input = event_stream_1.default.through();
        const output = input
            .pipe(util.$if(isUtf8Test, bom())) // this is required to preserve BOM in test files that loose it otherwise
            .pipe(util.$if(!build && isRuntimeJs, util.appendOwnPathSourceURL()))
            .pipe(util.$if(isCSS, (0, postcss_1.gulpPostcss)([postcssNesting()], err => reporter(String(err)))))
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
        return event_stream_1.default.duplex(input, output);
    }
    pipeline.tsProjectSrc = () => {
        return compilation.src({ base: src });
    };
    pipeline.projectPath = projectPath;
    return pipeline;
}
function transpileTask(src, out, esbuild) {
    const task = () => {
        const transpile = createCompile(src, { build: false, emitError: true, transpileOnly: { esbuild } });
        const srcPipe = gulp_1.default.src(`${src}/**`, { base: `${src}` });
        return srcPipe
            .pipe(transpile())
            .pipe(gulp_1.default.dest(out));
    };
    task.taskName = `transpile-${path_1.default.basename(src)}`;
    return task;
}
function compileTask(src, out, build) {
    console.log(out, 'xxoutxxxfff');
    const task = () => {
        if (os_1.default.totalmem() < 4_000_000_000) {
            throw new Error('compilation requires 4GB of RAM');
        }
        const compile = createCompile(src, { build, emitError: true, transpileOnly: false });
        const srcPipe = gulp_1.default.src(`${src}/**`, { base: `${src}` });
        // mangle: TypeScript to TypeScript
        console.log(out, 'out');
        return srcPipe
            .pipe(compile())
            .pipe(gulp_1.default.dest(out));
    };
    task.taskName = `compile-${path_1.default.basename(src)}`;
    return task;
}
function watchTask(out, build, srcPath = 'src') {
    const task = () => {
        const compile = createCompile(srcPath, { build, emitError: false, transpileOnly: false });
        const src = gulp_1.default.src(`${srcPath}/**`, { base: srcPath });
        const watchSrc = watch(`${srcPath}/**`, { base: srcPath, readDelay: 200 });
        return watchSrc
            .pipe(util.incremental(compile, src, true))
            .pipe(gulp_1.default.dest(out));
    };
    task.taskName = `watch-${path_1.default.basename(out)}`;
    return task;
}
