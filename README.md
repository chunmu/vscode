# 一步一步学习vscode

```
|- vscode
|   |- src
|   |   |- bootstrap-import.js  xxxxxxxxxx
|   |   |- bootstrap-meta.js 处理package.json和product.json的导入
|   |   |- bootstrap-node.js 设置应用工作路径，node_modules路径确定，portable便携模式设置，设置便携
|   |   |- main.ts   主入口文件
|   |   |- bootstrap.js  node_modules以asar压缩支持提升性能，读取和设置多语言NLS(Natural Language String)，加载多语言配置文件
模式下用户数据目录
|   |   |- vs
|   |   |   |- base
|   |   |   |   |- common
|   |   |   |   |   |- collection.ts 一些处理各类集合的工具方法，数组分组，Set对比，Set取交集，
|   |   |   |   |   |- platform.ts 平台判断相关的工具方法，没啥特殊的
|   |   |   |   |   |- performance.ts 平台性能追踪相关标记代码
|   |   |   |   |   |- jsonc.ts 平台性能解析用户命令行参数配置的json文件，为什么不是require，因为这个是动态解析的，用户可以调整配置，所以是运行时解析json文本
|   |   |   |   |- node
|   |   |   |   |   |- nls.ts 配置多语言内容，这个实现内容不用纠结细节，只需要知道会根据配置读取到语言包
|   |   |   |   |   |- unc.ts windows系列的路径特点  /usr/xxx/xx  UNC: user:\usr\xxx\xx
|   |   |   |- nls.ts 多语言 解析语言仓库，加载到内存中，_VSCODE_NLS_MESSAGES
|   |   |   |- nls.message.ts 获取当前语言和语言包，全量或者是当前语言id下对应的语言包 没验证
|   |   |   |- platform
|   |   |   |   |- environment
|   |   |   |   |   |- common
|   |   |   |   |   |   |- argv.ts 主要是各类命令行参数类型定义
|   |   |   |   |- environment
|   |   |   |   |   |- node
|   |   |   |   |   |   |- userDataPath.ts 主要是设定和获取用户数据存储目录
|   |- ...

```
