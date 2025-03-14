# 从零开始参透vscode

|- vscode
|   |- src
|   |   |- main.js   主入口文件
|   |   |- bootstrap.js  node_modules以asar压缩支持提升性能，读取和设置多语言NLS(Natural Language String)，加载多语言配置文件
|   |   |- bootstrap-node.js 设置应用工作路径，node_modules路径确定，portable便携模式设置，设置便携模式下用户数据目录
|   |- ...