//@ts-check
'use strict';

// 设置当前工作路径
function setupCurrentWorkingDirectory() {
	const path = require('path');

	try {

		if (typeof process.env['VSCODE_CWD'] !== 'string') {
			process.env['VSCODE_CWD'] = process.cwd();
		}

		if (process.platform === 'win32') {
			process.chdir(path.dirname(process.execPath));
		}
	} catch (err) {
		console.error(err);
	}
}

setupCurrentWorkingDirectory();

/**
 * Add support for redirecting the loading of node modules
 *
 * @param {string} injectPath
 */
exports.injectNodeModuleLookupPath = function (injectPath) {
	if (!injectPath) {
		throw new Error('Missing injectPath');
	}

	const Module = require('module');
	const path = require('path');

	const nodeModulesPath = path.join(__dirname, '../node_modules');

	// @ts-ignore
	const originalResolveLookupPaths = Module._resolveLookupPaths;

	// @ts-ignore
	Module._resolveLookupPaths = function (moduleName, parent) {
		const paths = originalResolveLookupPaths(moduleName, parent);
		if (Array.isArray(paths)) {
			for (let i = 0, len = paths.length; i < len; i++) {
				if (paths[i] === nodeModulesPath) {
					paths.splice(i, 0, injectPath);
					break;
				}
			}
		}

		return paths;
	};
};

exports.removeGlobalNodeModuleLookupPaths = function () {
	const Module = require('module');
	// @ts-ignore
	const globalPaths = Module.globalPaths;

	// @ts-ignore
	const originalResolveLookupPaths = Module._resolveLookupPaths;

	// @ts-ignore
	Module._resolveLookupPaths = function (moduleName, parent) {
		const paths = originalResolveLookupPaths(moduleName, parent);
		if (Array.isArray(paths)) {
			let commonSuffixLength = 0;
			while (commonSuffixLength < paths.length && paths[paths.length - 1 - commonSuffixLength] === globalPaths[globalPaths.length - 1 - commonSuffixLength]) {
				commonSuffixLength++;
			}
			return paths.slice(0, paths.length - commonSuffixLength);
		}
		return paths;
	};
};

// 便携模式 所有的用户数据存储在同目录的data文件夹下
// 移动data文件夹可以转移到其他版本vscode下
// |- VSCode-win32-x64-1.84.2
// |   |- Code.exe (or code executable)
// |   |- data
// |   |   |- user-data
// |   |   |   |- ...
// |   |   |- extensions
// |   |   |   |- ...
// |   |- ...
exports.configurePortable = function (product) {
	const fs = require('fs');
	const path = require('path');

	const appRoot = path.dirname(__dirname);

	/**
	 * @param {import('path')} path
	 */
	function getApplicationPath(path) {
		if (process.env['VSCODE_DEV']) {
			return appRoot;
		}

		if (process.platform === 'darwin') {
			return path.dirname(path.dirname(path.dirname(appRoot)));
		}

		return path.dirname(path.dirname(appRoot));
	}

	/**
	 * @param {import('path')} path
	 */
	function getPortableDataPath(path) {
		if (process.env['VSCODE_PORTABLE']) {
			return process.env['VSCODE_PORTABLE'];
		}

		if (process.platform === 'win32' || process.platform === 'linux') {
			return path.join(getApplicationPath(path), 'data');
		}

		// @ts-ignore
		const portableDataName = product.portable || `${product.applicationName}-portable-data`;
		return path.join(path.dirname(getApplicationPath(path)), portableDataName);
	}

	const portableDataPath = getPortableDataPath(path);
	const isPortable = !('target' in product) && fs.existsSync(portableDataPath);
	const portableTempPath = path.join(portableDataPath, 'tmp');
	const isTempPortable = isPortable && fs.existsSync(portableTempPath);

	if (isPortable) {
		process.env['VSCODE_PORTABLE'] = portableDataPath;
	} else {
		delete process.env['VSCODE_PORTABLE'];
	}

	if (isTempPortable) {
		if (process.platform === 'win32') {
			process.env['TMP'] = portableTempPath;
			process.env['TEMP'] = portableTempPath;
		} else {
			process.env['TMPDIR'] = portableTempPath;
		}
	}

	return {
		portableDataPath,
		isPortable
	};
};
