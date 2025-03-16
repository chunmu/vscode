/******************************************** 已阅 ********************************************/

// _VSCODE_NLS_MESSAGES 存储多语言解析的内容
export function getNLSMessages(): string[] {
	return globalThis._VSCODE_NLS_MESSAGES;
}

// 打包时可指定语言或者setting设置中处理，我预估是要重启才能生效
// 也不一定要重启 因为多语言解析后的文本内容已经在内存中了，_VSCODE_NLS_MESSAGES 没验证 没必要
export function getNLSLanguage(): string | undefined {
	return globalThis._VSCODE_NLS_LANGUAGE;
}
