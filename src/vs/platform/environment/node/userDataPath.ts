import * as os from 'os';
import * as path from 'path';
import { NativeParsedArgs } from '../common/argv.js';

const cwd = process.env['VSCODE_CWD'] || process.cwd();

export function getUserDataPath(cliArgs: NativeParsedArgs, productName: string): string {
	const userDataPath = doGetUserDataPath(cliArgs, productName);
	const pathsToResolve = [userDataPath];

	// (https://github.com/microsoft/vscode/issues/120269)
  // 如果没有指定，或者不是有效绝对目录 直接就用cwd
	if (!path.isAbsolute(userDataPath)) {
		pathsToResolve.unshift(cwd);
	}

	return path.resolve(...pathsToResolve);
}

function doGetUserDataPath(cliArgs: NativeParsedArgs, productName: string): string {

	// 0. Running out of sources has a fixed productName
	if (process.env['VSCODE_DEV']) {
		productName = 'chunmu-code-dev';
	}

	// 1. Support portable mode
	const portablePath = process.env['VSCODE_PORTABLE'];
	if (portablePath) {
		return path.join(portablePath, 'user-data');
	}

	// 2. Support global VSCODE_APPDATA environment variable
	let appDataPath = process.env['VSCODE_APPDATA'];
	if (appDataPath) {
		return path.join(appDataPath, productName);
	}

	// With Electron>=13 --user-data-dir switch will be propagated to
	// all processes https://github.com/electron/electron/blob/1897b14af36a02e9aa7e4d814159303441548251/shell/browser/electron_browser_client.cc#L546-L553
	// Check VSCODE_PORTABLE and VSCODE_APPDATA before this case to get correct values.
	// 3. Support explicit --user-data-dir
	const cliPath = cliArgs['user-data-dir'];
	if (cliPath) {
		return cliPath;
	}

	appDataPath = path.join(os.homedir(), 'Library', 'Application Support');

	return path.join(appDataPath, productName);
}
