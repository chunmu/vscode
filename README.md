# 一步一步学习vscode

```
|- vscode
|   |- src
|   |   |- main.ts   主入口文件
|   |   |- bootstrap.js  node_modules以asar压缩支持提升性能，读取和设置多语言NLS(Natural Language String)，加载多语言配置文件
|   |   |- bootstrap-node.js 设置应用工作路径，node_modules路径确定，portable便携模式设置，设置便携模式下用户数据目录
|   |   |- vs
|   |   |   |- base
|   |   |   |   |- common
|   |   |   |   |   |- collection.ts 一些处理各类集合的工具方法，数组分组，Set对比，Set取交集，
|   |   |   |   |   |- platform.ts 平台判断相关的工具方法，没啥特殊的
|   |   |   |- nls.ts 多语言 解析语言仓库，加载到内存中，_VSCODE_NLS_MESSAGES
|   |   |   |- nls.message.ts 获取当前语言和语言包，全量或者是当前语言id下对应的语言包 没验证

|   |- ...

```
