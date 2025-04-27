# 一步一步学习vscode

```

src
├── bootstrap-cli.ts
├── bootstrap-esm.ts
├── bootstrap-fork.ts
├── bootstrap-import.ts xx
├── bootstrap-meta.ts 处理package.json和product.json的导入
├── bootstrap-node.ts 设置应用工作路径，node_modules路径确定，portable便携模式设置，设置便携
├── bootstrap-server.ts
├── bootstrap-window.ts
├── cli.ts
├── main.ts 启动文件
├── server-cli.ts
├── server-main.ts
├── tsconfig.base.json
├── tsconfig.json
├── tsconfig.monaco.json
├── tsconfig.tsec.json
├── tsconfig.vscode-dts.json
├── tsconfig.vscode-proposed-dts.json
├── tsec.exemptions.json
├── vs
│   ├── amdX.ts
│   ├── base
│   │   ├── browser
│   │   │   ├── broadcast.ts
│   │   │   ├── browser.ts
│   │   │   ├── canIUse.ts
│   │   │   ├── contextmenu.ts
│   │   │   ├── cssValue.ts
│   │   │   ├── defaultWorkerFactory.ts
│   │   │   ├── deviceAccess.ts
│   │   │   ├── dnd.ts
│   │   │   ├── dom.ts
│   │   │   ├── domImpl
│   │   │   │   ├── domObservable.ts
│   │   │   │   └── n.ts
│   │   │   ├── domStylesheets.ts
│   │   │   ├── dompurify
│   │   │   │   ├── cgmanifest.json
│   │   │   │   ├── dompurify.d.ts
│   │   │   │   ├── dompurify.js
│   │   │   │   └── dompurify.license.txt
│   │   │   ├── event.ts
│   │   │   ├── fastDomNode.ts
│   │   │   ├── fonts.ts
│   │   │   ├── formattedTextRenderer.ts
│   │   │   ├── globalPointerMoveMonitor.ts
│   │   │   ├── history.ts
│   │   │   ├── iframe.ts
│   │   │   ├── indexedDB.ts
│   │   │   ├── keyboardEvent.ts
│   │   │   ├── markdownRenderer.ts
│   │   │   ├── mouseEvent.ts
│   │   │   ├── performance.ts
│   │   │   ├── pixelRatio.ts
│   │   │   ├── touch.ts
│   │   │   ├── trustedTypes.ts
│   │   │   ├── ui
│   │   │   │   ├── actionbar
│   │   │   │   │   ├── actionViewItems.ts
│   │   │   │   │   └── actionbar.ts
│   │   │   │   ├── aria
│   │   │   │   │   └── aria.ts
│   │   │   │   ├── breadcrumbs
│   │   │   │   │   └── breadcrumbsWidget.ts
│   │   │   │   ├── button
│   │   │   │   │   └── button.ts
│   │   │   │   ├── centered
│   │   │   │   │   └── centeredViewLayout.ts
│   │   │   │   ├── codicons
│   │   │   │   │   ├── codicon
│   │   │   │   │   │   └── codicon.ttf
│   │   │   │   │   └── codiconStyles.ts
│   │   │   │   ├── contextview
│   │   │   │   │   └── contextview.ts
│   │   │   │   ├── countBadge
│   │   │   │   │   └── countBadge.ts
│   │   │   │   ├── dialog
│   │   │   │   │   └── dialog.ts
│   │   │   │   ├── dropdown
│   │   │   │   │   ├── dropdown.ts
│   │   │   │   │   └── dropdownActionViewItem.ts
│   │   │   │   ├── findinput
│   │   │   │   │   ├── findInput.ts
│   │   │   │   │   ├── findInputToggles.ts
│   │   │   │   │   └── replaceInput.ts
│   │   │   │   ├── grid
│   │   │   │   │   ├── grid.ts
│   │   │   │   │   └── gridview.ts
│   │   │   │   ├── highlightedlabel
│   │   │   │   │   └── highlightedLabel.ts
│   │   │   │   ├── hover
│   │   │   │   │   ├── hover.ts
│   │   │   │   │   ├── hoverDelegate.ts
│   │   │   │   │   ├── hoverDelegate2.ts
│   │   │   │   │   ├── hoverDelegateFactory.ts
│   │   │   │   │   └── hoverWidget.ts
│   │   │   │   ├── iconLabel
│   │   │   │   │   ├── iconLabel.ts
│   │   │   │   │   ├── iconLabels.ts
│   │   │   │   │   └── simpleIconLabel.ts
│   │   │   │   ├── icons
│   │   │   │   │   └── iconSelectBox.ts
│   │   │   │   ├── inputbox
│   │   │   │   │   └── inputBox.ts
│   │   │   │   ├── keybindingLabel
│   │   │   │   │   └── keybindingLabel.ts
│   │   │   │   ├── list
│   │   │   │   │   ├── list.ts
│   │   │   │   │   ├── listPaging.ts
│   │   │   │   │   ├── listView.ts
│   │   │   │   │   ├── listWidget.ts
│   │   │   │   │   ├── rangeMap.ts
│   │   │   │   │   ├── rowCache.ts
│   │   │   │   │   └── splice.ts
│   │   │   │   ├── menu
│   │   │   │   │   ├── menu.ts
│   │   │   │   │   └── menubar.ts
│   │   │   │   ├── mouseCursor
│   │   │   │   │   └── mouseCursor.ts
│   │   │   │   ├── progressbar
│   │   │   │   │   ├── progressAccessibilitySignal.ts
│   │   │   │   │   └── progressbar.ts
│   │   │   │   ├── radio
│   │   │   │   │   └── radio.ts
│   │   │   │   ├── resizable
│   │   │   │   │   └── resizable.ts
│   │   │   │   ├── sash
│   │   │   │   │   └── sash.ts
│   │   │   │   ├── scrollbar
│   │   │   │   │   ├── abstractScrollbar.ts
│   │   │   │   │   ├── horizontalScrollbar.ts
│   │   │   │   │   ├── scrollableElement.ts
│   │   │   │   │   ├── scrollableElementOptions.ts
│   │   │   │   │   ├── scrollbarArrow.ts
│   │   │   │   │   ├── scrollbarState.ts
│   │   │   │   │   ├── scrollbarVisibilityController.ts
│   │   │   │   │   └── verticalScrollbar.ts
│   │   │   │   ├── selectBox
│   │   │   │   │   ├── selectBox.ts
│   │   │   │   │   ├── selectBoxCustom.ts
│   │   │   │   │   └── selectBoxNative.ts
│   │   │   │   ├── severityIcon
│   │   │   │   │   ├── media
│   │   │   │   │   └── severityIcon.ts
│   │   │   │   ├── splitview
│   │   │   │   │   ├── paneview.ts
│   │   │   │   │   └── splitview.ts
│   │   │   │   ├── table
│   │   │   │   │   ├── table.ts
│   │   │   │   │   └── tableWidget.ts
│   │   │   │   ├── toggle
│   │   │   │   │   └── toggle.ts
│   │   │   │   ├── toolbar
│   │   │   │   │   └── toolbar.ts
│   │   │   │   ├── tree
│   │   │   │   │   ├── abstractTree.ts
│   │   │   │   │   ├── asyncDataTree.ts
│   │   │   │   │   ├── compressedObjectTreeModel.ts
│   │   │   │   │   ├── dataTree.ts
│   │   │   │   │   ├── indexTree.ts
│   │   │   │   │   ├── indexTreeModel.ts
│   │   │   │   │   ├── objectTree.ts
│   │   │   │   │   ├── objectTreeModel.ts
│   │   │   │   │   ├── tree.ts
│   │   │   │   │   └── treeDefaults.ts
│   │   │   │   └── widget.ts
│   │   │   └── window.ts
│   │   ├── common
│   │   │   ├── actions.ts
│   │   │   ├── arrays.ts xxxxx 数组相关方法整合
│   │   │   ├── arraysFind.ts 工具方法 主要是数组或集合元素查找
│   │   │   ├── assert.ts 做一些类型断言，以及一些报错优化，以方便debugger
│   │   │   ├── async.ts
│   │   │   ├── buffer.ts
│   │   │   ├── cache.ts
│   │   │   ├── cancellation.ts xxxxx 还没看到实际用的地方
│   │   │   ├── charCode.ts 键值编码
│   │   │   ├── codecs
│   │   │   │   ├── asyncDecoder.ts
│   │   │   │   ├── baseDecoder.ts
│   │   │   │   └── types
│   │   │   │       └── ICodec.d.ts
│   │   │   ├── codicons.ts fonticon字符处理工具  最终构造icon map
│   │   │   ├── codiconsLibrary.ts fonticon字符处理工具  最终构造icon map
│   │   │   ├── codiconsUtil.ts fonticon字符处理工具
│   │   │   ├── collections.ts 一些处理各类集合的工具方法，数组分组，Set对比，Set取交集，
│   │   │   ├── color.ts
│   │   │   ├── comparers.ts
│   │   │   ├── console.ts
│   │   │   ├── controlFlow.ts
│   │   │   ├── dataTransfer.ts
│   │   │   ├── date.ts
│   │   │   ├── decorators
│   │   │   │   └── cancelPreviousCalls.ts
│   │   │   ├── decorators.ts
│   │   │   ├── desktopEnvironmentInfo.ts
│   │   │   ├── diff
│   │   │   │   ├── diff.ts
│   │   │   │   └── diffChange.ts
│   │   │   ├── equals.ts 对象类比对是否相等
│   │   │   ├── errorMessage.ts
│   │   │   ├── errors.ts xxxxx 还没看到实际用的地方
│   │   │   ├── event.ts
│   │   │   ├── extpath.ts
│   │   │   ├── filters.ts
│   │   │   ├── functional.ts 创建只执行一次的方法 一般命名为once 利用闭包特性处理
│   │   │   ├── fuzzyScorer.ts
│   │   │   ├── glob.ts
│   │   │   ├── hash.ts
│   │   │   ├── hierarchicalKind.ts
│   │   │   ├── history.ts
│   │   │   ├── hotReload.ts
│   │   │   ├── hotReloadHelpers.ts
│   │   │   ├── htmlContent.ts
│   │   │   ├── iconLabels.ts
│   │   │   ├── idGenerator.ts
│   │   │   ├── ime.ts
│   │   │   ├── iterator.ts xxxxx 创建了一个基于数组的迭代器 暂时不知道用途
│   │   │   ├── json.ts
│   │   │   ├── jsonEdit.ts
│   │   │   ├── jsonErrorMessages.ts
│   │   │   ├── jsonFormatter.ts
│   │   │   ├── jsonSchema.ts
│   │   │   ├── jsonc.ts 平台性能解析用户命令行参数配置的json文件，为什么不是require，因为这个是动态解析的，用户可以调整配置，所以是运行时解析json文本
│   │   │   ├── keyCodes.ts
│   │   │   ├── keybindingLabels.ts
│   │   │   ├── keybindingParser.ts
│   │   │   ├── keybindings.ts
│   │   │   ├── labels.ts
│   │   │   ├── lazy.ts
│   │   │   ├── lifecycle.ts 基于FinalizationRegistry的资源回收通知等逻辑，用于处理service资源回收
│   │   │   ├── linkedList.ts 链表数据结构工具类，更具有性能优势
│   │   │   ├── linkedText.ts
│   │   │   ├── map.ts map/set工具方法，主要做了存取，转string，key为URI的RourceMap工具，链表Map(LinkedMap)，基于链表的缓存基础类Cache，基于前面Cache的LRU(最少使用算法)缓存，基于前面Cache的MRU(最近使用算法)缓存，key和value相互作为key，value的BidirectionalMap，双Map结构，专门存放set的Map(SetMap)
│   │   │   ├── marked
│   │   │   │   ├── cgmanifest.json
│   │   │   │   ├── marked.d.ts
│   │   │   │   ├── marked.js
│   │   │   │   └── marked.license.txt
│   │   │   ├── marshalling.ts
│   │   │   ├── marshallingIds.ts xxxxx
│   │   │   ├── mime.ts
│   │   │   ├── naturalLanguage
│   │   │   │   └── korean.ts
│   │   │   ├── navigator.ts
│   │   │   ├── network.ts
│   │   │   ├── normalization.ts
│   │   │   ├── numbers.ts
│   │   │   ├── objectCache.ts
│   │   │   ├── objects.ts
│   │   │   ├── observable.ts
│   │   │   ├── observableDisposable.ts
│   │   │   ├── observableInternal
│   │   │   │   ├── api.ts
│   │   │   │   ├── autorun.ts
│   │   │   │   ├── base.ts
│   │   │   │   ├── commonFacade
│   │   │   │   │   ├── cancellation.ts
│   │   │   │   │   └── deps.ts
│   │   │   │   ├── debugName.ts
│   │   │   │   ├── derived.ts
│   │   │   │   ├── index.ts
│   │   │   │   ├── lazyObservableValue.ts
│   │   │   │   ├── logging
│   │   │   │   │   ├── consoleObservableLogger.ts
│   │   │   │   │   ├── debugger
│   │   │   │   │   │   ├── debuggerRpc.ts
│   │   │   │   │   │   ├── devToolsLogger.ts
│   │   │   │   │   │   ├── rpc.ts
│   │   │   │   │   │   └── utils.ts
│   │   │   │   │   └── logging.ts
│   │   │   │   ├── promise.ts
│   │   │   │   ├── utils.ts
│   │   │   │   └── utilsCancellation.ts
│   │   │   ├── paging.ts
│   │   │   ├── parsers.ts
│   │   │   ├── path.ts 做mac和win32路径兼容
│   │   │   ├── performance.ts 平台性能追踪相关标记代码
│   │   │   ├── platform.ts 平台判断相关的工具方法，没啥特殊的
│   │   │   ├── ports.ts
│   │   │   ├── prefixTree.ts
│   │   │   ├── process.ts
│   │   │   ├── processes.ts
│   │   │   ├── product.ts 主要是product.json读取内容的ts类型描述
│   │   │   ├── range.ts
│   │   │   ├── resourceTree.ts
│   │   │   ├── resources.ts
│   │   │   ├── scrollable.ts
│   │   │   ├── search.ts
│   │   │   ├── semver
│   │   │   │   ├── cgmanifest.json
│   │   │   │   ├── semver.d.ts
│   │   │   │   └── semver.js
│   │   │   ├── sequence.ts 队列管理 对队列的切割splice做了事件通知
│   │   │   ├── severity.ts
│   │   │   ├── skipList.ts
│   │   │   ├── stopwatch.ts 没啥特殊的，用于打标计时类工具
│   │   │   ├── stream.ts
│   │   │   ├── strings.ts 处理字符各种情况，隐形字符设定，字符切割设定，emoji字符判断等
│   │   │   ├── symbols.ts symbol标记
│   │   │   ├── ternarySearchTree.ts
│   │   │   ├── tfIdf.ts
│   │   │   ├── themables.ts
│   │   │   ├── types.ts 各类判断辅助，是否字符，字符数组，对象，数字，是否可迭代，等等
│   │   │   ├── uint.ts
│   │   │   ├── uri.ts
│   │   │   ├── uriIpc.ts
│   │   │   ├── uuid.ts
│   │   │   ├── verifier.ts
│   │   │   └── worker
│   │   │       ├── simpleWorker.ts
│   │   │       └── simpleWorkerBootstrap.ts
│   │   ├── node
│   │   │   ├── cpuUsage.sh
│   │   │   ├── crypto.ts
│   │   │   ├── extpath.ts
│   │   │   ├── id.ts
│   │   │   ├── macAddress.ts
│   │   │   ├── nls.ts 配置多语言内容，这个实现内容不用纠结细节，只需要知道会根据配置读取到语言包
│   │   │   ├── nodeStreams.ts
│   │   │   ├── osDisplayProtocolInfo.ts
│   │   │   ├── osReleaseInfo.ts
│   │   │   ├── pfs.ts
│   │   │   ├── ports.ts
│   │   │   ├── powershell.ts
│   │   │   ├── processes.ts
│   │   │   ├── ps.sh
│   │   │   ├── ps.ts
│   │   │   ├── shell.ts
│   │   │   ├── terminalEncoding.ts
│   │   │   ├── terminateProcess.sh
│   │   │   ├── unc.ts windows系列的路径特点  /usr/xxx/xx  UNC: user:\usr\xxx\xx
│   │   │   └── zip.ts
│   │   ├── parts
│   │   │   ├── contextmenu
│   │   │   │   ├── common
│   │   │   │   │   └── contextmenu.ts
│   │   │   │   ├── electron-main
│   │   │   │   │   └── contextmenu.ts
│   │   │   │   └── electron-sandbox
│   │   │   │       └── contextmenu.ts
│   │   │   ├── ipc
│   │   │   │   ├── browser
│   │   │   │   │   └── ipc.mp.ts
│   │   │   │   ├── common
│   │   │   │   │   ├── ipc.electron.ts
│   │   │   │   │   ├── ipc.mp.ts
│   │   │   │   │   ├── ipc.net.ts
│   │   │   │   │   └── ipc.ts
│   │   │   │   ├── electron-main
│   │   │   │   │   ├── ipc.electron.ts
│   │   │   │   │   ├── ipc.mp.ts
│   │   │   │   │   └── ipcMain.ts
│   │   │   │   ├── electron-sandbox
│   │   │   │   │   ├── ipc.electron.ts
│   │   │   │   │   └── ipc.mp.ts
│   │   │   │   ├── node
│   │   │   │   │   ├── ipc.cp.ts
│   │   │   │   │   ├── ipc.mp.ts
│   │   │   │   │   └── ipc.net.ts
│   │   │   ├── request
│   │   │   │   ├── common
│   │   │   │   │   ├── request.ts
│   │   │   │   │   └── requestImpl.ts
│   │   │   ├── sandbox
│   │   │   │   ├── common
│   │   │   │   │   ├── electronTypes.ts electron配置信息
│   │   │   │   │   └── sandboxTypes.ts 沙盒配置信息
│   │   │   │   ├── electron-sandbox
│   │   │   │   │   ├── electronTypes.ts
│   │   │   │   │   ├── globals.ts
│   │   │   │   │   ├── preload-aux.ts
│   │   │   │   │   └── preload.ts
│   │   │   │   ├── node
│   │   │   │   │   └── electronTypes.ts
│   │   │   └── storage
│   │   │       ├── common
│   │   │       │   └── storage.ts
│   │   │       ├── node
│   │   │       │   └── storage.ts
│   │   └── worker
│   │       └── workerMain.ts
│   ├── code
│   │   ├── browser
│   │   │   └── workbench
│   │   │       ├── callback.html
│   │   │       ├── workbench-dev.html
│   │   │       ├── workbench.html
│   │   │       └── workbench.ts
│   │   ├── electron-main
│   │   │   ├── app.ts
│   │   │   └── main.ts
│   │   ├── electron-sandbox
│   │   │   ├── processExplorer
│   │   │   │   ├── processExplorer-dev.html
│   │   │   │   ├── processExplorer.html
│   │   │   │   ├── processExplorer.ts
│   │   │   │   └── processExplorerMain.ts
│   │   │   └── workbench
│   │   │       ├── workbench-dev.html
│   │   │       ├── workbench.html
│   │   │       └── workbench.ts
│   │   ├── electron-utility
│   │   │   └── sharedProcess
│   │   │       ├── contrib
│   │   │       │   ├── codeCacheCleaner.ts
│   │   │       │   ├── defaultExtensionsInitializer.ts
│   │   │       │   ├── extensions.ts
│   │   │       │   ├── languagePackCachedDataCleaner.ts
│   │   │       │   ├── localizationsUpdater.ts
│   │   │       │   ├── logsDataCleaner.ts
│   │   │       │   ├── storageDataCleaner.ts
│   │   │       │   └── userDataProfilesCleaner.ts
│   │   │       └── sharedProcessMain.ts
│   │   └── node
│   │       ├── cli.ts
│   │       └── cliProcessMain.ts
│   ├── editor
│   │   ├── browser
│   │   │   ├── config
│   │   │   │   ├── charWidthReader.ts
│   │   │   │   ├── domFontInfo.ts
│   │   │   │   ├── editorConfiguration.ts
│   │   │   │   ├── elementSizeObserver.ts
│   │   │   │   ├── fontMeasurements.ts
│   │   │   │   ├── migrateOptions.ts
│   │   │   │   └── tabFocus.ts
│   │   │   ├── controller
│   │   │   │   ├── editContext
│   │   │   │   │   ├── clipboardUtils.ts
│   │   │   │   │   ├── editContext.ts
│   │   │   │   │   ├── native
│   │   │   │   │   │   ├── debugEditContext.ts
│   │   │   │   │   │   ├── editContextFactory.ts
│   │   │   │   │   │   ├── nativeEditContext.ts
│   │   │   │   │   │   ├── nativeEditContextRegistry.ts
│   │   │   │   │   │   ├── nativeEditContextUtils.ts
│   │   │   │   │   │   └── screenReaderSupport.ts
│   │   │   │   │   ├── screenReaderUtils.ts
│   │   │   │   │   └── textArea
│   │   │   │   │       ├── textAreaEditContext.ts
│   │   │   │   │       ├── textAreaEditContextInput.ts
│   │   │   │   │       └── textAreaEditContextState.ts
│   │   │   │   ├── mouseHandler.ts
│   │   │   │   ├── mouseTarget.ts
│   │   │   │   └── pointerHandler.ts
│   │   │   ├── coreCommands.ts
│   │   │   ├── dnd.ts
│   │   │   ├── editorBrowser.ts
│   │   │   ├── editorDom.ts
│   │   │   ├── editorExtensions.ts
│   │   │   ├── gpu
│   │   │   │   ├── atlas
│   │   │   │   │   ├── atlas.ts
│   │   │   │   │   ├── textureAtlas.ts
│   │   │   │   │   ├── textureAtlasPage.ts
│   │   │   │   │   ├── textureAtlasShelfAllocator.ts
│   │   │   │   │   └── textureAtlasSlabAllocator.ts
│   │   │   │   ├── bufferDirtyTracker.ts
│   │   │   │   ├── contentSegmenter.ts
│   │   │   │   ├── css
│   │   │   │   │   ├── decorationCssRuleExtractor.ts
│   │   │   │   │   ├── decorationStyleCache.ts
│   │   │   │   ├── gpu.ts
│   │   │   │   ├── gpuDisposable.ts
│   │   │   │   ├── gpuUtils.ts
│   │   │   │   ├── objectCollectionBuffer.ts
│   │   │   │   ├── raster
│   │   │   │   │   ├── glyphRasterizer.ts
│   │   │   │   │   └── raster.ts
│   │   │   │   ├── rectangleRenderer.ts
│   │   │   │   ├── rectangleRenderer.wgsl.ts
│   │   │   │   ├── renderStrategy
│   │   │   │   │   ├── baseRenderStrategy.ts
│   │   │   │   │   ├── fullFileRenderStrategy.ts
│   │   │   │   │   ├── fullFileRenderStrategy.wgsl.ts
│   │   │   │   │   └── viewportRenderStrategy.ts
│   │   │   │   ├── taskQueue.ts
│   │   │   │   └── viewGpuContext.ts
│   │   │   ├── observableCodeEditor.ts
│   │   │   ├── point.ts
│   │   │   ├── rect.ts
│   │   │   ├── services
│   │   │   │   ├── abstractCodeEditorService.ts
│   │   │   │   ├── bulkEditService.ts
│   │   │   │   ├── codeEditorService.ts
│   │   │   │   ├── editorWorkerService.ts
│   │   │   │   ├── hoverService
│   │   │   │   │   ├── hoverService.ts
│   │   │   │   │   ├── hoverWidget.ts
│   │   │   │   │   └── updatableHoverWidget.ts
│   │   │   │   ├── markerDecorations.ts
│   │   │   │   └── openerService.ts
│   │   │   ├── stableEditorScroll.ts
│   │   │   ├── view
│   │   │   │   ├── domLineBreaksComputer.ts
│   │   │   │   ├── dynamicViewOverlay.ts
│   │   │   │   ├── renderingContext.ts
│   │   │   │   ├── viewController.ts
│   │   │   │   ├── viewLayer.ts
│   │   │   │   ├── viewOverlays.ts
│   │   │   │   ├── viewPart.ts
│   │   │   │   └── viewUserInputEvents.ts
│   │   │   ├── view.ts
│   │   │   ├── viewParts
│   │   │   │   ├── blockDecorations
│   │   │   │   │   └── blockDecorations.ts
│   │   │   │   ├── contentWidgets
│   │   │   │   │   └── contentWidgets.ts
│   │   │   │   ├── currentLineHighlight
│   │   │   │   │   └── currentLineHighlight.ts
│   │   │   │   ├── decorations
│   │   │   │   │   └── decorations.ts
│   │   │   │   ├── editorScrollbar
│   │   │   │   │   └── editorScrollbar.ts
│   │   │   │   ├── glyphMargin
│   │   │   │   │   └── glyphMargin.ts
│   │   │   │   ├── gpuMark
│   │   │   │   │   └── gpuMark.ts
│   │   │   │   ├── indentGuides
│   │   │   │   │   └── indentGuides.ts
│   │   │   │   ├── lineNumbers
│   │   │   │   │   └── lineNumbers.ts
│   │   │   │   ├── linesDecorations
│   │   │   │   │   └── linesDecorations.ts
│   │   │   │   ├── margin
│   │   │   │   │   └── margin.ts
│   │   │   │   ├── marginDecorations
│   │   │   │   │   └── marginDecorations.ts
│   │   │   │   ├── minimap
│   │   │   │   │   ├── minimap.ts
│   │   │   │   │   ├── minimapCharRenderer.ts
│   │   │   │   │   ├── minimapCharRendererFactory.ts
│   │   │   │   │   ├── minimapCharSheet.ts
│   │   │   │   │   └── minimapPreBaked.ts
│   │   │   │   ├── overlayWidgets
│   │   │   │   │   └── overlayWidgets.ts
│   │   │   │   ├── overviewRuler
│   │   │   │   │   ├── decorationsOverviewRuler.ts
│   │   │   │   │   └── overviewRuler.ts
│   │   │   │   ├── rulers
│   │   │   │   │   └── rulers.ts
│   │   │   │   ├── rulersGpu
│   │   │   │   │   └── rulersGpu.ts
│   │   │   │   ├── scrollDecoration
│   │   │   │   │   └── scrollDecoration.ts
│   │   │   │   ├── selections
│   │   │   │   │   └── selections.ts
│   │   │   │   ├── viewCursors
│   │   │   │   │   ├── viewCursor.ts
│   │   │   │   │   └── viewCursors.ts
│   │   │   │   ├── viewLines
│   │   │   │   │   ├── domReadingContext.ts
│   │   │   │   │   ├── rangeUtil.ts
│   │   │   │   │   ├── viewLine.ts
│   │   │   │   │   ├── viewLineOptions.ts
│   │   │   │   │   └── viewLines.ts
│   │   │   │   ├── viewLinesGpu
│   │   │   │   │   └── viewLinesGpu.ts
│   │   │   │   ├── viewZones
│   │   │   │   │   └── viewZones.ts
│   │   │   │   └── whitespace
│   │   │   │       └── whitespace.ts
│   │   │   └── widget
│   │   │       ├── codeEditor
│   │   │       │   ├── codeEditorContributions.ts
│   │   │       │   ├── codeEditorWidget.ts
│   │   │       │   └── embeddedCodeEditorWidget.ts
│   │   │       ├── diffEditor
│   │   │       │   ├── commands.ts
│   │   │       │   ├── components
│   │   │       │   │   ├── accessibleDiffViewer.ts
│   │   │       │   │   ├── diffEditorDecorations.ts
│   │   │       │   │   ├── diffEditorEditors.ts
│   │   │       │   │   ├── diffEditorSash.ts
│   │   │       │   │   └── diffEditorViewZones
│   │   │       │   │       ├── diffEditorViewZones.ts
│   │   │       │   │       ├── inlineDiffDeletedCodeMargin.ts
│   │   │       │   │       └── renderLines.ts
│   │   │       │   ├── delegatingEditorImpl.ts
│   │   │       │   ├── diffEditor.contribution.ts
│   │   │       │   ├── diffEditorOptions.ts
│   │   │       │   ├── diffEditorViewModel.ts
│   │   │       │   ├── diffEditorWidget.ts
│   │   │       │   ├── diffProviderFactoryService.ts
│   │   │       │   ├── embeddedDiffEditorWidget.ts
│   │   │       │   ├── features
│   │   │       │   │   ├── gutterFeature.ts
│   │   │       │   │   ├── hideUnchangedRegionsFeature.ts
│   │   │       │   │   ├── movedBlocksLinesFeature.ts
│   │   │       │   │   ├── overviewRulerFeature.ts
│   │   │       │   │   └── revertButtonsFeature.ts
│   │   │       │   ├── registrations.contribution.ts
│   │   │       │   ├── utils
│   │   │       │   │   └── editorGutter.ts
│   │   │       │   └── utils.ts
│   │   │       ├── markdownRenderer
│   │   │       │   └── browser
│   │   │       │       ├── markdownRenderer.ts
│   │   │       └── multiDiffEditor
│   │   │           ├── colors.ts
│   │   │           ├── diffEditorItemTemplate.ts
│   │   │           ├── model.ts
│   │   │           ├── multiDiffEditorViewModel.ts
│   │   │           ├── multiDiffEditorWidget.ts
│   │   │           ├── multiDiffEditorWidgetImpl.ts
│   │   │           ├── objectPool.ts
│   │   │           ├── utils.ts
│   │   │           └── workbenchUIElementFactory.ts
│   │   ├── common
│   │   │   ├── codecs
│   │   │   │   ├── baseToken.ts
│   │   │   │   ├── linesCodec
│   │   │   │   │   ├── linesDecoder.ts
│   │   │   │   │   └── tokens
│   │   │   │   │       ├── carriageReturn.ts
│   │   │   │   │       ├── line.ts
│   │   │   │   │       └── newLine.ts
│   │   │   │   ├── markdownCodec
│   │   │   │   │   ├── markdownDecoder.ts
│   │   │   │   │   ├── parsers
│   │   │   │   │   │   ├── markdownComment.ts
│   │   │   │   │   │   ├── markdownImage.ts
│   │   │   │   │   │   └── markdownLink.ts
│   │   │   │   │   └── tokens
│   │   │   │   │       ├── markdownComment.ts
│   │   │   │   │       ├── markdownImage.ts
│   │   │   │   │       ├── markdownLink.ts
│   │   │   │   │       └── markdownToken.ts
│   │   │   │   └── simpleCodec
│   │   │   │       ├── parserBase.ts
│   │   │   │       ├── simpleDecoder.ts
│   │   │   │       └── tokens
│   │   │   │           ├── angleBrackets.ts
│   │   │   │           ├── brackets.ts
│   │   │   │           ├── colon.ts
│   │   │   │           ├── dash.ts
│   │   │   │           ├── exclamationMark.ts
│   │   │   │           ├── formFeed.ts
│   │   │   │           ├── hash.ts
│   │   │   │           ├── parentheses.ts
│   │   │   │           ├── space.ts
│   │   │   │           ├── tab.ts
│   │   │   │           ├── verticalTab.ts
│   │   │   │           └── word.ts
│   │   │   ├── commands
│   │   │   │   ├── replaceCommand.ts
│   │   │   │   ├── shiftCommand.ts
│   │   │   │   ├── surroundSelectionCommand.ts
│   │   │   │   └── trimTrailingWhitespaceCommand.ts
│   │   │   ├── config
│   │   │   │   ├── diffEditor.ts
│   │   │   │   ├── editorConfiguration.ts
│   │   │   │   ├── editorConfigurationSchema.ts
│   │   │   │   ├── editorOptions.ts
│   │   │   │   ├── editorZoom.ts
│   │   │   │   └── fontInfo.ts
│   │   │   ├── core
│   │   │   │   ├── characterClassifier.ts
│   │   │   │   ├── cursorColumns.ts
│   │   │   │   ├── dimension.ts
│   │   │   │   ├── editOperation.ts
│   │   │   │   ├── editorColorRegistry.ts
│   │   │   │   ├── eolCounter.ts
│   │   │   │   ├── indentation.ts
│   │   │   │   ├── lineEdit.ts
│   │   │   │   ├── lineRange.ts
│   │   │   │   ├── offsetEdit.ts
│   │   │   │   ├── offsetRange.ts
│   │   │   │   ├── position.ts
│   │   │   │   ├── positionToOffset.ts
│   │   │   │   ├── range.ts
│   │   │   │   ├── rangeMapping.ts
│   │   │   │   ├── rgba.ts
│   │   │   │   ├── selection.ts
│   │   │   │   ├── stringBuilder.ts
│   │   │   │   ├── textChange.ts
│   │   │   │   ├── textEdit.ts
│   │   │   │   ├── textLength.ts
│   │   │   │   ├── textModelDefaults.ts
│   │   │   │   ├── wordCharacterClassifier.ts
│   │   │   │   └── wordHelper.ts
│   │   │   ├── cursor
│   │   │   │   ├── cursor.ts
│   │   │   │   ├── cursorAtomicMoveOperations.ts
│   │   │   │   ├── cursorCollection.ts
│   │   │   │   ├── cursorColumnSelection.ts
│   │   │   │   ├── cursorContext.ts
│   │   │   │   ├── cursorDeleteOperations.ts
│   │   │   │   ├── cursorMoveCommands.ts
│   │   │   │   ├── cursorMoveOperations.ts
│   │   │   │   ├── cursorTypeEditOperations.ts
│   │   │   │   ├── cursorTypeOperations.ts
│   │   │   │   ├── cursorWordOperations.ts
│   │   │   │   └── oneCursor.ts
│   │   │   ├── cursorCommon.ts
│   │   │   ├── cursorEvents.ts
│   │   │   ├── diff
│   │   │   │   ├── defaultLinesDiffComputer
│   │   │   │   │   ├── algorithms
│   │   │   │   │   │   ├── diffAlgorithm.ts
│   │   │   │   │   │   ├── dynamicProgrammingDiffing.ts
│   │   │   │   │   │   └── myersDiffAlgorithm.ts
│   │   │   │   │   ├── computeMovedLines.ts
│   │   │   │   │   ├── defaultLinesDiffComputer.ts
│   │   │   │   │   ├── heuristicSequenceOptimizations.ts
│   │   │   │   │   ├── lineSequence.ts
│   │   │   │   │   ├── linesSliceCharSequence.ts
│   │   │   │   │   └── utils.ts
│   │   │   │   ├── documentDiffProvider.ts
│   │   │   │   ├── legacyLinesDiffComputer.ts
│   │   │   │   ├── linesDiffComputer.ts
│   │   │   │   ├── linesDiffComputers.ts
│   │   │   │   └── rangeMapping.ts
│   │   │   ├── editorAction.ts
│   │   │   ├── editorCommon.ts
│   │   │   ├── editorContextKeys.ts
│   │   │   ├── editorFeatures.ts
│   │   │   ├── editorTheme.ts
│   │   │   ├── encodedTokenAttributes.ts
│   │   │   ├── inputMode.ts
│   │   │   ├── languageFeatureRegistry.ts
│   │   │   ├── languageSelector.ts
│   │   │   ├── languages
│   │   │   │   ├── autoIndent.ts
│   │   │   │   ├── defaultDocumentColorsComputer.ts
│   │   │   │   ├── enterAction.ts
│   │   │   │   ├── highlights
│   │   │   │   │   ├── ini.scm
│   │   │   │   │   └── typescript.scm
│   │   │   │   ├── language.ts
│   │   │   │   ├── languageConfiguration.ts
│   │   │   │   ├── languageConfigurationRegistry.ts
│   │   │   │   ├── linkComputer.ts
│   │   │   │   ├── modesRegistry.ts
│   │   │   │   ├── nullTokenize.ts
│   │   │   │   ├── supports
│   │   │   │   │   ├── characterPair.ts
│   │   │   │   │   ├── electricCharacter.ts
│   │   │   │   │   ├── indentRules.ts
│   │   │   │   │   ├── indentationLineProcessor.ts
│   │   │   │   │   ├── inplaceReplaceSupport.ts
│   │   │   │   │   ├── languageBracketsConfiguration.ts
│   │   │   │   │   ├── onEnter.ts
│   │   │   │   │   ├── richEditBrackets.ts
│   │   │   │   │   └── tokenization.ts
│   │   │   │   ├── supports.ts
│   │   │   │   └── textToHtmlTokenizer.ts
│   │   │   ├── languages.ts
│   │   │   ├── model
│   │   │   │   ├── bracketPairsTextModelPart
│   │   │   │   │   ├── bracketPairsImpl.ts
│   │   │   │   │   ├── bracketPairsTree
│   │   │   │   │   │   ├── ast.ts
│   │   │   │   │   │   ├── beforeEditPositionMapper.ts
│   │   │   │   │   │   ├── bracketPairsTree.ts
│   │   │   │   │   │   ├── brackets.ts
│   │   │   │   │   │   ├── combineTextEditInfos.ts
│   │   │   │   │   │   ├── concat23Trees.ts
│   │   │   │   │   │   ├── length.ts
│   │   │   │   │   │   ├── nodeReader.ts
│   │   │   │   │   │   ├── parser.ts
│   │   │   │   │   │   ├── smallImmutableSet.ts
│   │   │   │   │   │   └── tokenizer.ts
│   │   │   │   │   ├── colorizedBracketPairsDecorationProvider.ts
│   │   │   │   │   └── fixBrackets.ts
│   │   │   │   ├── decorationProvider.ts
│   │   │   │   ├── editStack.ts
│   │   │   │   ├── fixedArray.ts
│   │   │   │   ├── guidesTextModelPart.ts
│   │   │   │   ├── indentationGuesser.ts
│   │   │   │   ├── intervalTree.ts
│   │   │   │   ├── mirrorTextModel.ts
│   │   │   │   ├── pieceTreeTextBuffer
│   │   │   │   │   ├── pieceTreeBase.ts
│   │   │   │   │   ├── pieceTreeTextBuffer.ts
│   │   │   │   │   ├── pieceTreeTextBufferBuilder.ts
│   │   │   │   │   └── rbTreeBase.ts
│   │   │   │   ├── prefixSumComputer.ts
│   │   │   │   ├── textModel.ts
│   │   │   │   ├── textModelOffsetEdit.ts
│   │   │   │   ├── textModelPart.ts
│   │   │   │   ├── textModelSearch.ts
│   │   │   │   ├── textModelText.ts
│   │   │   │   ├── textModelTokens.ts
│   │   │   │   ├── tokenStore.ts
│   │   │   │   ├── tokenizationTextModelPart.ts
│   │   │   │   ├── tokens.ts
│   │   │   │   ├── treeSitterTokenStoreService.ts
│   │   │   │   ├── treeSitterTokens.ts
│   │   │   │   └── utils.ts
│   │   │   ├── model.ts
│   │   │   ├── modelLineProjectionData.ts
│   │   │   ├── services
│   │   │   │   ├── editorBaseApi.ts
│   │   │   │   ├── editorSimpleWorker.ts
│   │   │   │   ├── editorSimpleWorkerMain.ts
│   │   │   │   ├── editorWorker.ts
│   │   │   │   ├── editorWorkerBootstrap.ts
│   │   │   │   ├── editorWorkerHost.ts
│   │   │   │   ├── findSectionHeaders.ts
│   │   │   │   ├── getIconClasses.ts
│   │   │   │   ├── languageFeatureDebounce.ts
│   │   │   │   ├── languageFeatures.ts
│   │   │   │   ├── languageFeaturesService.ts
│   │   │   │   ├── languageService.ts
│   │   │   │   ├── languagesAssociations.ts
│   │   │   │   ├── languagesRegistry.ts
│   │   │   │   ├── markerDecorations.ts
│   │   │   │   ├── markerDecorationsService.ts
│   │   │   │   ├── model.ts
│   │   │   │   ├── modelService.ts
│   │   │   │   ├── modelUndoRedoParticipant.ts
│   │   │   │   ├── resolverService.ts
│   │   │   │   ├── semanticTokensDto.ts
│   │   │   │   ├── semanticTokensProviderStyling.ts
│   │   │   │   ├── semanticTokensStyling.ts
│   │   │   │   ├── semanticTokensStylingService.ts
│   │   │   │   ├── textModelSync
│   │   │   │   │   ├── textModelSync.impl.ts
│   │   │   │   │   └── textModelSync.protocol.ts
│   │   │   │   ├── textResourceConfiguration.ts
│   │   │   │   ├── textResourceConfigurationService.ts
│   │   │   │   ├── treeSitter
│   │   │   │   │   ├── cursorUtils.ts
│   │   │   │   │   └── treeSitterParserService.ts
│   │   │   │   ├── treeSitterParserService.ts
│   │   │   │   ├── treeViewsDnd.ts
│   │   │   │   ├── treeViewsDndService.ts
│   │   │   │   └── unicodeTextModelHighlighter.ts
│   │   │   ├── standalone
│   │   │   │   └── standaloneEnums.ts
│   │   │   ├── standaloneStrings.ts
│   │   │   ├── textModelBracketPairs.ts
│   │   │   ├── textModelEvents.ts
│   │   │   ├── textModelGuides.ts
│   │   │   ├── tokenizationRegistry.ts
│   │   │   ├── tokenizationTextModelPart.ts
│   │   │   ├── tokens
│   │   │   │   ├── contiguousMultilineTokens.ts
│   │   │   │   ├── contiguousMultilineTokensBuilder.ts
│   │   │   │   ├── contiguousTokensEditing.ts
│   │   │   │   ├── contiguousTokensStore.ts
│   │   │   │   ├── lineTokens.ts
│   │   │   │   ├── sparseMultilineTokens.ts
│   │   │   │   ├── sparseTokensStore.ts
│   │   │   │   └── tokenArray.ts
│   │   │   ├── viewEventHandler.ts
│   │   │   ├── viewEvents.ts
│   │   │   ├── viewLayout
│   │   │   │   ├── lineDecorations.ts
│   │   │   │   ├── linePart.ts
│   │   │   │   ├── linesLayout.ts
│   │   │   │   ├── viewLayout.ts
│   │   │   │   ├── viewLineRenderer.ts
│   │   │   │   └── viewLinesViewportData.ts
│   │   │   ├── viewModel
│   │   │   │   ├── glyphLanesModel.ts
│   │   │   │   ├── minimapTokensColorTracker.ts
│   │   │   │   ├── modelLineProjection.ts
│   │   │   │   ├── monospaceLineBreaksComputer.ts
│   │   │   │   ├── overviewZoneManager.ts
│   │   │   │   ├── viewContext.ts
│   │   │   │   ├── viewModelDecorations.ts
│   │   │   │   ├── viewModelImpl.ts
│   │   │   │   └── viewModelLines.ts
│   │   │   ├── viewModel.ts
│   │   │   └── viewModelEventDispatcher.ts
│   │   ├── contrib
│   │   │   ├── anchorSelect
│   │   │   │   └── browser
│   │   │   │       └── anchorSelect.ts
│   │   │   ├── bracketMatching
│   │   │   │   ├── browser
│   │   │   │   │   └── bracketMatching.ts
│   │   │   ├── caretOperations
│   │   │   │   ├── browser
│   │   │   │   │   ├── caretOperations.ts
│   │   │   │   │   ├── moveCaretCommand.ts
│   │   │   │   │   └── transpose.ts
│   │   │   ├── clipboard
│   │   │   │   └── browser
│   │   │   │       └── clipboard.ts
│   │   │   ├── codeAction
│   │   │   │   ├── browser
│   │   │   │   │   ├── codeAction.ts
│   │   │   │   │   ├── codeActionCommands.ts
│   │   │   │   │   ├── codeActionContributions.ts
│   │   │   │   │   ├── codeActionController.ts
│   │   │   │   │   ├── codeActionKeybindingResolver.ts
│   │   │   │   │   ├── codeActionMenu.ts
│   │   │   │   │   ├── codeActionModel.ts
│   │   │   │   │   └── lightBulbWidget.ts
│   │   │   │   ├── common
│   │   │   │   │   └── types.ts
│   │   │   ├── codelens
│   │   │   │   └── browser
│   │   │   │       ├── codeLensCache.ts
│   │   │   │       ├── codelens.ts
│   │   │   │       ├── codelensController.ts
│   │   │   │       └── codelensWidget.ts
│   │   │   ├── colorPicker
│   │   │   │   └── browser
│   │   │   │       ├── color.ts
│   │   │   │       ├── colorDetector.ts
│   │   │   │       ├── colorPickerContribution.ts
│   │   │   │       ├── colorPickerModel.ts
│   │   │   │       ├── colorPickerParticipantUtils.ts
│   │   │   │       ├── colorPickerParts
│   │   │   │       │   ├── colorPickerBody.ts
│   │   │   │       │   ├── colorPickerCloseButton.ts
│   │   │   │       │   ├── colorPickerHeader.ts
│   │   │   │       │   ├── colorPickerInsertButton.ts
│   │   │   │       │   ├── colorPickerSaturationBox.ts
│   │   │   │       │   └── colorPickerStrip.ts
│   │   │   │       ├── colorPickerWidget.ts
│   │   │   │       ├── defaultDocumentColorProvider.ts
│   │   │   │       ├── hoverColorPicker
│   │   │   │       │   ├── hoverColorPicker.ts
│   │   │   │       │   ├── hoverColorPickerContribution.ts
│   │   │   │       │   └── hoverColorPickerParticipant.ts
│   │   │   │       └── standaloneColorPicker
│   │   │   │           ├── standaloneColorPickerActions.ts
│   │   │   │           ├── standaloneColorPickerController.ts
│   │   │   │           ├── standaloneColorPickerParticipant.ts
│   │   │   │           └── standaloneColorPickerWidget.ts
│   │   │   ├── comment
│   │   │   │   ├── browser
│   │   │   │   │   ├── blockCommentCommand.ts
│   │   │   │   │   ├── comment.ts
│   │   │   │   │   └── lineCommentCommand.ts
│   │   │   ├── contextmenu
│   │   │   │   └── browser
│   │   │   │       └── contextmenu.ts
│   │   │   ├── cursorUndo
│   │   │   │   ├── browser
│   │   │   │   │   └── cursorUndo.ts
│   │   │   ├── diffEditorBreadcrumbs
│   │   │   │   └── browser
│   │   │   │       └── contribution.ts
│   │   │   ├── dnd
│   │   │   │   └── browser
│   │   │   │       ├── dnd.ts
│   │   │   │       └── dragAndDropCommand.ts
│   │   │   ├── documentSymbols
│   │   │   │   ├── browser
│   │   │   │   │   ├── documentSymbols.ts
│   │   │   │   │   └── outlineModel.ts
│   │   │   ├── dropOrPasteInto
│   │   │   │   ├── browser
│   │   │   │   │   ├── copyPasteContribution.ts
│   │   │   │   │   ├── copyPasteController.ts
│   │   │   │   │   ├── defaultProviders.ts
│   │   │   │   │   ├── dropIntoEditorContribution.ts
│   │   │   │   │   ├── dropIntoEditorController.ts
│   │   │   │   │   ├── edit.ts
│   │   │   │   │   └── postEditWidget.ts
│   │   │   ├── editorState
│   │   │   │   ├── browser
│   │   │   │   │   ├── editorState.ts
│   │   │   │   │   └── keybindingCancellation.ts
│   │   │   ├── find
│   │   │   │   ├── browser
│   │   │   │   │   ├── findController.ts
│   │   │   │   │   ├── findDecorations.ts
│   │   │   │   │   ├── findModel.ts
│   │   │   │   │   ├── findOptionsWidget.ts
│   │   │   │   │   ├── findState.ts
│   │   │   │   │   ├── findWidget.ts
│   │   │   │   │   ├── findWidgetSearchHistory.ts
│   │   │   │   │   ├── replaceAllCommand.ts
│   │   │   │   │   ├── replacePattern.ts
│   │   │   │   │   └── replaceWidgetHistory.ts
│   │   │   ├── folding
│   │   │   │   ├── browser
│   │   │   │   │   ├── folding.ts
│   │   │   │   │   ├── foldingDecorations.ts
│   │   │   │   │   ├── foldingModel.ts
│   │   │   │   │   ├── foldingRanges.ts
│   │   │   │   │   ├── hiddenRangeModel.ts
│   │   │   │   │   ├── indentRangeProvider.ts
│   │   │   │   │   └── syntaxRangeProvider.ts
│   │   │   ├── fontZoom
│   │   │   │   └── browser
│   │   │   │       └── fontZoom.ts
│   │   │   ├── format
│   │   │   │   └── browser
│   │   │   │       ├── format.ts
│   │   │   │       ├── formatActions.ts
│   │   │   │       └── formattingEdit.ts
│   │   │   ├── gotoError
│   │   │   │   └── browser
│   │   │   │       ├── gotoError.ts
│   │   │   │       ├── gotoErrorWidget.ts
│   │   │   │       ├── markerNavigationService.ts
│   │   │   ├── gotoSymbol
│   │   │   │   ├── browser
│   │   │   │   │   ├── goToCommands.ts
│   │   │   │   │   ├── goToSymbol.ts
│   │   │   │   │   ├── link
│   │   │   │   │   │   ├── clickLinkGesture.ts
│   │   │   │   │   │   └── goToDefinitionAtPosition.ts
│   │   │   │   │   ├── peek
│   │   │   │   │   │   ├── referencesController.ts
│   │   │   │   │   │   ├── referencesTree.ts
│   │   │   │   │   │   └── referencesWidget.ts
│   │   │   │   │   ├── referencesModel.ts
│   │   │   │   │   └── symbolNavigation.ts
│   │   │   ├── gpu
│   │   │   │   └── browser
│   │   │   │       └── gpuActions.ts
│   │   │   ├── hover
│   │   │   │   ├── browser
│   │   │   │   │   ├── contentHoverComputer.ts
│   │   │   │   │   ├── contentHoverController.ts
│   │   │   │   │   ├── contentHoverRendered.ts
│   │   │   │   │   ├── contentHoverStatusBar.ts
│   │   │   │   │   ├── contentHoverTypes.ts
│   │   │   │   │   ├── contentHoverWidget.ts
│   │   │   │   │   ├── contentHoverWidgetWrapper.ts
│   │   │   │   │   ├── getHover.ts
│   │   │   │   │   ├── glyphHoverComputer.ts
│   │   │   │   │   ├── glyphHoverController.ts
│   │   │   │   │   ├── glyphHoverWidget.ts
│   │   │   │   │   ├── hoverAccessibleViews.ts
│   │   │   │   │   ├── hoverActionIds.ts
│   │   │   │   │   ├── hoverActions.ts
│   │   │   │   │   ├── hoverContribution.ts
│   │   │   │   │   ├── hoverOperation.ts
│   │   │   │   │   ├── hoverTypes.ts
│   │   │   │   │   ├── hoverUtils.ts
│   │   │   │   │   ├── markdownHoverParticipant.ts
│   │   │   │   │   ├── markerHoverParticipant.ts
│   │   │   │   │   └── resizableContentWidget.ts
│   │   │   ├── inPlaceReplace
│   │   │   │   └── browser
│   │   │   │       ├── inPlaceReplace.ts
│   │   │   │       └── inPlaceReplaceCommand.ts
│   │   │   ├── indentation
│   │   │   │   ├── browser
│   │   │   │   │   └── indentation.ts
│   │   │   │   ├── common
│   │   │   │   │   ├── indentUtils.ts
│   │   │   │   │   └── indentation.ts
│   │   │   ├── inlayHints
│   │   │   │   └── browser
│   │   │   │       ├── inlayHints.ts
│   │   │   │       ├── inlayHintsContribution.ts
│   │   │   │       ├── inlayHintsController.ts
│   │   │   │       ├── inlayHintsHover.ts
│   │   │   │       └── inlayHintsLocations.ts
│   │   │   ├── inlineCompletions
│   │   │   │   ├── browser
│   │   │   │   │   ├── controller
│   │   │   │   │   │   ├── commandIds.ts
│   │   │   │   │   │   ├── commands.ts
│   │   │   │   │   │   ├── inlineCompletionContextKeys.ts
│   │   │   │   │   │   └── inlineCompletionsController.ts
│   │   │   │   │   ├── hintsWidget
│   │   │   │   │   │   ├── hoverParticipant.ts
│   │   │   │   │   │   └── inlineCompletionsHintsWidget.ts
│   │   │   │   │   ├── inlineCompletions.contribution.ts
│   │   │   │   │   ├── inlineCompletionsAccessibleView.ts
│   │   │   │   │   ├── model
│   │   │   │   │   │   ├── animation.ts
│   │   │   │   │   │   ├── changeRecorder.ts
│   │   │   │   │   │   ├── computeGhostText.ts
│   │   │   │   │   │   ├── ghostText.ts
│   │   │   │   │   │   ├── inlineCompletionsModel.ts
│   │   │   │   │   │   ├── inlineCompletionsSource.ts
│   │   │   │   │   │   ├── inlineEdit.ts
│   │   │   │   │   │   ├── inlineEditsAdapter.ts
│   │   │   │   │   │   ├── provideInlineCompletions.ts
│   │   │   │   │   │   ├── singleTextEditHelpers.ts
│   │   │   │   │   │   └── suggestWidgetAdapter.ts
│   │   │   │   │   ├── utils.ts
│   │   │   │   │   └── view
│   │   │   │   │       ├── ghostText
│   │   │   │   │       │   └── ghostTextView.ts
│   │   │   │   │       ├── inlineCompletionsView.ts
│   │   │   │   │       └── inlineEdits
│   │   │   │   │           ├── components
│   │   │   │   │           │   ├── gutterIndicatorMenu.ts
│   │   │   │   │           │   ├── gutterIndicatorView.ts
│   │   │   │   │           │   └── indicatorView.ts
│   │   │   │   │           ├── inlineEditWithChanges.ts
│   │   │   │   │           ├── inlineEditsModel.ts
│   │   │   │   │           ├── inlineEditsView.ts
│   │   │   │   │           ├── inlineEditsViewInterface.ts
│   │   │   │   │           ├── inlineEditsViewProducer.ts
│   │   │   │   │           ├── inlineEditsViews
│   │   │   │   │           │   ├── debugVisualization.ts
│   │   │   │   │           │   ├── inlineEditsDeletionView.ts
│   │   │   │   │           │   ├── inlineEditsInsertionView.ts
│   │   │   │   │           │   ├── inlineEditsLineReplacementView.ts
│   │   │   │   │           │   ├── inlineEditsSideBySideView.ts
│   │   │   │   │           │   ├── inlineEditsWordInsertView.ts
│   │   │   │   │           │   ├── inlineEditsWordReplacementView.ts
│   │   │   │   │           │   └── originalEditorInlineDiffView.ts
│   │   │   │   │           ├── theme.ts
│   │   │   │   │           ├── utils
│   │   │   │   │           │   └── utils.ts
│   │   │   ├── inlineProgress
│   │   │   │   └── browser
│   │   │   │       ├── inlineProgress.ts
│   │   │   ├── insertFinalNewLine
│   │   │   │   └── browser
│   │   │   │       ├── insertFinalNewLine.ts
│   │   │   │       └── insertFinalNewLineCommand.ts
│   │   │   ├── lineSelection
│   │   │   │   ├── browser
│   │   │   │   │   └── lineSelection.ts
│   │   │   ├── linesOperations
│   │   │   │   ├── browser
│   │   │   │   │   ├── copyLinesCommand.ts
│   │   │   │   │   ├── linesOperations.ts
│   │   │   │   │   ├── moveLinesCommand.ts
│   │   │   │   │   └── sortLinesCommand.ts
│   │   │   ├── linkedEditing
│   │   │   │   ├── browser
│   │   │   │   │   └── linkedEditing.ts
│   │   │   ├── links
│   │   │   │   └── browser
│   │   │   │       ├── getLinks.ts
│   │   │   │       └── links.ts
│   │   │   ├── longLinesHelper
│   │   │   │   └── browser
│   │   │   │       └── longLinesHelper.ts
│   │   │   ├── message
│   │   │   │   └── browser
│   │   │   │       └── messageController.ts
│   │   │   ├── multicursor
│   │   │   │   ├── browser
│   │   │   │   │   └── multicursor.ts
│   │   │   ├── parameterHints
│   │   │   │   ├── browser
│   │   │   │   │   ├── parameterHints.ts
│   │   │   │   │   ├── parameterHintsModel.ts
│   │   │   │   │   ├── parameterHintsWidget.ts
│   │   │   │   │   └── provideSignatureHelp.ts
│   │   │   ├── peekView
│   │   │   │   └── browser
│   │   │   │       └── peekView.ts
│   │   │   ├── placeholderText
│   │   │   │   └── browser
│   │   │   │       ├── placeholderText.contribution.ts
│   │   │   │       └── placeholderTextContribution.ts
│   │   │   ├── quickAccess
│   │   │   │   └── browser
│   │   │   │       ├── commandsQuickAccess.ts
│   │   │   │       ├── editorNavigationQuickAccess.ts
│   │   │   │       ├── gotoLineQuickAccess.ts
│   │   │   │       └── gotoSymbolQuickAccess.ts
│   │   │   ├── readOnlyMessage
│   │   │   │   └── browser
│   │   │   │       └── contribution.ts
│   │   │   ├── rename
│   │   │   │   └── browser
│   │   │   │       ├── rename.ts
│   │   │   │       └── renameWidget.ts
│   │   │   ├── sectionHeaders
│   │   │   │   └── browser
│   │   │   │       └── sectionHeaders.ts
│   │   │   ├── semanticTokens
│   │   │   │   ├── browser
│   │   │   │   │   ├── documentSemanticTokens.ts
│   │   │   │   │   └── viewportSemanticTokens.ts
│   │   │   │   ├── common
│   │   │   │   │   ├── getSemanticTokens.ts
│   │   │   │   │   └── semanticTokensConfig.ts
│   │   │   ├── smartSelect
│   │   │   │   ├── browser
│   │   │   │   │   ├── bracketSelections.ts
│   │   │   │   │   ├── smartSelect.ts
│   │   │   │   │   └── wordSelections.ts
│   │   │   ├── snippet
│   │   │   │   ├── browser
│   │   │   │   │   ├── snippet.md
│   │   │   │   │   ├── snippetController2.ts
│   │   │   │   │   ├── snippetParser.ts
│   │   │   │   │   ├── snippetSession.ts
│   │   │   │   │   └── snippetVariables.ts
│   │   │   ├── stickyScroll
│   │   │   │   ├── browser
│   │   │   │   │   ├── stickyScrollActions.ts
│   │   │   │   │   ├── stickyScrollContribution.ts
│   │   │   │   │   ├── stickyScrollController.ts
│   │   │   │   │   ├── stickyScrollElement.ts
│   │   │   │   │   ├── stickyScrollModelProvider.ts
│   │   │   │   │   ├── stickyScrollProvider.ts
│   │   │   │   │   └── stickyScrollWidget.ts
│   │   │   ├── suggest
│   │   │   │   ├── browser
│   │   │   │   │   ├── completionModel.ts
│   │   │   │   │   ├── suggest.ts
│   │   │   │   │   ├── suggestAlternatives.ts
│   │   │   │   │   ├── suggestCommitCharacters.ts
│   │   │   │   │   ├── suggestController.ts
│   │   │   │   │   ├── suggestInlineCompletions.ts
│   │   │   │   │   ├── suggestMemory.ts
│   │   │   │   │   ├── suggestModel.ts
│   │   │   │   │   ├── suggestOvertypingCapturer.ts
│   │   │   │   │   ├── suggestWidget.ts
│   │   │   │   │   ├── suggestWidgetDetails.ts
│   │   │   │   │   ├── suggestWidgetRenderer.ts
│   │   │   │   │   ├── suggestWidgetStatus.ts
│   │   │   │   │   ├── wordContextKey.ts
│   │   │   │   │   └── wordDistance.ts
│   │   │   ├── symbolIcons
│   │   │   │   └── browser
│   │   │   │       └── symbolIcons.ts
│   │   │   ├── toggleTabFocusMode
│   │   │   │   └── browser
│   │   │   │       └── toggleTabFocusMode.ts
│   │   │   ├── tokenization
│   │   │   │   └── browser
│   │   │   │       └── tokenization.ts
│   │   │   ├── unicodeHighlighter
│   │   │   │   └── browser
│   │   │   │       ├── bannerController.ts
│   │   │   │       └── unicodeHighlighter.ts
│   │   │   ├── unusualLineTerminators
│   │   │   │   └── browser
│   │   │   │       └── unusualLineTerminators.ts
│   │   │   ├── wordHighlighter
│   │   │   │   └── browser
│   │   │   │       ├── highlightDecorations.ts
│   │   │   │       ├── textualHighlightProvider.ts
│   │   │   │       └── wordHighlighter.ts
│   │   │   ├── wordOperations
│   │   │   │   ├── browser
│   │   │   │   │   └── wordOperations.ts
│   │   │   ├── wordPartOperations
│   │   │   │   ├── browser
│   │   │   │   │   └── wordPartOperations.ts
│   │   │   └── zoneWidget
│   │   │       └── browser
│   │   │           └── zoneWidget.ts
│   │   ├── editor.all.ts
│   │   ├── editor.api.ts
│   │   ├── editor.main.ts
│   │   ├── editor.worker.ts
│   │   ├── standalone
│   │   │   ├── browser
│   │   │   │   ├── colorizer.ts
│   │   │   │   ├── iPadShowKeyboard
│   │   │   │   │   ├── iPadShowKeyboard.ts
│   │   │   │   ├── inspectTokens
│   │   │   │   │   └── inspectTokens.ts
│   │   │   │   ├── quickAccess
│   │   │   │   │   ├── standaloneCommandsQuickAccess.ts
│   │   │   │   │   ├── standaloneGotoLineQuickAccess.ts
│   │   │   │   │   ├── standaloneGotoSymbolQuickAccess.ts
│   │   │   │   │   └── standaloneHelpQuickAccess.ts
│   │   │   │   ├── quickInput
│   │   │   │   │   └── standaloneQuickInputService.ts
│   │   │   │   ├── referenceSearch
│   │   │   │   │   └── standaloneReferenceSearch.ts
│   │   │   │   ├── standaloneCodeEditor.ts
│   │   │   │   ├── standaloneCodeEditorService.ts
│   │   │   │   ├── standaloneEditor.ts
│   │   │   │   ├── standaloneLanguages.ts
│   │   │   │   ├── standaloneLayoutService.ts
│   │   │   │   ├── standaloneServices.ts
│   │   │   │   ├── standaloneThemeService.ts
│   │   │   │   ├── standaloneTreeSitterService.ts
│   │   │   │   ├── standaloneWebWorker.ts
│   │   │   │   └── toggleHighContrast
│   │   │   │       └── toggleHighContrast.ts
│   │   │   ├── common
│   │   │   │   ├── monarch
│   │   │   │   │   ├── monarchCommon.ts
│   │   │   │   │   ├── monarchCompile.ts
│   │   │   │   │   ├── monarchLexer.ts
│   │   │   │   │   └── monarchTypes.ts
│   │   │   │   ├── standaloneTheme.ts
│   │   │   │   └── themes.ts
│   ├── loader.js
│   ├── monaco.d.ts
│   ├── nls.messages.ts 获取当前语言和语言包，全量或者是当前语言id下对应的语言包 没验证
│   ├── nls.ts 多语言 解析语言仓库，加载到内存中，_VSCODE_NLS_MESSAGES
│   ├── platform
│   │   ├── accessibility
│   │   │   ├── browser
│   │   │   │   ├── accessibilityService.ts
│   │   │   │   ├── accessibleView.ts
│   │   │   │   └── accessibleViewRegistry.ts
│   │   │   ├── common
│   │   │   │   └── accessibility.ts
│   │   ├── accessibilitySignal
│   │   │   └── browser
│   │   │       ├── accessibilitySignalService.ts
│   │   │       ├── media
│   │   │       │   ├── break.mp3
│   │   │       │   ├── chatEditModifiedFile.mp3
│   │   │       │   ├── clear.mp3
│   │   │       │   ├── diffLineDeleted.mp3
│   │   │       │   ├── diffLineInserted.mp3
│   │   │       │   ├── diffLineModified.mp3
│   │   │       │   ├── error.mp3
│   │   │       │   ├── foldedAreas.mp3
│   │   │       │   ├── format.mp3
│   │   │       │   ├── progress.mp3
│   │   │       │   ├── quickFixes.mp3
│   │   │       │   ├── requestSent.mp3
│   │   │       │   ├── responseReceived1.mp3
│   │   │       │   ├── responseReceived2.mp3
│   │   │       │   ├── responseReceived3.mp3
│   │   │       │   ├── responseReceived4.mp3
│   │   │       │   ├── save.mp3
│   │   │       │   ├── success.mp3
│   │   │       │   ├── taskCompleted.mp3
│   │   │       │   ├── taskFailed.mp3
│   │   │       │   ├── terminalBell.mp3
│   │   │       │   ├── voiceRecordingStarted.mp3
│   │   │       │   ├── voiceRecordingStopped.mp3
│   │   │       │   └── warning.mp3
│   │   │       └── progressAccessibilitySignalScheduler.ts
│   │   ├── action
│   │   │   └── common
│   │   │       ├── action.ts
│   │   │       └── actionCommonCategories.ts
│   │   ├── actionWidget
│   │   │   ├── browser
│   │   │   │   ├── actionList.ts
│   │   │   │   └── actionWidget.ts
│   │   │   └── common
│   │   │       └── actionWidget.ts
│   │   ├── actions
│   │   │   ├── browser
│   │   │   │   ├── actionViewItemService.ts
│   │   │   │   ├── buttonbar.ts
│   │   │   │   ├── dropdownActionViewItemWithKeybinding.ts
│   │   │   │   ├── dropdownWithPrimaryActionViewItem.ts
│   │   │   │   ├── floatingMenu.ts
│   │   │   │   ├── menuEntryActionViewItem.ts
│   │   │   │   └── toolbar.ts
│   │   │   ├── common
│   │   │   │   ├── actions.contribution.ts
│   │   │   │   ├── actions.ts
│   │   │   │   ├── menuResetAction.ts
│   │   │   │   └── menuService.ts
│   │   ├── assignment
│   │   │   └── common
│   │   │       ├── assignment.ts
│   │   │       └── assignmentService.ts
│   │   ├── auxiliaryWindow
│   │   │   └── electron-main
│   │   │       ├── auxiliaryWindow.ts
│   │   │       ├── auxiliaryWindows.ts
│   │   │       └── auxiliaryWindowsMainService.ts
│   │   ├── backup
│   │   │   ├── common
│   │   │   │   └── backup.ts
│   │   │   ├── electron-main
│   │   │   │   ├── backup.ts
│   │   │   │   └── backupMainService.ts
│   │   │   ├── node
│   │   │   │   └── backup.ts
│   │   ├── checksum
│   │   │   ├── common
│   │   │   │   └── checksumService.ts
│   │   │   ├── node
│   │   │   │   └── checksumService.ts
│   │   ├── clipboard
│   │   │   ├── browser
│   │   │   │   └── clipboardService.ts
│   │   │   ├── common
│   │   │   │   └── clipboardService.ts
│   │   ├── commands
│   │   │   ├── common
│   │   │   │   └── commands.ts
│   │   ├── configuration
│   │   │   ├── common
│   │   │   │   ├── configuration.ts
│   │   │   │   ├── configurationModels.ts
│   │   │   │   ├── configurationRegistry.ts xxxxx
│   │   │   │   ├── configurationService.ts
│   │   │   │   └── configurations.ts
│   │   ├── contextkey
│   │   │   ├── browser
│   │   │   │   └── contextKeyService.ts
│   │   │   ├── common
│   │   │   │   ├── contextkey.ts
│   │   │   │   ├── contextkeys.ts
│   │   │   │   └── scanner.ts
│   │   ├── contextview
│   │   │   └── browser
│   │   │       ├── contextMenuHandler.ts
│   │   │       ├── contextMenuService.ts
│   │   │       ├── contextView.ts
│   │   │       └── contextViewService.ts
│   │   ├── cssDev
│   │   │   └── node
│   │   │       └── cssDevService.ts
│   │   ├── debug
│   │   │   ├── common
│   │   │   │   ├── extensionHostDebug.ts
│   │   │   │   └── extensionHostDebugIpc.ts
│   │   │   └── electron-main
│   │   │       └── extensionHostDebugIpc.ts
│   │   ├── diagnostics
│   │   │   ├── common
│   │   │   │   └── diagnostics.ts
│   │   │   ├── electron-main
│   │   │   │   └── diagnosticsMainService.ts
│   │   │   ├── electron-sandbox
│   │   │   │   └── diagnosticsService.ts
│   │   │   └── node
│   │   │       └── diagnosticsService.ts
│   │   ├── dialogs
│   │   │   ├── common
│   │   │   │   └── dialogs.ts
│   │   │   ├── electron-main
│   │   │   │   └── dialogMainService.ts
│   │   ├── dnd
│   │   │   └── browser
│   │   │       └── dnd.ts
│   │   ├── download
│   │   │   └── common
│   │   │       ├── download.ts
│   │   │       ├── downloadIpc.ts
│   │   │       └── downloadService.ts
│   │   ├── editor
│   │   │   └── common
│   │   │       └── editor.ts
│   │   ├── encryption
│   │   │   ├── common
│   │   │   │   └── encryptionService.ts
│   │   │   └── electron-main
│   │   │       └── encryptionMainService.ts
│   │   ├── environment
│   │   │   ├── common
│   │   │   │   ├── argv.ts 主要是各类命令行参数类型定义
│   │   │   │   ├── environment.ts
│   │   │   │   └── environmentService.ts
│   │   │   ├── electron-main
│   │   │   │   └── environmentMainService.ts 各种environment配置 例如缓存路径，升级配置
│   │   │   ├── node
│   │   │   │   ├── argv.ts
│   │   │   │   ├── argvHelper.ts
│   │   │   │   ├── environmentService.ts
│   │   │   │   ├── stdin.ts
│   │   │   │   ├── userDataPath.ts 主要是设定和获取用户数据存储目录
│   │   │   │   └── wait.ts
│   │   ├── extensionManagement
│   │   │   ├── common
│   │   │   │   ├── abstractExtensionManagementService.ts
│   │   │   │   ├── allowedExtensionsService.ts
│   │   │   │   ├── configRemotes.ts
│   │   │   │   ├── extensionEnablementService.ts
│   │   │   │   ├── extensionGalleryService.ts
│   │   │   │   ├── extensionManagement.ts
│   │   │   │   ├── extensionManagementCLI.ts
│   │   │   │   ├── extensionManagementIpc.ts
│   │   │   │   ├── extensionManagementUtil.ts
│   │   │   │   ├── extensionNls.ts
│   │   │   │   ├── extensionStorage.ts
│   │   │   │   ├── extensionTipsService.ts
│   │   │   │   ├── extensionsProfileScannerService.ts
│   │   │   │   ├── extensionsScannerService.ts
│   │   │   │   ├── implicitActivationEvents.ts
│   │   │   │   └── unsupportedExtensionsMigration.ts
│   │   │   ├── electron-sandbox
│   │   │   │   └── extensionsProfileScannerService.ts
│   │   │   ├── node
│   │   │   │   ├── extensionDownloader.ts
│   │   │   │   ├── extensionLifecycle.ts
│   │   │   │   ├── extensionManagementService.ts
│   │   │   │   ├── extensionManagementUtil.ts
│   │   │   │   ├── extensionSignatureVerificationService.ts
│   │   │   │   ├── extensionTipsService.ts
│   │   │   │   ├── extensionsManifestCache.ts
│   │   │   │   ├── extensionsProfileScannerService.ts
│   │   │   │   ├── extensionsScannerService.ts
│   │   │   │   └── extensionsWatcher.ts
│   │   ├── extensionRecommendations
│   │   │   └── common
│   │   │       ├── extensionRecommendations.ts
│   │   │       └── extensionRecommendationsIpc.ts
│   │   ├── extensionResourceLoader
│   │   │   ├── browser
│   │   │   │   └── extensionResourceLoaderService.ts
│   │   │   └── common
│   │   │       ├── extensionResourceLoader.ts
│   │   │       └── extensionResourceLoaderService.ts
│   │   ├── extensions
│   │   │   ├── common
│   │   │   │   ├── extensionHostStarter.ts
│   │   │   │   ├── extensionValidator.ts
│   │   │   │   ├── extensions.ts
│   │   │   │   └── extensionsApiProposals.ts
│   │   │   ├── electron-main
│   │   │   │   └── extensionHostStarter.ts
│   │   ├── externalServices
│   │   │   └── common
│   │   │       ├── marketplace.ts
│   │   │       └── serviceMachineId.ts
│   │   ├── externalTerminal
│   │   │   ├── common
│   │   │   │   └── externalTerminal.ts
│   │   │   ├── electron-main
│   │   │   │   └── externalTerminal.ts
│   │   │   ├── electron-sandbox
│   │   │   │   └── externalTerminalService.ts
│   │   │   ├── node
│   │   │   │   └── externalTerminalService.ts
│   │   ├── files
│   │   │   ├── browser
│   │   │   │   ├── htmlFileSystemProvider.ts
│   │   │   │   ├── indexedDBFileSystemProvider.ts
│   │   │   │   └── webFileSystemAccess.ts
│   │   │   ├── common
│   │   │   │   ├── diskFileSystemProvider.ts
│   │   │   │   ├── diskFileSystemProviderClient.ts
│   │   │   │   ├── fileService.ts
│   │   │   │   ├── files.ts
│   │   │   │   ├── inMemoryFilesystemProvider.ts
│   │   │   │   ├── io.ts
│   │   │   │   └── watcher.ts
│   │   │   ├── electron-main
│   │   │   │   └── diskFileSystemProviderServer.ts
│   │   │   ├── node
│   │   │   │   ├── diskFileSystemProvider.ts
│   │   │   │   ├── diskFileSystemProviderServer.ts
│   │   │   │   └── watcher
│   │   │   │       ├── baseWatcher.ts
│   │   │   │       ├── nodejs
│   │   │   │       │   ├── nodejsClient.ts
│   │   │   │       │   ├── nodejsWatcher.ts
│   │   │   │       │   └── nodejsWatcherLib.ts
│   │   │   │       ├── parcel
│   │   │   │       │   └── parcelWatcher.ts
│   │   │   │       ├── watcher.ts
│   │   │   │       ├── watcherClient.ts
│   │   │   │       ├── watcherMain.ts
│   │   │   │       └── watcherStats.ts
│   │   ├── history
│   │   │   └── browser
│   │   │       ├── contextScopedHistoryWidget.ts
│   │   │       └── historyWidgetKeybindingHint.ts
│   │   ├── hover
│   │   │   ├── browser
│   │   │   │   └── hover.ts
│   │   ├── instantiation IOC实现
│   │   │   ├── common
│   │   │   │   ├── descriptors.ts
│   │   │   │   ├── extensions.ts
│   │   │   │   ├── graph.ts IOC依赖图表 方便查找最总依赖时序
│   │   │   │   ├── instantiation.ts 初步构建一个实例化样板 基本只有骨架 真正应用在service的时候丰富细节
│   │   │   │   ├── instantiationService.ts IOC的容器service，本身是一个service 用于服务其他service
│   │   │   │   └── serviceCollection.ts 用一个Map维护存储service集合
│   │   ├── ipc
│   │   │   ├── common
│   │   │   │   ├── mainProcessService.ts
│   │   │   │   └── services.ts
│   │   │   └── electron-sandbox
│   │   │       ├── mainProcessService.ts
│   │   │       └── services.ts
│   │   ├── jsonschemas
│   │   │   └── common
│   │   │       └── jsonContributionRegistry.ts
│   │   ├── keybinding
│   │   │   ├── common
│   │   │   │   ├── abstractKeybindingService.ts
│   │   │   │   ├── baseResolvedKeybinding.ts
│   │   │   │   ├── keybinding.ts
│   │   │   │   ├── keybindingResolver.ts
│   │   │   │   ├── keybindingsRegistry.ts
│   │   │   │   ├── resolvedKeybindingItem.ts
│   │   │   │   └── usLayoutResolvedKeybinding.ts
│   │   ├── keyboardLayout
│   │   │   ├── common
│   │   │   │   ├── keyboardConfig.ts
│   │   │   │   ├── keyboardLayout.ts
│   │   │   │   ├── keyboardLayoutService.ts
│   │   │   │   └── keyboardMapper.ts
│   │   │   └── electron-main
│   │   │       └── keyboardLayoutMainService.ts
│   │   ├── label
│   │   │   └── common
│   │   │       └── label.ts
│   │   ├── languagePacks
│   │   │   ├── browser
│   │   │   │   └── languagePacks.ts
│   │   │   ├── common
│   │   │   │   ├── languagePacks.ts
│   │   │   │   └── localizedStrings.ts
│   │   │   └── node
│   │   │       └── languagePacks.ts
│   │   ├── launch
│   │   │   └── electron-main
│   │   │       └── launchMainService.ts
│   │   ├── layout
│   │   │   └── browser
│   │   │       ├── layoutService.ts
│   │   │       └── zIndexRegistry.ts
│   │   ├── lifecycle
│   │   │   ├── common
│   │   │   │   └── lifecycle.ts
│   │   │   ├── electron-main
│   │   │   │   └── lifecycleMainService.ts
│   │   │   └── node
│   │   │       └── sharedProcessLifecycleService.ts
│   │   ├── list
│   │   │   └── browser
│   │   │       └── listService.ts
│   │   ├── log
│   │   │   ├── browser
│   │   │   │   └── log.ts
│   │   │   ├── common
│   │   │   │   ├── bufferLog.ts
│   │   │   │   ├── fileLog.ts
│   │   │   │   ├── log.ts
│   │   │   │   ├── logIpc.ts
│   │   │   │   └── logService.ts
│   │   │   ├── electron-main
│   │   │   │   ├── logIpc.ts
│   │   │   │   └── loggerService.ts
│   │   │   └── node
│   │   │       ├── loggerService.ts
│   │   │       └── spdlogLog.ts
│   │   ├── markers
│   │   │   ├── common
│   │   │   │   ├── markerService.ts
│   │   │   │   └── markers.ts
│   │   ├── mcp
│   │   │   ├── common
│   │   │   │   ├── mcpManagementCli.ts
│   │   │   │   ├── mcpPlatformTypes.ts
│   │   │   │   └── nativeMcpDiscoveryHelper.ts
│   │   │   └── node
│   │   │       ├── nativeMcpDiscoveryHelperChannel.ts
│   │   │       └── nativeMcpDiscoveryHelperService.ts
│   │   ├── menubar
│   │   │   ├── common
│   │   │   │   └── menubar.ts
│   │   │   ├── electron-main
│   │   │   │   ├── menubar.ts
│   │   │   │   └── menubarMainService.ts
│   │   │   └── electron-sandbox
│   │   │       └── menubar.ts
│   │   ├── native
│   │   │   ├── common
│   │   │   │   ├── native.ts
│   │   │   │   └── nativeHostService.ts
│   │   │   └── electron-main
│   │   │       ├── auth.ts
│   │   │       └── nativeHostMainService.ts
│   │   ├── notification
│   │   │   ├── common
│   │   │   │   └── notification.ts
│   │   ├── observable
│   │   │   └── common
│   │   │       ├── observableMemento.ts
│   │   │       ├── platformObservableUtils.ts
│   │   │       ├── wrapInHotClass.ts
│   │   │       └── wrapInReloadableClass.ts
│   │   ├── opener
│   │   │   ├── browser
│   │   │   │   └── link.ts
│   │   │   ├── common
│   │   │   │   └── opener.ts
│   │   ├── policy
│   │   │   ├── common
│   │   │   │   ├── filePolicyService.ts
│   │   │   │   ├── policy.ts
│   │   │   │   └── policyIpc.ts
│   │   │   └── node
│   │   │       └── nativePolicyService.ts
│   │   ├── process
│   │   │   ├── common
│   │   │   │   └── process.ts
│   │   │   └── electron-main
│   │   │       └── processMainService.ts
│   │   ├── product
│   │   │   └── common
│   │   │       ├── product.ts 获取product.json的配置
│   │   │       └── productService.ts
│   │   ├── profiling
│   │   │   ├── common
│   │   │   │   ├── profiling.ts
│   │   │   │   ├── profilingModel.ts
│   │   │   │   └── profilingTelemetrySpec.ts
│   │   │   ├── electron-main
│   │   │   │   └── windowProfiling.ts
│   │   │   ├── electron-sandbox
│   │   │   │   ├── profileAnalysisWorker.ts
│   │   │   │   ├── profileAnalysisWorkerMain.ts
│   │   │   │   ├── profileAnalysisWorkerService.ts
│   │   │   │   └── profilingService.ts
│   │   │   └── node
│   │   │       └── profilingService.ts
│   │   ├── progress
│   │   │   ├── common
│   │   │   │   └── progress.ts
│   │   ├── prompts
│   │   │   ├── common
│   │   │   │   ├── config.ts
│   │   │   │   └── constants.ts
│   │   ├── protocol
│   │   │   └── electron-main
│   │   │       ├── protocol.ts
│   │   │       └── protocolMainService.ts
│   │   ├── quickinput
│   │   │   ├── browser
│   │   │   │   ├── commandsQuickAccess.ts
│   │   │   │   ├── helpQuickAccess.ts
│   │   │   │   ├── pickerQuickAccess.ts
│   │   │   │   ├── quickAccess.ts
│   │   │   │   ├── quickInput.ts
│   │   │   │   ├── quickInputActions.ts
│   │   │   │   ├── quickInputBox.ts
│   │   │   │   ├── quickInputController.ts
│   │   │   │   ├── quickInputService.ts
│   │   │   │   ├── quickInputTree.ts
│   │   │   │   ├── quickInputUtils.ts
│   │   │   │   └── quickPickPin.ts
│   │   │   ├── common
│   │   │   │   ├── quickAccess.ts
│   │   │   │   └── quickInput.ts
│   │   ├── registry
│   │   │   ├── common
│   │   │   │   └── platform.ts
│   │   ├── remote
│   │   │   ├── browser
│   │   │   │   ├── browserSocketFactory.ts
│   │   │   │   └── remoteAuthorityResolverService.ts
│   │   │   ├── common
│   │   │   │   ├── electronRemoteResources.ts
│   │   │   │   ├── managedSocket.ts
│   │   │   │   ├── remote.ts
│   │   │   │   ├── remoteAgentConnection.ts
│   │   │   │   ├── remoteAgentEnvironment.ts
│   │   │   │   ├── remoteAuthorityResolver.ts
│   │   │   │   ├── remoteExtensionsScanner.ts
│   │   │   │   ├── remoteHosts.ts
│   │   │   │   ├── remoteSocketFactoryService.ts
│   │   │   │   └── sharedProcessTunnelService.ts
│   │   │   ├── electron-sandbox
│   │   │   │   ├── electronRemoteResourceLoader.ts
│   │   │   │   ├── remoteAuthorityResolverService.ts
│   │   │   │   └── sharedProcessTunnelService.ts
│   │   │   ├── node
│   │   │   │   ├── nodeSocketFactory.ts
│   │   │   │   └── wsl.ts
│   │   ├── remoteTunnel
│   │   │   ├── common
│   │   │   │   └── remoteTunnel.ts
│   │   │   ├── electron-sandbox
│   │   │   │   └── remoteTunnelService.ts
│   │   │   └── node
│   │   │       └── remoteTunnelService.ts
│   │   ├── request
│   │   │   ├── common
│   │   │   │   ├── request.ts
│   │   │   │   └── requestIpc.ts
│   │   │   ├── electron-utility
│   │   │   │   └── requestService.ts
│   │   │   ├── node
│   │   │   │   ├── proxy.ts
│   │   │   │   └── requestService.ts
│   │   ├── secrets
│   │   │   ├── common
│   │   │   │   └── secrets.ts
│   │   ├── sharedProcess
│   │   │   ├── common
│   │   │   │   └── sharedProcess.ts
│   │   │   ├── electron-main
│   │   │   │   └── sharedProcess.ts
│   │   │   └── node
│   │   │       └── sharedProcess.ts
│   │   ├── shell
│   │   │   └── node
│   │   │       └── shellEnv.ts
│   │   ├── sign
│   │   │   ├── browser
│   │   │   │   └── signService.ts
│   │   │   ├── common
│   │   │   │   ├── abstractSignService.ts
│   │   │   │   └── sign.ts
│   │   │   └── node
│   │   │       └── signService.ts
│   │   ├── state
│   │   │   ├── node
│   │   │   │   ├── state.ts
│   │   │   │   └── stateService.ts
│   │   ├── storage
│   │   │   ├── common
│   │   │   │   ├── storage.ts
│   │   │   │   ├── storageIpc.ts
│   │   │   │   └── storageService.ts
│   │   │   ├── electron-main
│   │   │   │   ├── storageIpc.ts
│   │   │   │   ├── storageMain.ts
│   │   │   │   └── storageMainService.ts
│   │   ├── telemetry
│   │   │   ├── browser
│   │   │   │   ├── 1dsAppender.ts
│   │   │   │   └── errorTelemetry.ts
│   │   │   ├── common
│   │   │   │   ├── 1dsAppender.ts
│   │   │   │   ├── commonProperties.ts
│   │   │   │   ├── errorTelemetry.ts
│   │   │   │   ├── gdprTypings.ts
│   │   │   │   ├── remoteTelemetryChannel.ts
│   │   │   │   ├── serverTelemetryService.ts
│   │   │   │   ├── telemetry.ts
│   │   │   │   ├── telemetryIpc.ts
│   │   │   │   ├── telemetryLogAppender.ts
│   │   │   │   ├── telemetryService.ts
│   │   │   │   └── telemetryUtils.ts
│   │   │   ├── electron-main
│   │   │   │   └── telemetryUtils.ts
│   │   │   ├── electron-sandbox
│   │   │   │   └── customEndpointTelemetryService.ts
│   │   │   ├── node
│   │   │   │   ├── 1dsAppender.ts
│   │   │   │   ├── customEndpointTelemetryService.ts
│   │   │   │   ├── errorTelemetry.ts
│   │   │   │   ├── telemetry.ts
│   │   │   │   └── telemetryUtils.ts
│   │   ├── terminal
│   │   │   ├── common
│   │   │   │   ├── capabilities
│   │   │   │   │   ├── bufferMarkCapability.ts
│   │   │   │   │   ├── capabilities.ts
│   │   │   │   │   ├── commandDetection
│   │   │   │   │   │   ├── promptInputModel.ts
│   │   │   │   │   │   └── terminalCommand.ts
│   │   │   │   │   ├── commandDetectionCapability.ts
│   │   │   │   │   ├── cwdDetectionCapability.ts
│   │   │   │   │   ├── naiveCwdDetectionCapability.ts
│   │   │   │   │   ├── partialCommandDetectionCapability.ts
│   │   │   │   │   ├── shellEnvDetectionCapability.ts
│   │   │   │   │   └── terminalCapabilityStore.ts
│   │   │   │   ├── environmentVariable.ts
│   │   │   │   ├── environmentVariableCollection.ts
│   │   │   │   ├── environmentVariableShared.ts
│   │   │   │   ├── requestStore.ts
│   │   │   │   ├── terminal.ts
│   │   │   │   ├── terminalDataBuffering.ts
│   │   │   │   ├── terminalEnvironment.ts
│   │   │   │   ├── terminalLogService.ts
│   │   │   │   ├── terminalPlatformConfiguration.ts
│   │   │   │   ├── terminalProcess.ts
│   │   │   │   ├── terminalProfiles.ts
│   │   │   │   ├── terminalRecorder.ts
│   │   │   │   ├── terminalStrings.ts
│   │   │   │   └── xterm
│   │   │   │       └── shellIntegrationAddon.ts
│   │   │   ├── electron-main
│   │   │   │   └── electronPtyHostStarter.ts
│   │   │   ├── node
│   │   │   │   ├── childProcessMonitor.ts
│   │   │   │   ├── heartbeatService.ts
│   │   │   │   ├── nodePtyHostStarter.ts
│   │   │   │   ├── ptyHost.ts
│   │   │   │   ├── ptyHostMain.ts
│   │   │   │   ├── ptyHostService.ts
│   │   │   │   ├── ptyService.ts
│   │   │   │   ├── terminalContrib
│   │   │   │   │   └── autoReplies
│   │   │   │   │       ├── autoRepliesContribController.ts
│   │   │   │   │       └── terminalAutoResponder.ts
│   │   │   │   ├── terminalEnvironment.ts
│   │   │   │   ├── terminalProcess.ts
│   │   │   │   ├── terminalProfiles.ts
│   │   │   │   └── windowsShellHelper.ts
│   │   ├── theme
│   │   │   ├── browser
│   │   │   │   ├── defaultStyles.ts
│   │   │   │   └── iconsStyleSheet.ts
│   │   │   ├── common
│   │   │   │   ├── colorRegistry.ts
│   │   │   │   ├── colorUtils.ts
│   │   │   │   ├── colors
│   │   │   │   │   ├── baseColors.ts
│   │   │   │   │   ├── chartsColors.ts
│   │   │   │   │   ├── editorColors.ts
│   │   │   │   │   ├── inputColors.ts
│   │   │   │   │   ├── listColors.ts
│   │   │   │   │   ├── menuColors.ts
│   │   │   │   │   ├── minimapColors.ts
│   │   │   │   │   ├── miscColors.ts
│   │   │   │   │   ├── quickpickColors.ts
│   │   │   │   │   └── searchColors.ts
│   │   │   │   ├── iconRegistry.ts
│   │   │   │   ├── theme.ts
│   │   │   │   ├── themeService.ts
│   │   │   │   └── tokenClassificationRegistry.ts
│   │   │   ├── electron-main
│   │   │   │   └── themeMainService.ts
│   │   ├── tunnel
│   │   │   ├── common
│   │   │   │   └── tunnel.ts
│   │   │   ├── node
│   │   │   │   ├── sharedProcessTunnelService.ts
│   │   │   │   └── tunnelService.ts
│   │   ├── undoRedo
│   │   │   ├── common
│   │   │   │   ├── undoRedo.ts
│   │   │   │   └── undoRedoService.ts
│   │   ├── update
│   │   │   ├── common
│   │   │   │   ├── update.config.contribution.ts
│   │   │   │   ├── update.ts
│   │   │   │   └── updateIpc.ts
│   │   │   └── electron-main
│   │   │       ├── abstractUpdateService.ts
│   │   │       ├── updateService.darwin.ts
│   │   │       ├── updateService.linux.ts
│   │   │       ├── updateService.snap.ts
│   │   │       └── updateService.win32.ts
│   │   ├── uriIdentity
│   │   │   ├── common
│   │   │   │   ├── uriIdentity.ts
│   │   │   │   └── uriIdentityService.ts
│   │   ├── url
│   │   │   ├── common
│   │   │   │   ├── url.ts
│   │   │   │   ├── urlIpc.ts
│   │   │   │   └── urlService.ts
│   │   │   └── electron-main
│   │   │       ├── electronUrlListener.ts
│   │   │       └── url.ts
│   │   ├── userData
│   │   │   ├── common
│   │   │   │   └── fileUserDataProvider.ts
│   │   ├── userDataProfile
│   │   │   ├── browser
│   │   │   │   └── userDataProfile.ts
│   │   │   ├── common
│   │   │   │   ├── userDataProfile.ts
│   │   │   │   ├── userDataProfileIpc.ts
│   │   │   │   └── userDataProfileStorageService.ts
│   │   │   ├── electron-main
│   │   │   │   ├── userDataProfile.ts
│   │   │   │   ├── userDataProfileStorageIpc.ts
│   │   │   │   └── userDataProfilesHandler.ts
│   │   │   ├── electron-sandbox
│   │   │   │   └── userDataProfileStorageService.ts
│   │   │   ├── node
│   │   │   │   ├── userDataProfile.ts
│   │   │   │   └── userDataProfileStorageService.ts
│   │   ├── userDataSync
│   │   │   ├── common
│   │   │   │   ├── abstractSynchronizer.ts
│   │   │   │   ├── content.ts
│   │   │   │   ├── extensionsMerge.ts
│   │   │   │   ├── extensionsSync.ts
│   │   │   │   ├── globalStateMerge.ts
│   │   │   │   ├── globalStateSync.ts
│   │   │   │   ├── ignoredExtensions.ts
│   │   │   │   ├── keybindingsMerge.ts
│   │   │   │   ├── keybindingsSync.ts
│   │   │   │   ├── promptsSync
│   │   │   │   │   ├── promptsMerge.ts
│   │   │   │   │   └── promptsSync.ts
│   │   │   │   ├── settingsMerge.ts
│   │   │   │   ├── settingsSync.ts
│   │   │   │   ├── snippetsMerge.ts
│   │   │   │   ├── snippetsSync.ts
│   │   │   │   ├── tasksSync.ts
│   │   │   │   ├── userDataAutoSyncService.ts
│   │   │   │   ├── userDataProfilesManifestMerge.ts
│   │   │   │   ├── userDataProfilesManifestSync.ts
│   │   │   │   ├── userDataSync.ts
│   │   │   │   ├── userDataSyncAccount.ts
│   │   │   │   ├── userDataSyncEnablementService.ts
│   │   │   │   ├── userDataSyncIpc.ts
│   │   │   │   ├── userDataSyncLocalStoreService.ts
│   │   │   │   ├── userDataSyncLog.ts
│   │   │   │   ├── userDataSyncMachines.ts
│   │   │   │   ├── userDataSyncResourceProvider.ts
│   │   │   │   ├── userDataSyncService.ts
│   │   │   │   ├── userDataSyncServiceIpc.ts
│   │   │   │   └── userDataSyncStoreService.ts
│   │   │   ├── node
│   │   │   │   └── userDataAutoSyncService.ts
│   │   ├── utilityProcess
│   │   │   ├── common
│   │   │   │   └── utilityProcessWorkerService.ts
│   │   │   └── electron-main
│   │   │       ├── utilityProcess.ts
│   │   │       └── utilityProcessWorkerMainService.ts
│   │   ├── webview
│   │   │   ├── common
│   │   │   │   ├── mimeTypes.ts
│   │   │   │   ├── webviewManagerService.ts
│   │   │   │   └── webviewPortMapping.ts
│   │   │   └── electron-main
│   │   │       ├── webviewMainService.ts
│   │   │       └── webviewProtocolProvider.ts
│   │   ├── window
│   │   │   ├── common
│   │   │   │   └── window.ts
│   │   │   ├── electron-main
│   │   │   │   └── window.ts
│   │   │   └── electron-sandbox
│   │   │       └── window.ts
│   │   ├── windows
│   │   │   ├── electron-main
│   │   │   │   ├── windowImpl.ts
│   │   │   │   ├── windows.ts
│   │   │   │   ├── windowsFinder.ts
│   │   │   │   ├── windowsMainService.ts
│   │   │   │   └── windowsStateHandler.ts
│   │   │   ├── node
│   │   │   │   └── windowTracker.ts
│   │   ├── workspace
│   │   │   ├── common
│   │   │   │   ├── canonicalUri.ts
│   │   │   │   ├── editSessions.ts
│   │   │   │   ├── virtualWorkspace.ts
│   │   │   │   ├── workspace.ts
│   │   │   │   └── workspaceTrust.ts
│   │   └── workspaces
│   │       ├── common
│   │       │   └── workspaces.ts
│   │       ├── electron-main
│   │       │   ├── workspacesHistoryMainService.ts
│   │       │   ├── workspacesMainService.ts
│   │       │   └── workspacesManagementMainService.ts
│   │       ├── node
│   │       │   └── workspaces.ts
│   ├── server
│   │   ├── node
│   │   │   ├── extensionHostConnection.ts
│   │   │   ├── extensionHostStatusService.ts
│   │   │   ├── extensionsScannerService.ts
│   │   │   ├── remoteAgentEnvironmentImpl.ts
│   │   │   ├── remoteExtensionHostAgentCli.ts
│   │   │   ├── remoteExtensionHostAgentServer.ts
│   │   │   ├── remoteExtensionManagement.ts
│   │   │   ├── remoteExtensionsScanner.ts
│   │   │   ├── remoteFileSystemProviderServer.ts
│   │   │   ├── remoteLanguagePacks.ts
│   │   │   ├── remoteTerminalChannel.ts
│   │   │   ├── server.cli.ts
│   │   │   ├── server.main.ts
│   │   │   ├── serverConnectionToken.ts
│   │   │   ├── serverEnvironmentService.ts
│   │   │   ├── serverServices.ts
│   │   │   └── webClientServer.ts
│   └── workbench
│       ├── api
│       │   ├── browser
│       │   │   ├── extensionHost.contribution.ts
│       │   │   ├── mainThreadAiEmbeddingVector.ts
│       │   │   ├── mainThreadAiRelatedInformation.ts
│       │   │   ├── mainThreadAuthentication.ts
│       │   │   ├── mainThreadBulkEdits.ts
│       │   │   ├── mainThreadCLICommands.ts
│       │   │   ├── mainThreadChatAgents2.ts
│       │   │   ├── mainThreadChatCodeMapper.ts
│       │   │   ├── mainThreadClipboard.ts
│       │   │   ├── mainThreadCodeInsets.ts
│       │   │   ├── mainThreadCommands.ts
│       │   │   ├── mainThreadComments.ts
│       │   │   ├── mainThreadConfiguration.ts
│       │   │   ├── mainThreadConsole.ts
│       │   │   ├── mainThreadCustomEditors.ts
│       │   │   ├── mainThreadDebugService.ts
│       │   │   ├── mainThreadDecorations.ts
│       │   │   ├── mainThreadDiagnostics.ts
│       │   │   ├── mainThreadDialogs.ts
│       │   │   ├── mainThreadDocumentContentProviders.ts
│       │   │   ├── mainThreadDocuments.ts
│       │   │   ├── mainThreadDocumentsAndEditors.ts
│       │   │   ├── mainThreadDownloadService.ts
│       │   │   ├── mainThreadEditSessionIdentityParticipant.ts
│       │   │   ├── mainThreadEditor.ts
│       │   │   ├── mainThreadEditorTabs.ts
│       │   │   ├── mainThreadEditors.ts
│       │   │   ├── mainThreadEmbeddings.ts
│       │   │   ├── mainThreadErrors.ts
│       │   │   ├── mainThreadExtensionService.ts
│       │   │   ├── mainThreadFileSystem.ts
│       │   │   ├── mainThreadFileSystemEventService.ts
│       │   │   ├── mainThreadInteractive.ts
│       │   │   ├── mainThreadLabelService.ts
│       │   │   ├── mainThreadLanguageFeatures.ts
│       │   │   ├── mainThreadLanguageModelTools.ts
│       │   │   ├── mainThreadLanguageModels.ts
│       │   │   ├── mainThreadLanguages.ts
│       │   │   ├── mainThreadLocalization.ts
│       │   │   ├── mainThreadLogService.ts
│       │   │   ├── mainThreadManagedSockets.ts
│       │   │   ├── mainThreadMcp.ts
│       │   │   ├── mainThreadMessageService.ts
│       │   │   ├── mainThreadNotebook.ts
│       │   │   ├── mainThreadNotebookDocuments.ts
│       │   │   ├── mainThreadNotebookDocumentsAndEditors.ts
│       │   │   ├── mainThreadNotebookDto.ts
│       │   │   ├── mainThreadNotebookEditors.ts
│       │   │   ├── mainThreadNotebookKernels.ts
│       │   │   ├── mainThreadNotebookRenderers.ts
│       │   │   ├── mainThreadNotebookSaveParticipant.ts
│       │   │   ├── mainThreadOutputService.ts
│       │   │   ├── mainThreadProfileContentHandlers.ts
│       │   │   ├── mainThreadProgress.ts
│       │   │   ├── mainThreadQuickDiff.ts
│       │   │   ├── mainThreadQuickOpen.ts
│       │   │   ├── mainThreadRemoteConnectionData.ts
│       │   │   ├── mainThreadSCM.ts
│       │   │   ├── mainThreadSaveParticipant.ts
│       │   │   ├── mainThreadSearch.ts
│       │   │   ├── mainThreadSecretState.ts
│       │   │   ├── mainThreadShare.ts
│       │   │   ├── mainThreadSpeech.ts
│       │   │   ├── mainThreadStatusBar.ts
│       │   │   ├── mainThreadStorage.ts
│       │   │   ├── mainThreadTask.ts
│       │   │   ├── mainThreadTelemetry.ts
│       │   │   ├── mainThreadTerminalService.ts
│       │   │   ├── mainThreadTerminalShellIntegration.ts
│       │   │   ├── mainThreadTesting.ts
│       │   │   ├── mainThreadTheming.ts
│       │   │   ├── mainThreadTimeline.ts
│       │   │   ├── mainThreadTreeViews.ts
│       │   │   ├── mainThreadTunnelService.ts
│       │   │   ├── mainThreadUriOpeners.ts
│       │   │   ├── mainThreadUrls.ts
│       │   │   ├── mainThreadWebviewManager.ts
│       │   │   ├── mainThreadWebviewPanels.ts
│       │   │   ├── mainThreadWebviewViews.ts
│       │   │   ├── mainThreadWebviews.ts
│       │   │   ├── mainThreadWindow.ts
│       │   │   ├── mainThreadWorkspace.ts
│       │   │   ├── statusBarExtensionPoint.ts
│       │   │   └── viewsExtensionPoint.ts
│       │   ├── common
│       │   │   ├── cache.ts
│       │   │   ├── configurationExtensionPoint.ts
│       │   │   ├── extHost.api.impl.ts
│       │   │   ├── extHost.common.services.ts
│       │   │   ├── extHost.protocol.ts
│       │   │   ├── extHostAiRelatedInformation.ts
│       │   │   ├── extHostApiCommands.ts
│       │   │   ├── extHostApiDeprecationService.ts
│       │   │   ├── extHostAuthentication.ts
│       │   │   ├── extHostBulkEdits.ts
│       │   │   ├── extHostChatAgents2.ts
│       │   │   ├── extHostClipboard.ts
│       │   │   ├── extHostCodeInsets.ts
│       │   │   ├── extHostCodeMapper.ts
│       │   │   ├── extHostCommands.ts
│       │   │   ├── extHostComments.ts
│       │   │   ├── extHostConfiguration.ts
│       │   │   ├── extHostConsoleForwarder.ts
│       │   │   ├── extHostCustomEditors.ts
│       │   │   ├── extHostDebugService.ts
│       │   │   ├── extHostDecorations.ts
│       │   │   ├── extHostDiagnostics.ts
│       │   │   ├── extHostDialogs.ts
│       │   │   ├── extHostDocumentContentProviders.ts
│       │   │   ├── extHostDocumentData.ts
│       │   │   ├── extHostDocumentSaveParticipant.ts
│       │   │   ├── extHostDocuments.ts
│       │   │   ├── extHostDocumentsAndEditors.ts
│       │   │   ├── extHostEditorTabs.ts
│       │   │   ├── extHostEmbedding.ts
│       │   │   ├── extHostEmbeddingVector.ts
│       │   │   ├── extHostExtensionActivator.ts
│       │   │   ├── extHostExtensionService.ts
│       │   │   ├── extHostFileSystem.ts
│       │   │   ├── extHostFileSystemConsumer.ts
│       │   │   ├── extHostFileSystemEventService.ts
│       │   │   ├── extHostFileSystemInfo.ts
│       │   │   ├── extHostInitDataService.ts
│       │   │   ├── extHostInteractive.ts
│       │   │   ├── extHostLabelService.ts
│       │   │   ├── extHostLanguageFeatures.ts
│       │   │   ├── extHostLanguageModelTools.ts
│       │   │   ├── extHostLanguageModels.ts
│       │   │   ├── extHostLanguages.ts
│       │   │   ├── extHostLocalizationService.ts
│       │   │   ├── extHostLogService.ts
│       │   │   ├── extHostLoggerService.ts
│       │   │   ├── extHostManagedSockets.ts
│       │   │   ├── extHostMcp.ts
│       │   │   ├── extHostMemento.ts
│       │   │   ├── extHostMessageService.ts
│       │   │   ├── extHostNotebook.ts
│       │   │   ├── extHostNotebookDocument.ts
│       │   │   ├── extHostNotebookDocumentSaveParticipant.ts
│       │   │   ├── extHostNotebookDocuments.ts
│       │   │   ├── extHostNotebookEditor.ts
│       │   │   ├── extHostNotebookEditors.ts
│       │   │   ├── extHostNotebookKernels.ts
│       │   │   ├── extHostNotebookRenderers.ts
│       │   │   ├── extHostOutput.ts
│       │   │   ├── extHostProfileContentHandler.ts
│       │   │   ├── extHostProgress.ts
│       │   │   ├── extHostQuickDiff.ts
│       │   │   ├── extHostQuickOpen.ts
│       │   │   ├── extHostRequireInterceptor.ts
│       │   │   ├── extHostRpcService.ts
│       │   │   ├── extHostSCM.ts
│       │   │   ├── extHostSearch.ts
│       │   │   ├── extHostSecretState.ts
│       │   │   ├── extHostSecrets.ts
│       │   │   ├── extHostShare.ts
│       │   │   ├── extHostSpeech.ts
│       │   │   ├── extHostStatusBar.ts
│       │   │   ├── extHostStorage.ts
│       │   │   ├── extHostStoragePaths.ts
│       │   │   ├── extHostTask.ts
│       │   │   ├── extHostTelemetry.ts
│       │   │   ├── extHostTerminalService.ts
│       │   │   ├── extHostTerminalShellIntegration.ts
│       │   │   ├── extHostTestItem.ts
│       │   │   ├── extHostTesting.ts
│       │   │   ├── extHostTestingPrivateApi.ts
│       │   │   ├── extHostTextEditor.ts
│       │   │   ├── extHostTextEditors.ts
│       │   │   ├── extHostTheming.ts
│       │   │   ├── extHostTimeline.ts
│       │   │   ├── extHostTreeViews.ts
│       │   │   ├── extHostTunnelService.ts
│       │   │   ├── extHostTypeConverters.ts
│       │   │   ├── extHostTypes.ts
│       │   │   ├── extHostUriOpener.ts
│       │   │   ├── extHostUriTransformerService.ts
│       │   │   ├── extHostUrls.ts
│       │   │   ├── extHostVariableResolverService.ts
│       │   │   ├── extHostWebview.ts
│       │   │   ├── extHostWebviewMessaging.ts
│       │   │   ├── extHostWebviewPanels.ts
│       │   │   ├── extHostWebviewView.ts
│       │   │   ├── extHostWindow.ts
│       │   │   ├── extHostWorkspace.ts
│       │   │   ├── extensionHostMain.ts
│       │   │   ├── jsonValidationExtensionPoint.ts
│       │   │   └── shared
│       │   │       ├── dataTransferCache.ts
│       │   │       └── tasks.ts
│       │   ├── node
│       │   │   ├── extHost.node.services.ts
│       │   │   ├── extHostCLIServer.ts
│       │   │   ├── extHostConsoleForwarder.ts
│       │   │   ├── extHostDebugService.ts
│       │   │   ├── extHostDiskFileSystemProvider.ts
│       │   │   ├── extHostDownloadService.ts
│       │   │   ├── extHostExtensionService.ts
│       │   │   ├── extHostLoggerService.ts
│       │   │   ├── extHostMpcNode.ts
│       │   │   ├── extHostSearch.ts
│       │   │   ├── extHostStoragePaths.ts
│       │   │   ├── extHostTask.ts
│       │   │   ├── extHostTerminalService.ts
│       │   │   ├── extHostTunnelService.ts
│       │   │   ├── extHostVariableResolverService.ts
│       │   │   ├── extensionHostProcess.ts
│       │   │   ├── proxyResolver.ts
│       │   │   └── uriTransformer.ts
│       │   └── worker
│       │       ├── extHost.worker.services.ts
│       │       ├── extHostConsoleForwarder.ts
│       │       ├── extHostExtensionService.ts
│       │       ├── extensionHostWorker.ts
│       │       └── extensionHostWorkerMain.ts
│       ├── browser
│       │   ├── actions
│       │   │   ├── developerActions.ts
│       │   │   ├── helpActions.ts
│       │   │   ├── layoutActions.ts
│       │   │   ├── listCommands.ts
│       │   │   ├── navigationActions.ts
│       │   │   ├── quickAccessActions.ts
│       │   │   ├── textInputActions.ts
│       │   │   ├── widgetNavigationCommands.ts
│       │   │   ├── windowActions.ts
│       │   │   ├── workspaceActions.ts
│       │   │   └── workspaceCommands.ts
│       │   ├── actions.ts
│       │   ├── codeeditor.ts
│       │   ├── composite.ts
│       │   ├── contextkeys.ts
│       │   ├── dnd.ts
│       │   ├── editor.ts
│       │   ├── labels.ts
│       │   ├── layout.ts
│       │   ├── panecomposite.ts
│       │   ├── part.ts
│       │   ├── parts
│       │   │   ├── activitybar
│       │   │   │   ├── activitybarPart.ts
│       │   │   ├── auxiliarybar
│       │   │   │   ├── auxiliaryBarActions.ts
│       │   │   │   ├── auxiliaryBarPart.ts
│       │   │   ├── banner
│       │   │   │   ├── bannerPart.ts
│       │   │   ├── compositeBar.ts
│       │   │   ├── compositeBarActions.ts
│       │   │   ├── compositePart.ts
│       │   │   ├── dialogs
│       │   │   │   ├── dialog.web.contribution.ts
│       │   │   │   └── dialogHandler.ts
│       │   │   ├── editor
│       │   │   │   ├── auxiliaryEditorPart.ts
│       │   │   │   ├── binaryDiffEditor.ts
│       │   │   │   ├── binaryEditor.ts
│       │   │   │   ├── breadcrumbs.ts
│       │   │   │   ├── breadcrumbsControl.ts
│       │   │   │   ├── breadcrumbsModel.ts
│       │   │   │   ├── breadcrumbsPicker.ts
│       │   │   │   ├── diffEditorCommands.ts
│       │   │   │   ├── editor.contribution.ts
│       │   │   │   ├── editor.ts
│       │   │   │   ├── editorActions.ts
│       │   │   │   ├── editorAutoSave.ts
│       │   │   │   ├── editorCommands.ts
│       │   │   │   ├── editorCommandsContext.ts
│       │   │   │   ├── editorConfiguration.ts
│       │   │   │   ├── editorDropTarget.ts
│       │   │   │   ├── editorGroupView.ts
│       │   │   │   ├── editorGroupWatermark.ts
│       │   │   │   ├── editorPane.ts
│       │   │   │   ├── editorPanes.ts
│       │   │   │   ├── editorPart.ts
│       │   │   │   ├── editorParts.ts
│       │   │   │   ├── editorPlaceholder.ts
│       │   │   │   ├── editorQuickAccess.ts
│       │   │   │   ├── editorStatus.ts
│       │   │   │   ├── editorTabsControl.ts
│       │   │   │   ├── editorTitleControl.ts
│       │   │   │   ├── editorWithViewState.ts
│       │   │   │   ├── editorsObserver.ts
│       │   │   │   ├── media
│       │   │   │   │   ├── back-tb
│       │   │   │   ├── multiEditorTabsControl.ts
│       │   │   │   ├── multiRowEditorTabsControl.ts
│       │   │   │   ├── noEditorTabsControl.ts
│       │   │   │   ├── sideBySideEditor.ts
│       │   │   │   ├── singleEditorTabsControl.ts
│       │   │   │   ├── textCodeEditor.ts
│       │   │   │   ├── textDiffEditor.ts
│       │   │   │   ├── textEditor.ts
│       │   │   │   └── textResourceEditor.ts
│       │   │   ├── globalCompositeBar.ts
│       │   │   ├── notifications
│       │   │   │   ├── notificationAccessibleView.ts
│       │   │   │   ├── notificationsActions.ts
│       │   │   │   ├── notificationsAlerts.ts
│       │   │   │   ├── notificationsCenter.ts
│       │   │   │   ├── notificationsCommands.ts
│       │   │   │   ├── notificationsList.ts
│       │   │   │   ├── notificationsStatus.ts
│       │   │   │   ├── notificationsToasts.ts
│       │   │   │   └── notificationsViewer.ts
│       │   │   ├── paneCompositeBar.ts
│       │   │   ├── paneCompositePart.ts
│       │   │   ├── paneCompositePartService.ts
│       │   │   ├── panel
│       │   │   │   ├── panelActions.ts
│       │   │   │   └── panelPart.ts
│       │   │   ├── sidebar
│       │   │   │   ├── sidebarActions.ts
│       │   │   │   └── sidebarPart.ts
│       │   │   ├── statusbar
│       │   │   │   ├── statusbarActions.ts
│       │   │   │   ├── statusbarItem.ts
│       │   │   │   ├── statusbarModel.ts
│       │   │   │   └── statusbarPart.ts
│       │   │   ├── titlebar
│       │   │   │   ├── commandCenterControl.ts
│       │   │   │   ├── menubarControl.ts
│       │   │   │   ├── titlebarActions.ts
│       │   │   │   ├── titlebarPart.ts
│       │   │   │   └── windowTitle.ts
│       │   │   └── views
│       │   │       ├── checkbox.ts
│       │   │       ├── treeView.ts
│       │   │       ├── viewFilter.ts
│       │   │       ├── viewPane.ts
│       │   │       ├── viewPaneContainer.ts
│       │   │       └── viewsViewlet.ts
│       │   ├── quickaccess.ts
│       │   ├── style.ts
│       │   ├── web.api.ts
│       │   ├── web.factory.ts
│       │   ├── web.main.ts
│       │   ├── window.ts
│       │   ├── workbench.contribution.ts
│       │   └── workbench.ts
│       ├── common
│       │   ├── activity.ts
│       │   ├── comments.ts
│       │   ├── component.ts
│       │   ├── composite.ts
│       │   ├── configuration.ts
│       │   ├── contextkeys.ts
│       │   ├── contributions.ts
│       │   ├── dialogs.ts
│       │   ├── editor
│       │   │   ├── binaryEditorModel.ts
│       │   │   ├── diffEditorInput.ts
│       │   │   ├── diffEditorModel.ts
│       │   │   ├── editorGroupModel.ts
│       │   │   ├── editorInput.ts
│       │   │   ├── editorModel.ts
│       │   │   ├── editorOptions.ts
│       │   │   ├── filteredEditorGroupModel.ts
│       │   │   ├── resourceEditorInput.ts
│       │   │   ├── sideBySideEditorInput.ts
│       │   │   ├── textDiffEditorModel.ts
│       │   │   ├── textEditorModel.ts
│       │   │   ├── textResourceEditorInput.ts
│       │   │   └── textResourceEditorModel.ts
│       │   ├── editor.ts
│       │   ├── memento.ts
│       │   ├── notifications.ts
│       │   ├── panecomposite.ts
│       │   ├── resources.ts
│       │   ├── theme.ts
│       │   └── views.ts
│       ├── contrib
│       │   ├── accessibility
│       │   │   ├── browser
│       │   │   │   ├── accessibility.contribution.ts
│       │   │   │   ├── accessibilityConfiguration.ts
│       │   │   │   ├── accessibilityStatus.ts
│       │   │   │   ├── accessibleView.ts
│       │   │   │   ├── accessibleViewActions.ts
│       │   │   │   ├── accessibleViewContributions.ts
│       │   │   │   ├── accessibleViewKeybindingResolver.ts
│       │   │   │   ├── editorAccessibilityHelp.ts
│       │   │   │   ├── extensionAccesibilityHelp.contribution.ts
│       │   │   │   └── unfocusedViewDimmingContribution.ts
│       │   │   └── common
│       │   │       └── accessibilityCommands.ts
│       │   ├── accessibilitySignals
│       │   │   └── browser
│       │   │       ├── accessibilitySignal.contribution.ts
│       │   │       ├── accessibilitySignalDebuggerContribution.ts
│       │   │       ├── commands.ts
│       │   │       ├── editorTextPropertySignalsContribution.ts
│       │   │       ├── openDiffEditorAnnouncement.ts
│       │   │       └── saveAccessibilitySignal.ts
│       │   ├── authentication
│       │   │   └── browser
│       │   │       ├── actions
│       │   │       │   ├── manageAccountPreferencesForExtensionAction.ts
│       │   │       │   ├── manageTrustedExtensionsForAccountAction.ts
│       │   │       │   └── signOutOfAccountAction.ts
│       │   │       └── authentication.contribution.ts
│       │   ├── bracketPairColorizer2Telemetry
│       │   │   └── browser
│       │   │       └── bracketPairColorizer2Telemetry.contribution.ts
│       │   ├── bulkEdit
│       │   │   ├── browser
│       │   │   │   ├── bulkCellEdits.ts
│       │   │   │   ├── bulkEditService.ts
│       │   │   │   ├── bulkFileEdits.ts
│       │   │   │   ├── bulkTextEdits.ts
│       │   │   │   ├── conflicts.ts
│       │   │   │   ├── opaqueEdits.ts
│       │   │   │   └── preview
│       │   │   │       ├── bulkEdit.contribution.ts
│       │   │   │       ├── bulkEditPane.ts
│       │   │   │       ├── bulkEditPreview.ts
│       │   │   │       └── bulkEditTree.ts
│       │   ├── callHierarchy
│       │   │   ├── browser
│       │   │   │   ├── callHierarchy.contribution.ts
│       │   │   │   ├── callHierarchyPeek.ts
│       │   │   │   ├── callHierarchyTree.ts
│       │   │   └── common
│       │   │       └── callHierarchy.ts
│       │   ├── chat
│       │   │   ├── browser
│       │   │   │   ├── actions
│       │   │   │   │   ├── chatAccessibilityHelp.ts
│       │   │   │   │   ├── chatActions.ts
│       │   │   │   │   ├── chatAttachPromptAction
│       │   │   │   │   │   ├── chatAttachPromptAction.ts
│       │   │   │   │   │   └── dialogs
│       │   │   │   │   │       └── askToSelectPrompt.ts
│       │   │   │   │   ├── chatClear.ts
│       │   │   │   │   ├── chatClearActions.ts
│       │   │   │   │   ├── chatCodeblockActions.ts
│       │   │   │   │   ├── chatContextActions.ts
│       │   │   │   │   ├── chatCopyActions.ts
│       │   │   │   │   ├── chatDeveloperActions.ts
│       │   │   │   │   ├── chatExecuteActions.ts
│       │   │   │   │   ├── chatFileTreeActions.ts
│       │   │   │   │   ├── chatGettingStarted.ts
│       │   │   │   │   ├── chatImportExport.ts
│       │   │   │   │   ├── chatMoveActions.ts
│       │   │   │   │   ├── chatQuickInputActions.ts
│       │   │   │   │   ├── chatTitleActions.ts
│       │   │   │   │   ├── chatToolActions.ts
│       │   │   │   │   ├── chatTransfer.ts
│       │   │   │   │   └── codeBlockOperations.ts
│       │   │   │   ├── attachments
│       │   │   │   │   ├── implicitContextAttachment.ts
│       │   │   │   │   └── promptAttachments
│       │   │   │   │       ├── promptAttachmentWidget.ts
│       │   │   │   │       └── promptAttachmentsCollectionWidget.ts
│       │   │   │   ├── chat.contribution.ts
│       │   │   │   ├── chat.ts
│       │   │   │   ├── chatAccessibilityProvider.ts
│       │   │   │   ├── chatAccessibilityService.ts
│       │   │   │   ├── chatAgentHover.ts
│       │   │   │   ├── chatAttachmentModel
│       │   │   │   │   ├── chatPromptAttachmentModel.ts
│       │   │   │   │   └── chatPromptAttachmentsCollection.ts
│       │   │   │   ├── chatAttachmentModel.ts
│       │   │   │   ├── chatAttachmentWidgets.ts
│       │   │   │   ├── chatContentParts
│       │   │   │   │   ├── chatAgentCommandContentPart.ts
│       │   │   │   │   ├── chatAttachmentsContentPart.ts
│       │   │   │   │   ├── chatCodeCitationContentPart.ts
│       │   │   │   │   ├── chatCollections.ts
│       │   │   │   │   ├── chatCommandContentPart.ts
│       │   │   │   │   ├── chatConfirmationContentPart.ts
│       │   │   │   │   ├── chatConfirmationWidget.ts
│       │   │   │   │   ├── chatContentParts.ts
│       │   │   │   │   ├── chatMarkdownAnchorService.ts
│       │   │   │   │   ├── chatMarkdownContentPart.ts
│       │   │   │   │   ├── chatProgressContentPart.ts
│       │   │   │   │   ├── chatQuotaExceededPart.ts
│       │   │   │   │   ├── chatReferencesContentPart.ts
│       │   │   │   │   ├── chatTaskContentPart.ts
│       │   │   │   │   ├── chatTextEditContentPart.ts
│       │   │   │   │   ├── chatToolInvocationPart.ts
│       │   │   │   │   ├── chatTreeContentPart.ts
│       │   │   │   │   ├── chatWarningContentPart.ts
│       │   │   │   ├── chatDragAndDrop.ts
│       │   │   │   ├── chatEdinputInputContentProvider.ts
│       │   │   │   ├── chatEditing
│       │   │   │   │   ├── chatEditing.ts
│       │   │   │   │   ├── chatEditingActions.ts
│       │   │   │   │   ├── chatEditingCodeEditorIntegration.ts
│       │   │   │   │   ├── chatEditingEditorAccessibility.ts
│       │   │   │   │   ├── chatEditingEditorActions.ts
│       │   │   │   │   ├── chatEditingEditorContextKeys.ts
│       │   │   │   │   ├── chatEditingEditorOverlay.ts
│       │   │   │   │   ├── chatEditingModifiedDocumentEntry.ts
│       │   │   │   │   ├── chatEditingModifiedFileEntry.ts
│       │   │   │   │   ├── chatEditingModifiedNotebookEntry.ts
│       │   │   │   │   ├── chatEditingServiceImpl.ts
│       │   │   │   │   ├── chatEditingSession.ts
│       │   │   │   │   ├── chatEditingTextModelContentProviders.ts
│       │   │   │   │   └── notebook
│       │   │   │   │       ├── chatEditingModifiedNotebookDiff.ts
│       │   │   │   │       ├── chatEditingModifiedNotebookSnapshot.ts
│       │   │   │   │       ├── chatEditingNewNotebookContentEdits.ts
│       │   │   │   │       ├── chatEditingNotebookCellEntry.ts
│       │   │   │   │       ├── chatEditingNotebookEditorIntegration.ts
│       │   │   │   │       ├── chatEditingNotebookFileSystemProvider.ts
│       │   │   │   │       ├── helpers.ts
│       │   │   │   │       └── notebookCellChanges.ts
│       │   │   │   ├── chatEditor.ts
│       │   │   │   ├── chatEditorInput.ts
│       │   │   │   ├── chatFollowups.ts
│       │   │   │   ├── chatInlineAnchorWidget.ts
│       │   │   │   ├── chatInputPart.ts
│       │   │   │   ├── chatListRenderer.ts
│       │   │   │   ├── chatMarkdownDecorationsRenderer.ts
│       │   │   │   ├── chatMarkdownRenderer.ts
│       │   │   │   ├── chatOptions.ts
│       │   │   │   ├── chatParticipant.contribution.ts
│       │   │   │   ├── chatPasteProviders.ts
│       │   │   │   ├── chatQuick.ts
│       │   │   │   ├── chatResponseAccessibleView.ts
│       │   │   │   ├── chatSetup.ts
│       │   │   │   ├── chatStatus.ts
│       │   │   │   ├── chatVariables.ts
│       │   │   │   ├── chatViewPane.ts
│       │   │   │   ├── chatWidget.ts
│       │   │   │   ├── codeBlockContextProviderService.ts
│       │   │   │   ├── codeBlockPart.ts
│       │   │   │   ├── contrib
│       │   │   │   │   ├── chatDynamicVariables
│       │   │   │   │   │   └── chatFileReference.ts
│       │   │   │   │   ├── chatDynamicVariables.ts
│       │   │   │   │   ├── chatImplicitContext.ts
│       │   │   │   │   ├── chatInputCompletions.ts
│       │   │   │   │   ├── chatInputEditorContrib.ts
│       │   │   │   │   ├── chatInputEditorHover.ts
│       │   │   │   │   ├── chatInputRelatedFilesContrib.ts
│       │   │   │   │   ├── editorHoverWrapper.ts
│       │   │   │   │   └── screenshot.ts
│       │   │   │   ├── imageUtils.ts
│       │   │   │   ├── languageModelToolsService.ts
│       │   │   │   ├── promptSyntax
│       │   │   │   │   └── contributions
│       │   │   │   │       ├── createPromptCommand
│       │   │   │   │       │   ├── createPromptCommand.ts
│       │   │   │   │       │   ├── dialogs
│       │   │   │   │       │   │   ├── askForPromptName.ts
│       │   │   │   │       │   │   └── askForPromptSourceFolder.ts
│       │   │   │   │       │   ├── errors.ts
│       │   │   │   │       │   └── utils
│       │   │   │   │       │       └── createPromptFile.ts
│       │   │   │   │       └── usePromptCommand.ts
│       │   │   │   └── viewsWelcome
│       │   │   │       ├── chatViewWelcomeController.ts
│       │   │   │       ├── chatViewsWelcome.ts
│       │   │   │       └── chatViewsWelcomeHandler.ts
│       │   │   ├── common
│       │   │   │   ├── annotations.ts
│       │   │   │   ├── chat.ts
│       │   │   │   ├── chatActions.ts
│       │   │   │   ├── chatAgents.ts
│       │   │   │   ├── chatCodeMapperService.ts
│       │   │   │   ├── chatColors.ts
│       │   │   │   ├── chatContextKeys.ts
│       │   │   │   ├── chatEditingService.ts
│       │   │   │   ├── chatEntitlementService.ts
│       │   │   │   ├── chatModel.ts
│       │   │   │   ├── chatParserTypes.ts
│       │   │   │   ├── chatParticipantContribTypes.ts
│       │   │   │   ├── chatProgressTypes
│       │   │   │   │   └── chatToolInvocation.ts
│       │   │   │   ├── chatRequestParser.ts
│       │   │   │   ├── chatService.ts
│       │   │   │   ├── chatServiceImpl.ts
│       │   │   │   ├── chatServiceTelemetry.ts
│       │   │   │   ├── chatSlashCommands.ts
│       │   │   │   ├── chatTransferService.ts
│       │   │   │   ├── chatVariables.ts
│       │   │   │   ├── chatViewModel.ts
│       │   │   │   ├── chatWidgetHistoryService.ts
│       │   │   │   ├── chatWordCounter.ts
│       │   │   │   ├── codeBlockModelCollection.ts
│       │   │   │   ├── constants.ts
│       │   │   │   ├── ignoredFiles.ts
│       │   │   │   ├── languageModelStats.ts
│       │   │   │   ├── languageModelToolsService.ts
│       │   │   │   ├── languageModels.ts
│       │   │   │   ├── promptFileReferenceErrors.ts
│       │   │   │   ├── promptSyntax
│       │   │   │   │   ├── codecs
│       │   │   │   │   │   ├── chatPromptCodec.ts
│       │   │   │   │   │   ├── chatPromptDecoder.ts
│       │   │   │   │   │   ├── parsers
│       │   │   │   │   │   │   └── promptVariableParser.ts
│       │   │   │   │   │   └── tokens
│       │   │   │   │   │       ├── fileReference.ts
│       │   │   │   │   │       ├── promptToken.ts
│       │   │   │   │   │       └── promptVariable.ts
│       │   │   │   │   ├── constants.ts
│       │   │   │   │   ├── contentProviders
│       │   │   │   │   │   ├── filePromptContentsProvider.ts
│       │   │   │   │   │   ├── promptContentsProviderBase.ts
│       │   │   │   │   │   ├── textModelContentsProvider.ts
│       │   │   │   │   │   └── types.d.ts
│       │   │   │   │   ├── languageFeatures
│       │   │   │   │   │   ├── promptLinkDiagnosticsProvider.ts
│       │   │   │   │   │   ├── promptLinkProvider.ts
│       │   │   │   │   │   ├── promptPathAutocompletion.ts
│       │   │   │   │   │   └── types.d.ts
│       │   │   │   │   ├── parsers
│       │   │   │   │   │   ├── basePromptParser.ts
│       │   │   │   │   │   ├── filePromptParser.ts
│       │   │   │   │   │   ├── textModelPromptParser.ts
│       │   │   │   │   │   ├── topError.ts
│       │   │   │   │   │   └── types.d.ts
│       │   │   │   │   ├── service
│       │   │   │   │   │   ├── promptsService.ts
│       │   │   │   │   │   └── types.ts
│       │   │   │   │   └── utils
│       │   │   │   │       └── promptFilesLocator.ts
│       │   │   │   ├── tools
│       │   │   │   │   ├── editFileTool.ts
│       │   │   │   │   ├── languageModelToolsContribution.ts
│       │   │   │   │   ├── languageModelToolsParametersSchema.ts
│       │   │   │   │   └── tools.ts
│       │   │   │   └── voiceChatService.ts
│       │   │   ├── electron-sandbox
│       │   │   │   ├── actions
│       │   │   │   │   └── voiceChatActions.ts
│       │   │   │   └── chat.contribution.ts
│       │   ├── codeActions
│       │   │   └── browser
│       │   │       ├── codeActions.contribution.ts
│       │   │       └── codeActionsContribution.ts
│       │   ├── codeEditor
│       │   │   ├── browser
│       │   │   │   ├── accessibility
│       │   │   │   │   └── accessibility.ts
│       │   │   │   ├── codeEditor.contribution.ts
│       │   │   │   ├── dictation
│       │   │   │   │   └── editorDictation.ts
│       │   │   │   ├── diffEditorAccessibilityHelp.ts
│       │   │   │   ├── diffEditorHelper.ts
│       │   │   │   ├── editorFeatures.ts
│       │   │   │   ├── editorLineNumberMenu.ts
│       │   │   │   ├── editorSettingsMigration.ts
│       │   │   │   ├── emptyTextEditorHint
│       │   │   │   │   └── emptyTextEditorHint.ts
│       │   │   │   ├── find
│       │   │   │   │   └── simpleFindWidget.ts
│       │   │   │   ├── inspectEditorTokens
│       │   │   │   │   └── inspectEditorTokens.ts
│       │   │   │   ├── inspectKeybindings.ts
│       │   │   │   ├── largeFileOptimizations.ts
│       │   │   │   ├── menuPreventer.ts
│       │   │   │   ├── outline
│       │   │   │   │   ├── documentSymbolsOutline.ts
│       │   │   │   │   └── documentSymbolsTree.ts
│       │   │   │   ├── quickaccess
│       │   │   │   │   ├── gotoLineQuickAccess.ts
│       │   │   │   │   └── gotoSymbolQuickAccess.ts
│       │   │   │   ├── saveParticipants.ts
│       │   │   │   ├── selectionClipboard.ts
│       │   │   │   ├── simpleEditorOptions.ts
│       │   │   │   ├── suggestEnabledInput
│       │   │   │   │   └── suggestEnabledInput.ts
│       │   │   │   ├── toggleColumnSelection.ts
│       │   │   │   ├── toggleMinimap.ts
│       │   │   │   ├── toggleMultiCursorModifier.ts
│       │   │   │   ├── toggleOvertype.ts
│       │   │   │   ├── toggleRenderControlCharacter.ts
│       │   │   │   ├── toggleRenderWhitespace.ts
│       │   │   │   ├── toggleWordWrap.ts
│       │   │   │   ├── workbenchEditorWorkerService.ts
│       │   │   │   └── workbenchReferenceSearch.ts
│       │   │   ├── common
│       │   │   │   └── languageConfigurationExtensionPoint.ts
│       │   │   ├── electron-sandbox
│       │   │   │   ├── codeEditor.contribution.ts
│       │   │   │   ├── displayChangeRemeasureFonts.ts
│       │   │   │   ├── inputClipboardActions.ts
│       │   │   │   ├── selectionClipboard.ts
│       │   │   │   ├── sleepResumeRepaintMinimap.ts
│       │   │   │   └── startDebugTextMate.ts
│       │   ├── commands
│       │   │   └── common
│       │   │       └── commands.contribution.ts
│       │   ├── comments
│       │   │   ├── browser
│       │   │   │   ├── commentColors.ts
│       │   │   │   ├── commentFormActions.ts
│       │   │   │   ├── commentGlyphWidget.ts
│       │   │   │   ├── commentMenus.ts
│       │   │   │   ├── commentNode.ts
│       │   │   │   ├── commentReply.ts
│       │   │   │   ├── commentService.ts
│       │   │   │   ├── commentThreadAdditionalActions.ts
│       │   │   │   ├── commentThreadBody.ts
│       │   │   │   ├── commentThreadHeader.ts
│       │   │   │   ├── commentThreadRangeDecorator.ts
│       │   │   │   ├── commentThreadWidget.ts
│       │   │   │   ├── commentThreadZoneWidget.ts
│       │   │   │   ├── comments.contribution.ts
│       │   │   │   ├── comments.ts
│       │   │   │   ├── commentsAccessibility.ts
│       │   │   │   ├── commentsAccessibleView.ts
│       │   │   │   ├── commentsController.ts
│       │   │   │   ├── commentsEditorContribution.ts
│       │   │   │   ├── commentsFilterOptions.ts
│       │   │   │   ├── commentsInputContentProvider.ts
│       │   │   │   ├── commentsModel.ts
│       │   │   │   ├── commentsTreeViewer.ts
│       │   │   │   ├── commentsView.ts
│       │   │   │   ├── commentsViewActions.ts
│       │   │   │   ├── reactionsAction.ts
│       │   │   │   ├── simpleCommentEditor.ts
│       │   │   │   └── timestamp.ts
│       │   │   ├── common
│       │   │   │   ├── commentCommandIds.ts
│       │   │   │   ├── commentContextKeys.ts
│       │   │   │   ├── commentModel.ts
│       │   │   │   ├── commentThreadWidget.ts
│       │   │   │   └── commentsConfiguration.ts
│       │   ├── configExporter
│       │   │   └── electron-sandbox
│       │   │       ├── configurationExportHelper.contribution.ts
│       │   │       └── configurationExportHelper.ts
│       │   ├── contextmenu
│       │   │   └── browser
│       │   │       └── contextmenu.contribution.ts
│       │   ├── customEditor
│       │   │   ├── browser
│       │   │   │   ├── customEditor.contribution.ts
│       │   │   │   ├── customEditorInput.ts
│       │   │   │   ├── customEditorInputFactory.ts
│       │   │   │   ├── customEditors.ts
│       │   │   └── common
│       │   │       ├── contributedCustomEditors.ts
│       │   │       ├── customEditor.ts
│       │   │       ├── customEditorModelManager.ts
│       │   │       ├── customTextEditorModel.ts
│       │   │       └── extensionPoint.ts
│       │   ├── debug
│       │   │   ├── browser
│       │   │   │   ├── baseDebugView.ts
│       │   │   │   ├── breakpointEditorContribution.ts
│       │   │   │   ├── breakpointWidget.ts
│       │   │   │   ├── breakpointsView.ts
│       │   │   │   ├── callStackEditorContribution.ts
│       │   │   │   ├── callStackView.ts
│       │   │   │   ├── callStackWidget.ts
│       │   │   │   ├── debug.contribution.ts
│       │   │   │   ├── debugANSIHandling.ts
│       │   │   │   ├── debugActionViewItems.ts
│       │   │   │   ├── debugAdapterManager.ts
│       │   │   │   ├── debugColors.ts
│       │   │   │   ├── debugCommands.ts
│       │   │   │   ├── debugConfigurationManager.ts
│       │   │   │   ├── debugConsoleQuickAccess.ts
│       │   │   │   ├── debugEditorActions.ts
│       │   │   │   ├── debugEditorContribution.ts
│       │   │   │   ├── debugExpressionRenderer.ts
│       │   │   │   ├── debugHover.ts
│       │   │   │   ├── debugIcons.ts
│       │   │   │   ├── debugMemory.ts
│       │   │   │   ├── debugProgress.ts
│       │   │   │   ├── debugQuickAccess.ts
│       │   │   │   ├── debugService.ts
│       │   │   │   ├── debugSession.ts
│       │   │   │   ├── debugSessionPicker.ts
│       │   │   │   ├── debugSettingMigration.ts
│       │   │   │   ├── debugStatus.ts
│       │   │   │   ├── debugTaskRunner.ts
│       │   │   │   ├── debugTitle.ts
│       │   │   │   ├── debugToolBar.ts
│       │   │   │   ├── debugViewlet.ts
│       │   │   │   ├── disassemblyView.ts
│       │   │   │   ├── exceptionWidget.ts
│       │   │   │   ├── extensionHostDebugService.ts
│       │   │   │   ├── linkDetector.ts
│       │   │   │   ├── loadedScriptsView.ts
│       │   │   │   ├── rawDebugSession.ts
│       │   │   │   ├── repl.ts
│       │   │   │   ├── replAccessibilityHelp.ts
│       │   │   │   ├── replAccessibleView.ts
│       │   │   │   ├── replFilter.ts
│       │   │   │   ├── replViewer.ts
│       │   │   │   ├── runAndDebugAccessibilityHelp.ts
│       │   │   │   ├── statusbarColorProvider.ts
│       │   │   │   ├── variablesView.ts
│       │   │   │   ├── watchExpressionsView.ts
│       │   │   │   └── welcomeView.ts
│       │   │   ├── common
│       │   │   │   ├── abstractDebugAdapter.ts
│       │   │   │   ├── breakpoints.ts
│       │   │   │   ├── debug.ts
│       │   │   │   ├── debugAccessibilityAnnouncer.ts
│       │   │   │   ├── debugCompoundRoot.ts
│       │   │   │   ├── debugContentProvider.ts
│       │   │   │   ├── debugContext.ts
│       │   │   │   ├── debugLifecycle.ts
│       │   │   │   ├── debugModel.ts
│       │   │   │   ├── debugProtocol.d.ts
│       │   │   │   ├── debugSchemas.ts
│       │   │   │   ├── debugSource.ts
│       │   │   │   ├── debugStorage.ts
│       │   │   │   ├── debugTelemetry.ts
│       │   │   │   ├── debugUtils.ts
│       │   │   │   ├── debugViewModel.ts
│       │   │   │   ├── debugVisualizers.ts
│       │   │   │   ├── debugger.ts
│       │   │   │   ├── disassemblyViewInput.ts
│       │   │   │   ├── loadedScriptsPicker.ts
│       │   │   │   ├── replAccessibilityAnnouncer.ts
│       │   │   │   └── replModel.ts
│       │   │   ├── electron-sandbox
│       │   │   │   └── extensionHostDebugService.ts
│       │   │   ├── node
│       │   │   │   ├── debugAdapter.ts
│       │   │   │   ├── telemetryApp.ts
│       │   │   │   └── terminals.ts
│       │   ├── deprecatedExtensionMigrator
│       │   │   └── browser
│       │   │       └── deprecatedExtensionMigrator.contribution.ts
│       │   ├── dropOrPasteInto
│       │   │   └── browser
│       │   │       ├── commands.ts
│       │   │       ├── configurationSchema.ts
│       │   │       └── dropOrPasteInto.contribution.ts
│       │   ├── editSessions
│       │   │   ├── browser
│       │   │   │   ├── editSessions.contribution.ts
│       │   │   │   ├── editSessionsFileSystemProvider.ts
│       │   │   │   ├── editSessionsStorageService.ts
│       │   │   │   └── editSessionsViews.ts
│       │   │   ├── common
│       │   │   │   ├── editSessions.ts
│       │   │   │   ├── editSessionsLogService.ts
│       │   │   │   ├── editSessionsStorageClient.ts
│       │   │   │   └── workspaceStateSync.ts
│       │   ├── emergencyAlert
│       │   │   └── electron-sandbox
│       │   │       └── emergencyAlert.contribution.ts
│       │   ├── emmet
│       │   │   ├── browser
│       │   │   │   ├── actions
│       │   │   │   │   └── expandAbbreviation.ts
│       │   │   │   ├── emmet.contribution.ts
│       │   │   │   └── emmetActions.ts
│       │   ├── encryption
│       │   │   └── electron-sandbox
│       │   │       └── encryption.contribution.ts
│       │   ├── extensions
│       │   │   ├── browser
│       │   │   │   ├── abstractRuntimeExtensionsEditor.ts
│       │   │   │   ├── browserRuntimeExtensionsEditor.ts
│       │   │   │   ├── configBasedRecommendations.ts
│       │   │   │   ├── exeBasedRecommendations.ts
│       │   │   │   ├── extensionEditor.ts
│       │   │   │   ├── extensionEnablementWorkspaceTrustTransitionParticipant.ts
│       │   │   │   ├── extensionFeaturesTab.ts
│       │   │   │   ├── extensionRecommendationNotificationService.ts
│       │   │   │   ├── extensionRecommendations.ts
│       │   │   │   ├── extensionRecommendationsService.ts
│       │   │   │   ├── extensions.contribution.ts
│       │   │   │   ├── extensions.web.contribution.ts
│       │   │   │   ├── extensionsActions.ts
│       │   │   │   ├── extensionsActivationProgress.ts
│       │   │   │   ├── extensionsCompletionItemsProvider.ts
│       │   │   │   ├── extensionsDependencyChecker.ts
│       │   │   │   ├── extensionsIcons.ts
│       │   │   │   ├── extensionsList.ts
│       │   │   │   ├── extensionsQuickAccess.ts
│       │   │   │   ├── extensionsViewer.ts
│       │   │   │   ├── extensionsViewlet.ts
│       │   │   │   ├── extensionsViews.ts
│       │   │   │   ├── extensionsWidgets.ts
│       │   │   │   ├── extensionsWorkbenchService.ts
│       │   │   │   ├── fileBasedRecommendations.ts
│       │   │   │   ├── keymapRecommendations.ts
│       │   │   │   ├── languageRecommendations.ts
│       │   │   │   ├── remoteRecommendations.ts
│       │   │   │   ├── unsupportedExtensionsMigrationContribution.ts
│       │   │   │   ├── webRecommendations.ts
│       │   │   │   └── workspaceRecommendations.ts
│       │   │   ├── common
│       │   │   │   ├── extensionQuery.ts
│       │   │   │   ├── extensions.ts
│       │   │   │   ├── extensionsFileTemplate.ts
│       │   │   │   ├── extensionsInput.ts
│       │   │   │   ├── extensionsUtils.ts
│       │   │   │   ├── reportExtensionIssueAction.ts
│       │   │   │   └── runtimeExtensionsInput.ts
│       │   │   ├── electron-sandbox
│       │   │   │   ├── debugExtensionHostAction.ts
│       │   │   │   ├── extensionProfileService.ts
│       │   │   │   ├── extensions.contribution.ts
│       │   │   │   ├── extensionsActions.ts
│       │   │   │   ├── extensionsAutoProfiler.ts
│       │   │   │   ├── extensionsSlowActions.ts
│       │   │   │   ├── remoteExtensionsInit.ts
│       │   │   │   └── runtimeExtensionsEditor.ts
│       │   ├── externalTerminal
│       │   │   ├── browser
│       │   │   │   └── externalTerminal.contribution.ts
│       │   │   ├── electron-sandbox
│       │   │   │   └── externalTerminal.contribution.ts
│       │   │   └── node
│       │   │       ├── TerminalHelper.scpt
│       │   │       └── iTermHelper.scpt
│       │   ├── externalUriOpener
│       │   │   ├── common
│       │   │   │   ├── configuration.ts
│       │   │   │   ├── contributedOpeners.ts
│       │   │   │   ├── externalUriOpener.contribution.ts
│       │   │   │   └── externalUriOpenerService.ts
│       │   ├── files
│       │   │   ├── browser
│       │   │   │   ├── editors
│       │   │   │   │   ├── binaryFileEditor.ts
│       │   │   │   │   ├── fileEditorHandler.ts
│       │   │   │   │   ├── fileEditorInput.ts
│       │   │   │   │   ├── textFileEditor.ts
│       │   │   │   │   ├── textFileEditorTracker.ts
│       │   │   │   │   └── textFileSaveErrorHandler.ts
│       │   │   │   ├── explorerFileContrib.ts
│       │   │   │   ├── explorerService.ts
│       │   │   │   ├── explorerViewlet.ts
│       │   │   │   ├── fileActions.contribution.ts
│       │   │   │   ├── fileActions.ts
│       │   │   │   ├── fileCommands.ts
│       │   │   │   ├── fileConstants.ts
│       │   │   │   ├── fileImportExport.ts
│       │   │   │   ├── files.contribution.ts
│       │   │   │   ├── files.ts
│       │   │   │   ├── views
│       │   │   │   │   ├── emptyView.ts
│       │   │   │   │   ├── explorerDecorationsProvider.ts
│       │   │   │   │   ├── explorerView.ts
│       │   │   │   │   ├── explorerViewer.ts
│       │   │   │   │   └── openEditorsView.ts
│       │   │   │   └── workspaceWatcher.ts
│       │   │   ├── common
│       │   │   │   ├── dirtyFilesIndicator.ts
│       │   │   │   ├── explorerFileNestingTrie.ts
│       │   │   │   ├── explorerModel.ts
│       │   │   │   └── files.ts
│       │   │   ├── electron-sandbox
│       │   │   │   ├── fileActions.contribution.ts
│       │   │   │   └── fileCommands.ts
│       │   ├── folding
│       │   │   └── browser
│       │   │       └── folding.contribution.ts
│       │   ├── format
│       │   │   └── browser
│       │   │       ├── format.contribution.ts
│       │   │       ├── formatActionsMultiple.ts
│       │   │       ├── formatActionsNone.ts
│       │   │       └── formatModified.ts
│       │   ├── inlayHints
│       │   │   └── browser
│       │   │       └── inlayHintsAccessibilty.ts
│       │   ├── inlineChat
│       │   │   ├── browser
│       │   │   │   ├── inlineChat.contribution.ts
│       │   │   │   ├── inlineChatAccessibilityHelp.ts
│       │   │   │   ├── inlineChatAccessibleView.ts
│       │   │   │   ├── inlineChatActions.ts
│       │   │   │   ├── inlineChatController.ts
│       │   │   │   ├── inlineChatCurrentLine.ts
│       │   │   │   ├── inlineChatNotebook.ts
│       │   │   │   ├── inlineChatSession.ts
│       │   │   │   ├── inlineChatSessionService.ts
│       │   │   │   ├── inlineChatSessionServiceImpl.ts
│       │   │   │   ├── inlineChatStrategies.ts
│       │   │   │   ├── inlineChatWidget.ts
│       │   │   │   ├── inlineChatZoneWidget.ts
│       │   │   │   └── utils.ts
│       │   │   ├── common
│       │   │   │   └── inlineChat.ts
│       │   │   ├── electron-sandbox
│       │   │   │   ├── inlineChat.contribution.ts
│       │   │   │   └── inlineChatActions.ts
│       │   ├── inlineCompletions
│       │   │   └── browser
│       │   │       ├── inlineCompletionLanguageStatusBarContribution.ts
│       │   │       └── inlineCompletions.contribution.ts
│       │   ├── interactive
│       │   │   └── browser
│       │   │       ├── interactive.contribution.ts
│       │   │       ├── interactiveCommon.ts
│       │   │       ├── interactiveDocumentService.ts
│       │   │       ├── interactiveEditor.ts
│       │   │       ├── interactiveEditorInput.ts
│       │   │       ├── interactiveHistoryService.ts
│       │   │       └── replInputHintContentWidget.ts
│       │   ├── issue
│       │   │   ├── browser
│       │   │   │   ├── baseIssueReporterService.ts
│       │   │   │   ├── issue.contribution.ts
│       │   │   │   ├── issueFormService.ts
│       │   │   │   ├── issueQuickAccess.ts
│       │   │   │   ├── issueReporterModel.ts
│       │   │   │   ├── issueReporterPage.ts
│       │   │   │   ├── issueReporterService.ts
│       │   │   │   ├── issueService.ts
│       │   │   │   ├── issueTroubleshoot.ts
│       │   │   ├── common
│       │   │   │   ├── issue.contribution.ts
│       │   │   │   ├── issue.ts
│       │   │   │   └── issueReporterUtil.ts
│       │   │   ├── electron-sandbox
│       │   │   │   ├── issue.contribution.ts
│       │   │   │   ├── issueReporterService.ts
│       │   │   │   ├── issueService.ts
│       │   │   │   ├── nativeIssueFormService.ts
│       │   │   │   ├── process.contribution.ts
│       │   │   │   ├── processMainService.ts
│       │   │   │   └── processService.ts
│       │   ├── keybindings
│       │   │   └── browser
│       │   │       └── keybindings.contribution.ts
│       │   ├── languageDetection
│       │   │   └── browser
│       │   │       └── languageDetection.contribution.ts
│       │   ├── languageStatus
│       │   │   └── browser
│       │   │       ├── languageStatus.contribution.ts
│       │   │       ├── languageStatus.ts
│       │   ├── limitIndicator
│       │   │   └── browser
│       │   │       └── limitIndicator.contribution.ts
│       │   ├── list
│       │   │   └── browser
│       │   │       ├── list.contribution.ts
│       │   │       ├── listResizeColumnAction.ts
│       │   │       └── tableColumnResizeQuickPick.ts
│       │   ├── localHistory
│       │   │   ├── browser
│       │   │   │   ├── localHistory.contribution.ts
│       │   │   │   ├── localHistory.ts
│       │   │   │   ├── localHistoryCommands.ts
│       │   │   │   ├── localHistoryFileSystemProvider.ts
│       │   │   │   └── localHistoryTimeline.ts
│       │   │   └── electron-sandbox
│       │   │       ├── localHistory.contribution.ts
│       │   │       └── localHistoryCommands.ts
│       │   ├── localization
│       │   │   ├── browser
│       │   │   │   └── localization.contribution.ts
│       │   │   ├── common
│       │   │   │   ├── localization.contribution.ts
│       │   │   │   └── localizationsActions.ts
│       │   │   └── electron-sandbox
│       │   │       ├── localization.contribution.ts
│       │   │       └── minimalTranslations.ts
│       │   ├── logs
│       │   │   ├── browser
│       │   │   │   └── logs.contribution.ts
│       │   │   ├── common
│       │   │   │   ├── defaultLogLevels.ts
│       │   │   │   ├── logs.contribution.ts
│       │   │   │   ├── logsActions.ts
│       │   │   │   └── logsDataCleaner.ts
│       │   │   └── electron-sandbox
│       │   │       ├── logs.contribution.ts
│       │   │       └── logsActions.ts
│       │   ├── markdown
│       │   │   ├── browser
│       │   │   │   ├── markdownDocumentRenderer.ts
│       │   │   │   ├── markdownSettingRenderer.ts
│       │   │   │   └── markedGfmHeadingIdPlugin.ts
│       │   ├── markers
│       │   │   ├── browser
│       │   │   │   ├── markers.contribution.ts
│       │   │   │   ├── markers.ts
│       │   │   │   ├── markersFileDecorations.ts
│       │   │   │   ├── markersFilterOptions.ts
│       │   │   │   ├── markersModel.ts
│       │   │   │   ├── markersTable.ts
│       │   │   │   ├── markersTreeViewer.ts
│       │   │   │   ├── markersView.ts
│       │   │   │   ├── markersViewActions.ts
│       │   │   │   └── messages.ts
│       │   │   ├── common
│       │   │   │   └── markers.ts
│       │   ├── mcp
│       │   │   ├── browser
│       │   │   │   ├── mcp.contribution.ts
│       │   │   │   ├── mcpCommands.ts
│       │   │   │   └── mcpDiscovery.ts
│       │   │   ├── common
│       │   │   │   ├── discovery
│       │   │   │   │   ├── configMcpDiscovery.ts
│       │   │   │   │   ├── mcpDiscovery.ts
│       │   │   │   │   ├── nativeMcpDiscoveryAbstract.ts
│       │   │   │   │   ├── nativeMcpDiscoveryAdapters.ts
│       │   │   │   │   └── nativeMcpRemoteDiscovery.ts
│       │   │   │   ├── mcpConfiguration.ts
│       │   │   │   ├── mcpContextKeys.ts
│       │   │   │   ├── mcpRegistry.ts
│       │   │   │   ├── mcpRegistryInputStorage.ts
│       │   │   │   ├── mcpRegistryTypes.ts
│       │   │   │   ├── mcpServer.ts
│       │   │   │   ├── mcpServerConnection.ts
│       │   │   │   ├── mcpServerRequestHandler.ts
│       │   │   │   ├── mcpService.ts
│       │   │   │   ├── mcpTypes.ts
│       │   │   │   └── modelContextProtocol.ts
│       │   │   ├── electron-sandbox
│       │   │   │   ├── mcp.contribution.ts
│       │   │   │   └── nativeMpcDiscovery.ts
│       │   ├── mergeEditor
│       │   │   ├── browser
│       │   │   │   ├── commands
│       │   │   │   │   ├── commands.ts
│       │   │   │   │   └── devCommands.ts
│       │   │   │   ├── mergeEditor.contribution.ts
│       │   │   │   ├── mergeEditorInput.ts
│       │   │   │   ├── mergeEditorInputModel.ts
│       │   │   │   ├── mergeEditorSerializer.ts
│       │   │   │   ├── mergeMarkers
│       │   │   │   │   └── mergeMarkersController.ts
│       │   │   │   ├── model
│       │   │   │   │   ├── diffComputer.ts
│       │   │   │   │   ├── editing.ts
│       │   │   │   │   ├── lineRange.ts
│       │   │   │   │   ├── mapping.ts
│       │   │   │   │   ├── mergeEditorModel.ts
│       │   │   │   │   ├── modifiedBaseRange.ts
│       │   │   │   │   ├── rangeUtils.ts
│       │   │   │   │   └── textModelDiffs.ts
│       │   │   │   ├── telemetry.ts
│       │   │   │   ├── utils.ts
│       │   │   │   └── view
│       │   │   │       ├── colors.ts
│       │   │   │       ├── conflictActions.ts
│       │   │   │       ├── editorGutter.ts
│       │   │   │       ├── editors
│       │   │   │       │   ├── baseCodeEditorView.ts
│       │   │   │       │   ├── codeEditorView.ts
│       │   │   │       │   ├── inputCodeEditorView.ts
│       │   │   │       │   └── resultCodeEditorView.ts
│       │   │   │       ├── fixedZoneWidget.ts
│       │   │   │       ├── lineAlignment.ts
│       │   │   │       ├── mergeEditor.ts
│       │   │   │       ├── scrollSynchronizer.ts
│       │   │   │       ├── viewModel.ts
│       │   │   │       └── viewZones.ts
│       │   │   ├── common
│       │   │   │   └── mergeEditor.ts
│       │   │   ├── electron-sandbox
│       │   │   │   ├── devCommands.ts
│       │   │   │   └── mergeEditor.contribution.ts
│       │   ├── multiDiffEditor
│       │   │   └── browser
│       │   │       ├── actions.ts
│       │   │       ├── icons.contribution.ts
│       │   │       ├── multiDiffEditor.contribution.ts
│       │   │       ├── multiDiffEditor.ts
│       │   │       ├── multiDiffEditorInput.ts
│       │   │       ├── multiDiffSourceResolverService.ts
│       │   │       └── scmMultiDiffSourceResolver.ts
│       │   ├── notebook
│       │   │   ├── browser
│       │   │   │   ├── contrib
│       │   │   │   │   ├── cellCommands
│       │   │   │   │   │   └── cellCommands.ts
│       │   │   │   │   ├── cellDiagnostics
│       │   │   │   │   │   ├── cellDiagnosticEditorContrib.ts
│       │   │   │   │   │   ├── cellDiagnostics.ts
│       │   │   │   │   │   ├── cellDiagnosticsActions.ts
│       │   │   │   │   │   └── diagnosticCellStatusBarContrib.ts
│       │   │   │   │   ├── cellStatusBar
│       │   │   │   │   │   ├── contributedStatusBarItemController.ts
│       │   │   │   │   │   ├── executionStatusBarItemController.ts
│       │   │   │   │   │   ├── notebookVisibleCellObserver.ts
│       │   │   │   │   │   └── statusBarProviders.ts
│       │   │   │   │   ├── clipboard
│       │   │   │   │   │   └── notebookClipboard.ts
│       │   │   │   │   ├── debug
│       │   │   │   │   │   ├── notebookBreakpoints.ts
│       │   │   │   │   │   ├── notebookCellPausing.ts
│       │   │   │   │   │   └── notebookDebugDecorations.ts
│       │   │   │   │   ├── editorHint
│       │   │   │   │   │   └── emptyCellEditorHint.ts
│       │   │   │   │   ├── editorStatusBar
│       │   │   │   │   │   └── editorStatusBar.ts
│       │   │   │   │   ├── execute
│       │   │   │   │   │   └── executionEditorProgress.ts
│       │   │   │   │   ├── find
│       │   │   │   │   │   ├── findFilters.ts
│       │   │   │   │   │   ├── findMatchDecorationModel.ts
│       │   │   │   │   │   ├── findModel.ts
│       │   │   │   │   │   ├── notebookFind.ts
│       │   │   │   │   │   ├── notebookFindReplaceWidget.ts
│       │   │   │   │   │   └── notebookFindWidget.ts
│       │   │   │   │   ├── format
│       │   │   │   │   │   └── formatting.ts
│       │   │   │   │   ├── gettingStarted
│       │   │   │   │   │   └── notebookGettingStarted.ts
│       │   │   │   │   ├── kernelDetection
│       │   │   │   │   │   └── notebookKernelDetection.ts
│       │   │   │   │   ├── layout
│       │   │   │   │   │   └── layoutActions.ts
│       │   │   │   │   ├── marker
│       │   │   │   │   │   └── markerProvider.ts
│       │   │   │   │   ├── multicursor
│       │   │   │   │   │   ├── notebookMulticursor.ts
│       │   │   │   │   │   └── notebookSelectionHighlight.ts
│       │   │   │   │   ├── navigation
│       │   │   │   │   │   └── arrow.ts
│       │   │   │   │   ├── notebookVariables
│       │   │   │   │   │   ├── notebookInlineVariables.ts
│       │   │   │   │   │   ├── notebookVariableCommands.ts
│       │   │   │   │   │   ├── notebookVariableContextKeys.ts
│       │   │   │   │   │   ├── notebookVariables.ts
│       │   │   │   │   │   ├── notebookVariablesDataSource.ts
│       │   │   │   │   │   ├── notebookVariablesTree.ts
│       │   │   │   │   │   └── notebookVariablesView.ts
│       │   │   │   │   ├── outline
│       │   │   │   │   │   └── notebookOutline.ts
│       │   │   │   │   ├── profile
│       │   │   │   │   │   └── notebookProfile.ts
│       │   │   │   │   ├── saveParticipants
│       │   │   │   │   │   └── saveParticipants.ts
│       │   │   │   │   ├── troubleshoot
│       │   │   │   │   │   └── layout.ts
│       │   │   │   │   ├── undoRedo
│       │   │   │   │   │   └── notebookUndoRedo.ts
│       │   │   │   │   └── viewportWarmup
│       │   │   │   │       └── viewportWarmup.ts
│       │   │   │   ├── controller
│       │   │   │   │   ├── apiActions.ts
│       │   │   │   │   ├── cellOperations.ts
│       │   │   │   │   ├── cellOutputActions.ts
│       │   │   │   │   ├── chat
│       │   │   │   │   │   ├── cellChatActions.ts
│       │   │   │   │   │   ├── notebook.chat.contribution.ts
│       │   │   │   │   │   ├── notebookChatContext.ts
│       │   │   │   │   │   └── notebookChatController.ts
│       │   │   │   │   ├── coreActions.ts
│       │   │   │   │   ├── editActions.ts
│       │   │   │   │   ├── executeActions.ts
│       │   │   │   │   ├── foldingController.ts
│       │   │   │   │   ├── insertCellActions.ts
│       │   │   │   │   ├── layoutActions.ts
│       │   │   │   │   ├── notebookIndentationActions.ts
│       │   │   │   │   ├── sectionActions.ts
│       │   │   │   │   └── variablesActions.ts
│       │   │   │   ├── diff
│       │   │   │   │   ├── diffCellEditorOptions.ts
│       │   │   │   │   ├── diffComponents.ts
│       │   │   │   │   ├── diffElementOutputs.ts
│       │   │   │   │   ├── diffElementViewModel.ts
│       │   │   │   │   ├── diffNestedCellViewModel.ts
│       │   │   │   │   ├── editorHeightCalculator.ts
│       │   │   │   │   ├── eventDispatcher.ts
│       │   │   │   │   ├── inlineDiff
│       │   │   │   │   │   ├── notebookCellDiffDecorator.ts
│       │   │   │   │   │   ├── notebookDeletedCellDecorator.ts
│       │   │   │   │   │   ├── notebookInlineDiff.ts
│       │   │   │   │   │   ├── notebookInlineDiffWidget.ts
│       │   │   │   │   │   ├── notebookInsertedCellDecorator.ts
│       │   │   │   │   │   ├── notebookModifiedCellDecorator.ts
│       │   │   │   │   │   ├── notebookOriginalCellModelFactory.ts
│       │   │   │   │   │   └── notebookOriginalModelRefFactory.ts
│       │   │   │   │   ├── notebookDiffActions.ts
│       │   │   │   │   ├── notebookDiffEditor.ts
│       │   │   │   │   ├── notebookDiffEditorBrowser.ts
│       │   │   │   │   ├── notebookDiffList.ts
│       │   │   │   │   ├── notebookDiffOverviewRuler.ts
│       │   │   │   │   ├── notebookDiffViewModel.ts
│       │   │   │   │   ├── notebookMultiDiffEditor.ts
│       │   │   │   │   ├── notebookMultiDiffEditorInput.ts
│       │   │   │   │   └── unchangedEditorRegions.ts
│       │   │   │   ├── notebook.contribution.ts
│       │   │   │   ├── notebookAccessibilityHelp.ts
│       │   │   │   ├── notebookAccessibilityProvider.ts
│       │   │   │   ├── notebookAccessibleView.ts
│       │   │   │   ├── notebookBrowser.ts
│       │   │   │   ├── notebookEditor.ts
│       │   │   │   ├── notebookEditorExtensions.ts
│       │   │   │   ├── notebookEditorWidget.ts
│       │   │   │   ├── notebookExtensionPoint.ts
│       │   │   │   ├── notebookIcons.ts
│       │   │   │   ├── notebookLogger.ts
│       │   │   │   ├── notebookOptions.ts
│       │   │   │   ├── notebookViewEvents.ts
│       │   │   │   ├── replEditorAccessibleView.ts
│       │   │   │   ├── services
│       │   │   │   │   ├── notebookCellStatusBarServiceImpl.ts
│       │   │   │   │   ├── notebookEditorService.ts
│       │   │   │   │   ├── notebookEditorServiceImpl.ts
│       │   │   │   │   ├── notebookExecutionServiceImpl.ts
│       │   │   │   │   ├── notebookExecutionStateServiceImpl.ts
│       │   │   │   │   ├── notebookKernelHistoryServiceImpl.ts
│       │   │   │   │   ├── notebookKernelServiceImpl.ts
│       │   │   │   │   ├── notebookKeymapServiceImpl.ts
│       │   │   │   │   ├── notebookLoggingServiceImpl.ts
│       │   │   │   │   ├── notebookRendererMessagingServiceImpl.ts
│       │   │   │   │   ├── notebookServiceImpl.ts
│       │   │   │   │   └── notebookWorkerServiceImpl.ts
│       │   │   │   ├── view
│       │   │   │   │   ├── cellPart.ts
│       │   │   │   │   ├── cellParts
│       │   │   │   │   │   ├── cellActionView.ts
│       │   │   │   │   │   ├── cellComments.ts
│       │   │   │   │   │   ├── cellContextKeys.ts
│       │   │   │   │   │   ├── cellDecorations.ts
│       │   │   │   │   │   ├── cellDnd.ts
│       │   │   │   │   │   ├── cellDragRenderer.ts
│       │   │   │   │   │   ├── cellEditorOptions.ts
│       │   │   │   │   │   ├── cellExecution.ts
│       │   │   │   │   │   ├── cellFocus.ts
│       │   │   │   │   │   ├── cellFocusIndicator.ts
│       │   │   │   │   │   ├── cellOutput.ts
│       │   │   │   │   │   ├── cellProgressBar.ts
│       │   │   │   │   │   ├── cellStatusPart.ts
│       │   │   │   │   │   ├── cellToolbarStickyScroll.ts
│       │   │   │   │   │   ├── cellToolbars.ts
│       │   │   │   │   │   ├── cellWidgets.ts
│       │   │   │   │   │   ├── chat
│       │   │   │   │   │   │   └── cellChatPart.ts
│       │   │   │   │   │   ├── codeCell.ts
│       │   │   │   │   │   ├── codeCellExecutionIcon.ts
│       │   │   │   │   │   ├── codeCellRunToolbar.ts
│       │   │   │   │   │   ├── collapsedCellInput.ts
│       │   │   │   │   │   ├── collapsedCellOutput.ts
│       │   │   │   │   │   ├── foldedCellHint.ts
│       │   │   │   │   │   └── markupCell.ts
│       │   │   │   │   ├── notebookCellAnchor.ts
│       │   │   │   │   ├── notebookCellEditorPool.ts
│       │   │   │   │   ├── notebookCellList.ts
│       │   │   │   │   ├── notebookCellListView.ts
│       │   │   │   │   ├── notebookRenderingCommon.ts
│       │   │   │   │   └── renderers
│       │   │   │   │       ├── backLayerWebView.ts
│       │   │   │   │       ├── cellRenderer.ts
│       │   │   │   │       ├── webviewMessages.ts
│       │   │   │   │       ├── webviewPreloads.ts
│       │   │   │   │       └── webviewThemeMapping.ts
│       │   │   │   ├── viewModel
│       │   │   │   │   ├── OutlineEntry.ts
│       │   │   │   │   ├── baseCellViewModel.ts
│       │   │   │   │   ├── cellEdit.ts
│       │   │   │   │   ├── cellEditorOptions.ts
│       │   │   │   │   ├── cellOutputTextHelper.ts
│       │   │   │   │   ├── cellOutputViewModel.ts
│       │   │   │   │   ├── cellSelectionCollection.ts
│       │   │   │   │   ├── codeCellViewModel.ts
│       │   │   │   │   ├── eventDispatcher.ts
│       │   │   │   │   ├── foldingModel.ts
│       │   │   │   │   ├── markupCellViewModel.ts
│       │   │   │   │   ├── notebookOutlineDataSource.ts
│       │   │   │   │   ├── notebookOutlineDataSourceFactory.ts
│       │   │   │   │   ├── notebookOutlineEntryFactory.ts
│       │   │   │   │   ├── notebookViewModelImpl.ts
│       │   │   │   │   └── viewContext.ts
│       │   │   │   └── viewParts
│       │   │   │       ├── notebookEditorStickyScroll.ts
│       │   │   │       ├── notebookEditorToolbar.ts
│       │   │   │       ├── notebookEditorWidgetContextKeys.ts
│       │   │   │       ├── notebookHorizontalTracker.ts
│       │   │   │       ├── notebookKernelQuickPickStrategy.ts
│       │   │   │       ├── notebookKernelView.ts
│       │   │   │       ├── notebookOverviewRuler.ts
│       │   │   │       ├── notebookTopCellToolbar.ts
│       │   │   │       └── notebookViewZones.ts
│       │   │   ├── common
│       │   │   │   ├── model
│       │   │   │   │   ├── cellEdit.ts
│       │   │   │   │   ├── notebookCellOutputTextModel.ts
│       │   │   │   │   ├── notebookCellTextModel.ts
│       │   │   │   │   ├── notebookMetadataTextModel.ts
│       │   │   │   │   └── notebookTextModel.ts
│       │   │   │   ├── notebookCellStatusBarService.ts
│       │   │   │   ├── notebookCommon.ts
│       │   │   │   ├── notebookContextKeys.ts
│       │   │   │   ├── notebookDiff.ts
│       │   │   │   ├── notebookDiffEditorInput.ts
│       │   │   │   ├── notebookEditorInput.ts
│       │   │   │   ├── notebookEditorModel.ts
│       │   │   │   ├── notebookEditorModelResolverService.ts
│       │   │   │   ├── notebookEditorModelResolverServiceImpl.ts
│       │   │   │   ├── notebookExecutionService.ts
│       │   │   │   ├── notebookExecutionStateService.ts
│       │   │   │   ├── notebookKernelService.ts
│       │   │   │   ├── notebookKeymapService.ts
│       │   │   │   ├── notebookLoggingService.ts
│       │   │   │   ├── notebookOutputRenderer.ts
│       │   │   │   ├── notebookPerformance.ts
│       │   │   │   ├── notebookProvider.ts
│       │   │   │   ├── notebookRange.ts
│       │   │   │   ├── notebookRendererMessagingService.ts
│       │   │   │   ├── notebookService.ts
│       │   │   │   └── services
│       │   │   │       ├── notebookCellMatching.ts
│       │   │   │       ├── notebookSimpleWorker.ts
│       │   │   │       ├── notebookSimpleWorkerMain.ts
│       │   │   │       └── notebookWorkerService.ts
│       │   ├── outline
│       │   │   └── browser
│       │   │       ├── outline.contribution.ts
│       │   │       ├── outline.ts
│       │   │       ├── outlineActions.ts
│       │   │       ├── outlinePane.ts
│       │   │       └── outlineViewState.ts
│       │   ├── output
│       │   │   ├── browser
│       │   │   │   ├── output.contribution.ts
│       │   │   │   ├── outputLinkProvider.ts
│       │   │   │   ├── outputServices.ts
│       │   │   │   └── outputView.ts
│       │   │   ├── common
│       │   │   │   ├── outputChannelModel.ts
│       │   │   │   ├── outputLinkComputer.ts
│       │   │   │   └── outputLinkComputerMain.ts
│       │   ├── performance
│       │   │   ├── browser
│       │   │   │   ├── inputLatencyContrib.ts
│       │   │   │   ├── performance.contribution.ts
│       │   │   │   ├── performance.web.contribution.ts
│       │   │   │   ├── perfviewEditor.ts
│       │   │   │   └── startupTimings.ts
│       │   │   └── electron-sandbox
│       │   │       ├── performance.contribution.ts
│       │   │       ├── rendererAutoProfiler.ts
│       │   │       ├── startupProfiler.ts
│       │   │       └── startupTimings.ts
│       │   ├── preferences
│       │   │   ├── browser
│       │   │   │   ├── keybindingWidgets.ts
│       │   │   │   ├── keybindingsEditor.ts
│       │   │   │   ├── keybindingsEditorContribution.ts
│       │   │   │   ├── keyboardLayoutPicker.ts
│       │   │   │   ├── preferences.contribution.ts
│       │   │   │   ├── preferencesActions.ts
│       │   │   │   ├── preferencesEditor.ts
│       │   │   │   ├── preferencesIcons.ts
│       │   │   │   ├── preferencesRenderers.ts
│       │   │   │   ├── preferencesSearch.ts
│       │   │   │   ├── preferencesWidgets.ts
│       │   │   │   ├── settingsEditor2.ts
│       │   │   │   ├── settingsEditorSettingIndicators.ts
│       │   │   │   ├── settingsLayout.ts
│       │   │   │   ├── settingsSearchMenu.ts
│       │   │   │   ├── settingsTree.ts
│       │   │   │   ├── settingsTreeModels.ts
│       │   │   │   ├── settingsWidgets.ts
│       │   │   │   └── tocTree.ts
│       │   │   ├── common
│       │   │   │   ├── preferences.ts
│       │   │   │   ├── preferencesContribution.ts
│       │   │   │   ├── settingsEditorColorRegistry.ts
│       │   │   │   ├── settingsFilesystemProvider.ts
│       │   │   │   └── smartSnippetInserter.ts
│       │   ├── quickaccess
│       │   │   └── browser
│       │   │       ├── commandsQuickAccess.ts
│       │   │       ├── quickAccess.contribution.ts
│       │   │       └── viewQuickAccess.ts
│       │   ├── relauncher
│       │   │   └── browser
│       │   │       └── relauncher.contribution.ts
│       │   ├── remote
│       │   │   ├── browser
│       │   │   │   ├── explorerViewItems.ts
│       │   │   │   ├── remote.contribution.ts
│       │   │   │   ├── remote.ts
│       │   │   │   ├── remoteConnectionHealth.ts
│       │   │   │   ├── remoteExplorer.ts
│       │   │   │   ├── remoteIcons.ts
│       │   │   │   ├── remoteIndicator.ts
│       │   │   │   ├── remoteStartEntry.contribution.ts
│       │   │   │   ├── remoteStartEntry.ts
│       │   │   │   ├── showCandidate.ts
│       │   │   │   ├── tunnelFactory.ts
│       │   │   │   ├── tunnelView.ts
│       │   │   │   └── urlFinder.ts
│       │   │   ├── common
│       │   │   │   └── remote.contribution.ts
│       │   │   └── electron-sandbox
│       │   │       └── remote.contribution.ts
│       │   ├── remoteTunnel
│       │   │   └── electron-sandbox
│       │   │       └── remoteTunnel.contribution.ts
│       │   ├── replNotebook
│       │   │   └── browser
│       │   │       ├── repl.contribution.ts
│       │   │       ├── replEditor.ts
│       │   │       ├── replEditorAccessibilityHelp.ts
│       │   │       └── replEditorInput.ts
│       │   ├── sash
│       │   │   └── browser
│       │   │       ├── sash.contribution.ts
│       │   │       └── sash.ts
│       │   ├── scm
│       │   │   ├── browser
│       │   │   │   ├── activity.ts
│       │   │   │   ├── menus.ts
│       │   │   │   ├── quickDiffDecorator.ts
│       │   │   │   ├── quickDiffModel.ts
│       │   │   │   ├── quickDiffWidget.ts
│       │   │   │   ├── scm.contribution.ts
│       │   │   │   ├── scmAccessibilityHelp.ts
│       │   │   │   ├── scmHistory.ts
│       │   │   │   ├── scmHistoryViewPane.ts
│       │   │   │   ├── scmRepositoriesViewPane.ts
│       │   │   │   ├── scmRepositoryRenderer.ts
│       │   │   │   ├── scmViewPane.ts
│       │   │   │   ├── scmViewPaneContainer.ts
│       │   │   │   ├── scmViewService.ts
│       │   │   │   ├── util.ts
│       │   │   │   └── workingSet.ts
│       │   │   ├── common
│       │   │   │   ├── history.ts
│       │   │   │   ├── quickDiff.ts
│       │   │   │   ├── quickDiffService.ts
│       │   │   │   ├── scm.ts
│       │   │   │   └── scmService.ts
│       │   ├── scrollLocking
│       │   │   └── browser
│       │   │       ├── scrollLocking.contribution.ts
│       │   │       └── scrollLocking.ts
│       │   ├── search
│       │   │   ├── browser
│       │   │   │   ├── AISearch
│       │   │   │   │   ├── aiSearchModel.ts
│       │   │   │   │   └── aiSearchModelBase.ts
│       │   │   │   ├── anythingQuickAccess.ts
│       │   │   │   ├── notebookSearch
│       │   │   │   │   ├── notebookSearchContributions.ts
│       │   │   │   │   ├── notebookSearchModel.ts
│       │   │   │   │   ├── notebookSearchModelBase.ts
│       │   │   │   │   ├── notebookSearchService.ts
│       │   │   │   │   └── searchNotebookHelpers.ts
│       │   │   │   ├── patternInputWidget.ts
│       │   │   │   ├── quickTextSearch
│       │   │   │   │   └── textSearchQuickAccess.ts
│       │   │   │   ├── replace.ts
│       │   │   │   ├── replaceContributions.ts
│       │   │   │   ├── replaceService.ts
│       │   │   │   ├── search.contribution.ts
│       │   │   │   ├── searchActionsBase.ts
│       │   │   │   ├── searchActionsCopy.ts
│       │   │   │   ├── searchActionsFind.ts
│       │   │   │   ├── searchActionsNav.ts
│       │   │   │   ├── searchActionsRemoveReplace.ts
│       │   │   │   ├── searchActionsSymbol.ts
│       │   │   │   ├── searchActionsTextQuickAccess.ts
│       │   │   │   ├── searchActionsTopBar.ts
│       │   │   │   ├── searchCompare.ts
│       │   │   │   ├── searchFindInput.ts
│       │   │   │   ├── searchIcons.ts
│       │   │   │   ├── searchMessage.ts
│       │   │   │   ├── searchResultsView.ts
│       │   │   │   ├── searchTreeModel
│       │   │   │   │   ├── fileMatch.ts
│       │   │   │   │   ├── folderMatch.ts
│       │   │   │   │   ├── match.ts
│       │   │   │   │   ├── rangeDecorations.ts
│       │   │   │   │   ├── searchModel.ts
│       │   │   │   │   ├── searchResult.ts
│       │   │   │   │   ├── searchTreeCommon.ts
│       │   │   │   │   ├── searchViewModelWorkbenchService.ts
│       │   │   │   │   └── textSearchHeading.ts
│       │   │   │   ├── searchView.ts
│       │   │   │   ├── searchWidget.ts
│       │   │   │   └── symbolsQuickAccess.ts
│       │   │   ├── common
│       │   │   │   ├── cacheState.ts
│       │   │   │   ├── cellSearchModel.ts
│       │   │   │   ├── constants.ts
│       │   │   │   ├── notebookSearch.ts
│       │   │   │   ├── search.ts
│       │   │   │   ├── searchHistoryService.ts
│       │   │   │   └── searchNotebookHelpers.ts
│       │   ├── searchEditor
│       │   │   └── browser
│       │   │       ├── constants.ts
│       │   │       ├── searchEditor.contribution.ts
│       │   │       ├── searchEditor.ts
│       │   │       ├── searchEditorActions.ts
│       │   │       ├── searchEditorInput.ts
│       │   │       ├── searchEditorModel.ts
│       │   │       └── searchEditorSerialization.ts
│       │   ├── share
│       │   │   ├── browser
│       │   │   │   ├── share.contribution.ts
│       │   │   │   └── shareService.ts
│       │   │   └── common
│       │   │       └── share.ts
│       │   ├── snippets
│       │   │   ├── browser
│       │   │   │   ├── commands
│       │   │   │   │   ├── abstractSnippetsActions.ts
│       │   │   │   │   ├── configureSnippets.ts
│       │   │   │   │   ├── fileTemplateSnippets.ts
│       │   │   │   │   ├── insertSnippet.ts
│       │   │   │   │   └── surroundWithSnippet.ts
│       │   │   │   ├── snippetCodeActionProvider.ts
│       │   │   │   ├── snippetCompletionProvider.ts
│       │   │   │   ├── snippetPicker.ts
│       │   │   │   ├── snippets.contribution.ts
│       │   │   │   ├── snippets.ts
│       │   │   │   ├── snippetsFile.ts
│       │   │   │   ├── snippetsService.ts
│       │   │   │   └── tabCompletion.ts
│       │   ├── speech
│       │   │   ├── browser
│       │   │   │   ├── speech.contribution.ts
│       │   │   │   ├── speechAccessibilitySignal.ts
│       │   │   │   └── speechService.ts
│       │   │   ├── common
│       │   │   │   └── speechService.ts
│       │   ├── splash
│       │   │   ├── browser
│       │   │   │   ├── partsSplash.ts
│       │   │   │   ├── splash.contribution.ts
│       │   │   │   └── splash.ts
│       │   │   └── electron-sandbox
│       │   │       └── splash.contribution.ts
│       │   ├── surveys
│       │   │   └── browser
│       │   │       ├── languageSurveys.contribution.ts
│       │   │       └── nps.contribution.ts
│       │   ├── tags
│       │   │   ├── browser
│       │   │   │   └── workspaceTagsService.ts
│       │   │   ├── common
│       │   │   │   ├── javaWorkspaceTags.ts
│       │   │   │   └── workspaceTags.ts
│       │   │   ├── electron-sandbox
│       │   │   │   ├── tags.contribution.ts
│       │   │   │   ├── workspaceTags.ts
│       │   │   │   └── workspaceTagsService.ts
│       │   ├── tasks
│       │   │   ├── browser
│       │   │   │   ├── abstractTaskService.ts
│       │   │   │   ├── runAutomaticTasks.ts
│       │   │   │   ├── task.contribution.ts
│       │   │   │   ├── taskQuickPick.ts
│       │   │   │   ├── taskService.ts
│       │   │   │   ├── taskTerminalStatus.ts
│       │   │   │   ├── tasksQuickAccess.ts
│       │   │   │   └── terminalTaskSystem.ts
│       │   │   ├── common
│       │   │   │   ├── jsonSchemaCommon.ts
│       │   │   │   ├── jsonSchema_v1.ts
│       │   │   │   ├── jsonSchema_v2.ts
│       │   │   │   ├── problemCollectors.ts
│       │   │   │   ├── problemMatcher.ts
│       │   │   │   ├── taskConfiguration.ts
│       │   │   │   ├── taskDefinitionRegistry.ts
│       │   │   │   ├── taskService.ts
│       │   │   │   ├── taskSystem.ts
│       │   │   │   ├── taskTemplates.ts
│       │   │   │   └── tasks.ts
│       │   │   ├── electron-sandbox
│       │   │   │   └── taskService.ts
│       │   ├── telemetry
│       │   │   └── browser
│       │   │       └── telemetry.contribution.ts
│       │   ├── terminal
│       │   │   ├── browser
│       │   │   │   ├── baseTerminalBackend.ts
│       │   │   │   ├── detachedTerminal.ts
│       │   │   │   ├── environmentVariableInfo.ts
│       │   │   │   ├── remotePty.ts
│       │   │   │   ├── remoteTerminalBackend.ts
│       │   │   │   ├── terminal.contribution.ts
│       │   │   │   ├── terminal.ts
│       │   │   │   ├── terminal.web.contribution.ts
│       │   │   │   ├── terminalActions.ts
│       │   │   │   ├── terminalCommands.ts
│       │   │   │   ├── terminalConfigurationService.ts
│       │   │   │   ├── terminalContextMenu.ts
│       │   │   │   ├── terminalEditor.ts
│       │   │   │   ├── terminalEditorInput.ts
│       │   │   │   ├── terminalEditorSerializer.ts
│       │   │   │   ├── terminalEditorService.ts
│       │   │   │   ├── terminalEscapeSequences.ts
│       │   │   │   ├── terminalEvents.ts
│       │   │   │   ├── terminalExtensions.ts
│       │   │   │   ├── terminalGroup.ts
│       │   │   │   ├── terminalGroupService.ts
│       │   │   │   ├── terminalIcon.ts
│       │   │   │   ├── terminalIconPicker.ts
│       │   │   │   ├── terminalIcons.ts
│       │   │   │   ├── terminalInstance.ts
│       │   │   │   ├── terminalInstanceService.ts
│       │   │   │   ├── terminalKeybindings.ts
│       │   │   │   ├── terminalMainContribution.ts
│       │   │   │   ├── terminalMenus.ts
│       │   │   │   ├── terminalProcessExtHostProxy.ts
│       │   │   │   ├── terminalProcessManager.ts
│       │   │   │   ├── terminalProfileQuickpick.ts
│       │   │   │   ├── terminalProfileResolverService.ts
│       │   │   │   ├── terminalProfileService.ts
│       │   │   │   ├── terminalResizeDebouncer.ts
│       │   │   │   ├── terminalService.ts
│       │   │   │   ├── terminalStatusList.ts
│       │   │   │   ├── terminalTabbedView.ts
│       │   │   │   ├── terminalTabsList.ts
│       │   │   │   ├── terminalTestHelpers.ts
│       │   │   │   ├── terminalTooltip.ts
│       │   │   │   ├── terminalUri.ts
│       │   │   │   ├── terminalView.ts
│       │   │   │   ├── widgets
│       │   │   │   │   ├── terminalHoverWidget.ts
│       │   │   │   │   ├── widgetManager.ts
│       │   │   │   │   └── widgets.ts
│       │   │   │   ├── xterm
│       │   │   │   │   ├── decorationAddon.ts
│       │   │   │   │   ├── decorationStyles.ts
│       │   │   │   │   ├── lineDataEventAddon.ts
│       │   │   │   │   ├── markNavigationAddon.ts
│       │   │   │   │   ├── xtermAddonImporter.ts
│       │   │   │   │   └── xtermTerminal.ts
│       │   │   │   └── xterm-private.d.ts
│       │   │   ├── common
│       │   │   │   ├── basePty.ts
│       │   │   │   ├── environmentVariable.contribution.ts
│       │   │   │   ├── environmentVariable.ts
│       │   │   │   ├── environmentVariableService.ts
│       │   │   │   ├── remote
│       │   │   │   │   ├── remoteTerminalChannel.ts
│       │   │   │   │   └── terminal.ts
│       │   │   │   ├── scripts
│       │   │   │   │   ├── cgmanifest.json
│       │   │   │   │   ├── shellIntegration-bash.sh
│       │   │   │   │   ├── shellIntegration-env.zsh
│       │   │   │   │   ├── shellIntegration-login.zsh
│       │   │   │   │   ├── shellIntegration-profile.zsh
│       │   │   │   │   ├── shellIntegration-rc.zsh
│       │   │   │   │   ├── shellIntegration.fish
│       │   │   │   │   └── shellIntegration.ps1
│       │   │   │   ├── terminal.ts
│       │   │   │   ├── terminalColorRegistry.ts
│       │   │   │   ├── terminalConfiguration.ts
│       │   │   │   ├── terminalContextKey.ts
│       │   │   │   ├── terminalEnvironment.ts
│       │   │   │   ├── terminalExtensionPoints.contribution.ts
│       │   │   │   ├── terminalExtensionPoints.ts
│       │   │   │   ├── terminalStorageKeys.ts
│       │   │   │   └── terminalStrings.ts
│       │   │   ├── electron-sandbox
│       │   │   │   ├── localPty.ts
│       │   │   │   ├── localTerminalBackend.ts
│       │   │   │   ├── terminal.contribution.ts
│       │   │   │   ├── terminalNativeContribution.ts
│       │   │   │   ├── terminalProfileResolverService.ts
│       │   │   │   └── terminalRemote.ts
│       │   │   ├── terminal.all.ts
│       │   │   ├── terminalContribChatExports.ts
│       │   │   ├── terminalContribExports.ts
│       │   ├── terminalContrib
│       │   │   ├── README.md
│       │   │   ├── accessibility
│       │   │   │   ├── browser
│       │   │   │   │   ├── bufferContentTracker.ts
│       │   │   │   │   ├── terminal.accessibility.contribution.ts
│       │   │   │   │   ├── terminalAccessibilityHelp.ts
│       │   │   │   │   ├── terminalAccessibleBufferProvider.ts
│       │   │   │   │   └── textAreaSyncAddon.ts
│       │   │   │   ├── common
│       │   │   │   │   ├── terminal.accessibility.ts
│       │   │   │   │   └── terminalAccessibilityConfiguration.ts
│       │   │   ├── autoReplies
│       │   │   │   ├── browser
│       │   │   │   │   └── terminal.autoReplies.contribution.ts
│       │   │   │   └── common
│       │   │   │       └── terminalAutoRepliesConfiguration.ts
│       │   │   ├── chat
│       │   │   │   ├── browser
│       │   │   │   │   ├── terminal.chat.contribution.ts
│       │   │   │   │   ├── terminal.initialHint.contribution.ts
│       │   │   │   │   ├── terminalChat.ts
│       │   │   │   │   ├── terminalChatAccessibilityHelp.ts
│       │   │   │   │   ├── terminalChatAccessibleView.ts
│       │   │   │   │   ├── terminalChatActions.ts
│       │   │   │   │   ├── terminalChatController.ts
│       │   │   │   │   ├── terminalChatEnabler.ts
│       │   │   │   │   └── terminalChatWidget.ts
│       │   │   │   ├── common
│       │   │   │   │   └── terminalInitialHintConfiguration.ts
│       │   │   ├── clipboard
│       │   │   │   ├── browser
│       │   │   │   │   ├── terminal.clipboard.contribution.ts
│       │   │   │   │   └── terminalClipboard.ts
│       │   │   ├── commandGuide
│       │   │   │   ├── browser
│       │   │   │   │   └── terminal.commandGuide.contribution.ts
│       │   │   │   └── common
│       │   │   │       └── terminalCommandGuideConfiguration.ts
│       │   │   ├── developer
│       │   │   │   ├── browser
│       │   │   │   │   └── terminal.developer.contribution.ts
│       │   │   │   └── common
│       │   │   │       └── terminal.developer.ts
│       │   │   ├── environmentChanges
│       │   │   │   └── browser
│       │   │   │       └── terminal.environmentChanges.contribution.ts
│       │   │   ├── find
│       │   │   │   ├── browser
│       │   │   │   │   ├── terminal.find.contribution.ts
│       │   │   │   │   └── terminalFindWidget.ts
│       │   │   │   └── common
│       │   │   │       └── terminal.find.ts
│       │   │   ├── history
│       │   │   │   ├── browser
│       │   │   │   │   ├── terminal.history.contribution.ts
│       │   │   │   │   └── terminalRunRecentQuickPick.ts
│       │   │   │   ├── common
│       │   │   │   │   ├── history.ts
│       │   │   │   │   └── terminal.history.ts
│       │   │   ├── links
│       │   │   │   ├── browser
│       │   │   │   │   ├── links.ts
│       │   │   │   │   ├── terminal.links.contribution.ts
│       │   │   │   │   ├── terminalExternalLinkDetector.ts
│       │   │   │   │   ├── terminalLink.ts
│       │   │   │   │   ├── terminalLinkDetectorAdapter.ts
│       │   │   │   │   ├── terminalLinkHelpers.ts
│       │   │   │   │   ├── terminalLinkManager.ts
│       │   │   │   │   ├── terminalLinkOpeners.ts
│       │   │   │   │   ├── terminalLinkParsing.ts
│       │   │   │   │   ├── terminalLinkProviderService.ts
│       │   │   │   │   ├── terminalLinkQuickpick.ts
│       │   │   │   │   ├── terminalLinkResolver.ts
│       │   │   │   │   ├── terminalLocalLinkDetector.ts
│       │   │   │   │   ├── terminalMultiLineLinkDetector.ts
│       │   │   │   │   ├── terminalUriLinkDetector.ts
│       │   │   │   │   └── terminalWordLinkDetector.ts
│       │   │   │   ├── common
│       │   │   │   │   └── terminal.links.ts
│       │   │   ├── quickAccess
│       │   │   │   └── browser
│       │   │   │       ├── terminal.quickAccess.contribution.ts
│       │   │   │       └── terminalQuickAccess.ts
│       │   │   ├── quickFix
│       │   │   │   ├── browser
│       │   │   │   │   ├── quickFix.ts
│       │   │   │   │   ├── quickFixAddon.ts
│       │   │   │   │   ├── terminal.quickFix.contribution.ts
│       │   │   │   │   ├── terminalQuickFixBuiltinActions.ts
│       │   │   │   │   └── terminalQuickFixService.ts
│       │   │   ├── stickyScroll
│       │   │   │   ├── browser
│       │   │   │   │   ├── terminal.stickyScroll.contribution.ts
│       │   │   │   │   ├── terminalStickyScrollColorRegistry.ts
│       │   │   │   │   ├── terminalStickyScrollContribution.ts
│       │   │   │   │   └── terminalStickyScrollOverlay.ts
│       │   │   │   └── common
│       │   │   │       └── terminalStickyScrollConfiguration.ts
│       │   │   ├── suggest
│       │   │   │   ├── browser
│       │   │   │   │   ├── pwshCompletionProviderAddon.ts
│       │   │   │   │   ├── terminal.suggest.contribution.ts
│       │   │   │   │   ├── terminalCompletionItem.ts
│       │   │   │   │   ├── terminalCompletionModel.ts
│       │   │   │   │   ├── terminalCompletionService.ts
│       │   │   │   │   ├── terminalSuggestAddon.ts
│       │   │   │   │   ├── terminalSuggestTelemetry.ts
│       │   │   │   │   └── terminalSymbolIcons.ts
│       │   │   │   ├── common
│       │   │   │   │   ├── terminal.suggest.ts
│       │   │   │   │   └── terminalSuggestConfiguration.ts
│       │   │   ├── typeAhead
│       │   │   │   ├── browser
│       │   │   │   │   ├── terminal.typeAhead.contribution.ts
│       │   │   │   │   └── terminalTypeAheadAddon.ts
│       │   │   │   ├── common
│       │   │   │   │   └── terminalTypeAheadConfiguration.ts
│       │   │   ├── wslRecommendation
│       │   │   │   └── browser
│       │   │   │       └── terminal.wslRecommendation.contribution.ts
│       │   │   └── zoom
│       │   │       ├── browser
│       │   │       │   └── terminal.zoom.contribution.ts
│       │   │       └── common
│       │   │           └── terminal.zoom.ts
│       │   ├── themes
│       │   │   ├── browser
│       │   │   │   ├── themes.contribution.ts
│       │   ├── timeline
│       │   │   ├── browser
│       │   │   │   ├── timeline.contribution.ts
│       │   │   │   └── timelinePane.ts
│       │   │   └── common
│       │   │       ├── timeline.ts
│       │   │       └── timelineService.ts
│       │   ├── typeHierarchy
│       │   │   ├── browser
│       │   │   │   ├── typeHierarchy.contribution.ts
│       │   │   │   ├── typeHierarchyPeek.ts
│       │   │   │   └── typeHierarchyTree.ts
│       │   │   └── common
│       │   │       └── typeHierarchy.ts
│       │   ├── update
│       │   │   ├── browser
│       │   │   │   ├── releaseNotesEditor.ts
│       │   │   │   ├── update.contribution.ts
│       │   │   │   └── update.ts
│       │   │   └── common
│       │   │       └── update.ts
│       │   ├── url
│       │   │   ├── browser
│       │   │   │   ├── externalUriResolver.ts
│       │   │   │   ├── trustedDomainService.ts
│       │   │   │   ├── trustedDomains.ts
│       │   │   │   ├── trustedDomainsFileSystemProvider.ts
│       │   │   │   ├── trustedDomainsValidator.ts
│       │   │   │   └── url.contribution.ts
│       │   │   ├── common
│       │   │   │   └── urlGlob.ts
│       │   ├── userDataProfile
│       │   │   ├── browser
│       │   │   │   ├── userDataProfile.contribution.ts
│       │   │   │   ├── userDataProfile.ts
│       │   │   │   ├── userDataProfileActions.ts
│       │   │   │   ├── userDataProfilesEditor.ts
│       │   │   │   └── userDataProfilesEditorModel.ts
│       │   │   └── common
│       │   │       └── userDataProfile.ts
│       │   ├── userDataSync
│       │   │   ├── browser
│       │   │   │   ├── userDataSync.contribution.ts
│       │   │   │   ├── userDataSync.ts
│       │   │   │   ├── userDataSyncConflictsView.ts
│       │   │   │   ├── userDataSyncTrigger.ts
│       │   │   │   └── userDataSyncViews.ts
│       │   │   └── electron-sandbox
│       │   │       └── userDataSync.contribution.ts
│       │   ├── webview
│       │   │   ├── browser
│       │   │   │   ├── overlayWebview.ts
│       │   │   │   ├── pre
│       │   │   │   │   ├── fake.html
│       │   │   │   │   ├── index-no-csp.html
│       │   │   │   │   ├── index.html
│       │   │   │   │   └── service-worker.js
│       │   │   │   ├── resourceLoading.ts
│       │   │   │   ├── themeing.ts
│       │   │   │   ├── webview.contribution.ts
│       │   │   │   ├── webview.ts
│       │   │   │   ├── webview.web.contribution.ts
│       │   │   │   ├── webviewElement.ts
│       │   │   │   ├── webviewFindWidget.ts
│       │   │   │   ├── webviewMessages.d.ts
│       │   │   │   ├── webviewService.ts
│       │   │   │   └── webviewWindowDragMonitor.ts
│       │   │   ├── common
│       │   │   │   └── webview.ts
│       │   │   └── electron-sandbox
│       │   │       ├── webview.contribution.ts
│       │   │       ├── webviewCommands.ts
│       │   │       ├── webviewElement.ts
│       │   │       ├── webviewService.ts
│       │   │       └── windowIgnoreMenuShortcutsManager.ts
│       │   ├── webviewPanel
│       │   │   └── browser
│       │   │       ├── webviewCommands.ts
│       │   │       ├── webviewEditor.ts
│       │   │       ├── webviewEditorInput.ts
│       │   │       ├── webviewEditorInputSerializer.ts
│       │   │       ├── webviewIconManager.ts
│       │   │       ├── webviewPanel.contribution.ts
│       │   │       └── webviewWorkbenchService.ts
│       │   ├── webviewView
│       │   │   └── browser
│       │   │       ├── webviewView.contribution.ts
│       │   │       ├── webviewViewPane.ts
│       │   │       └── webviewViewService.ts
│       │   ├── welcomeBanner
│       │   │   └── browser
│       │   │       └── welcomeBanner.contribution.ts
│       │   ├── welcomeDialog
│       │   │   └── browser
│       │   │       ├── welcomeDialog.contribution.ts
│       │   │       └── welcomeWidget.ts
│       │   ├── welcomeGettingStarted
│       │   │   ├── browser
│       │   │   │   ├── gettingStarted.contribution.ts
│       │   │   │   ├── gettingStarted.ts
│       │   │   │   ├── gettingStartedAccessibleView.ts
│       │   │   │   ├── gettingStartedColors.ts
│       │   │   │   ├── gettingStartedDetailsRenderer.ts
│       │   │   │   ├── gettingStartedExtensionPoint.ts
│       │   │   │   ├── gettingStartedIcons.ts
│       │   │   │   ├── gettingStartedInput.ts
│       │   │   │   ├── gettingStartedList.ts
│       │   │   │   ├── gettingStartedService.ts
│       │   │   │   └── startupPage.ts
│       │   │   ├── common
│       │   │   │   ├── gettingStartedContent.ts
│       │   │   │   └── media
│       │   │   │       ├── notebookProfile.ts
│       │   │   │       ├── theme_picker.ts
│       │   ├── welcomeViews
│       │   │   └── common
│       │   │       ├── newFile.contribution.ts
│       │   │       ├── viewsWelcome.contribution.ts
│       │   │       ├── viewsWelcomeContribution.ts
│       │   │       └── viewsWelcomeExtensionPoint.ts
│       │   ├── welcomeWalkthrough
│       │   │   ├── browser
│       │   │   │   ├── editor
│       │   │   │   │   ├── editorWalkThrough.ts
│       │   │   │   │   └── vs_code_editor_walkthrough.ts
│       │   │   │   ├── walkThrough.contribution.ts
│       │   │   │   ├── walkThroughActions.ts
│       │   │   │   ├── walkThroughInput.ts
│       │   │   │   └── walkThroughPart.ts
│       │   │   └── common
│       │   │       ├── walkThroughContentProvider.ts
│       │   │       └── walkThroughUtils.ts
│       │   ├── workspace
│       │   │   ├── browser
│       │   │   │   ├── workspace.contribution.ts
│       │   │   │   └── workspaceTrustEditor.ts
│       │   │   └── common
│       │   │       └── workspace.ts
│       │   └── workspaces
│       │       └── browser
│       │           └── workspaces.contribution.ts
│       ├── electron-sandbox
│       │   ├── actions
│       │   │   ├── developerActions.ts
│       │   │   ├── installActions.ts
│       │   │   └── windowActions.ts
│       │   ├── desktop.contribution.ts
│       │   ├── desktop.main.ts
│       │   ├── parts
│       │   │   ├── dialogs
│       │   │   │   ├── dialog.contribution.ts
│       │   │   │   └── dialogHandler.ts
│       │   │   └── titlebar
│       │   │       ├── menubarControl.ts
│       │   │       └── titlebarPart.ts
│       │   └── window.ts
│       ├── services
│       │   ├── accessibility
│       │   │   ├── common
│       │   │   │   └── accessibleViewInformationService.ts
│       │   │   └── electron-sandbox
│       │   │       └── accessibilityService.ts
│       │   ├── actions
│       │   │   └── common
│       │   │       └── menusExtensionPoint.ts
│       │   ├── activity
│       │   │   ├── browser
│       │   │   │   └── activityService.ts
│       │   │   └── common
│       │   │       └── activity.ts
│       │   ├── aiEmbeddingVector
│       │   │   └── common
│       │   │       └── aiEmbeddingVectorService.ts
│       │   ├── aiRelatedInformation
│       │   │   ├── common
│       │   │   │   ├── aiRelatedInformation.ts
│       │   │   │   └── aiRelatedInformationService.ts
│       │   ├── assignment
│       │   │   ├── common
│       │   │   │   └── assignmentService.ts
│       │   ├── authentication
│       │   │   ├── browser
│       │   │   │   ├── authenticationAccessService.ts
│       │   │   │   ├── authenticationExtensionsService.ts
│       │   │   │   ├── authenticationService.ts
│       │   │   │   └── authenticationUsageService.ts
│       │   │   ├── common
│       │   │   │   └── authentication.ts
│       │   ├── auxiliaryWindow
│       │   │   ├── browser
│       │   │   │   └── auxiliaryWindowService.ts
│       │   │   └── electron-sandbox
│       │   │       └── auxiliaryWindowService.ts
│       │   ├── banner
│       │   │   └── browser
│       │   │       └── bannerService.ts
│       │   ├── checksum
│       │   │   └── electron-sandbox
│       │   │       └── checksumService.ts
│       │   ├── clipboard
│       │   │   ├── browser
│       │   │   │   └── clipboardService.ts
│       │   │   └── electron-sandbox
│       │   │       └── clipboardService.ts
│       │   ├── commands
│       │   │   ├── common
│       │   │   │   └── commandService.ts
│       │   ├── configuration
│       │   │   ├── browser
│       │   │   │   ├── configuration.ts
│       │   │   │   └── configurationService.ts
│       │   │   ├── common
│       │   │   │   ├── configuration.ts
│       │   │   │   ├── configurationCache.ts
│       │   │   │   ├── configurationEditing.ts
│       │   │   │   ├── configurationModels.ts
│       │   │   │   ├── jsonEditing.ts
│       │   │   │   └── jsonEditingService.ts
│       │   ├── configurationResolver
│       │   │   ├── browser
│       │   │   │   ├── baseConfigurationResolverService.ts
│       │   │   │   └── configurationResolverService.ts
│       │   │   ├── common
│       │   │   │   ├── configurationResolver.ts
│       │   │   │   ├── configurationResolverSchema.ts
│       │   │   │   ├── configurationResolverUtils.ts
│       │   │   │   └── variableResolver.ts
│       │   │   ├── electron-sandbox
│       │   │   │   └── configurationResolverService.ts
│       │   ├── contextmenu
│       │   │   └── electron-sandbox
│       │   │       └── contextmenuService.ts
│       │   ├── decorations
│       │   │   ├── browser
│       │   │   │   └── decorationsService.ts
│       │   │   ├── common
│       │   │   │   └── decorations.ts
│       │   ├── dialogs
│       │   │   ├── browser
│       │   │   │   ├── abstractFileDialogService.ts
│       │   │   │   ├── fileDialogService.ts
│       │   │   │   └── simpleFileDialog.ts
│       │   │   ├── common
│       │   │   │   └── dialogService.ts
│       │   │   ├── electron-sandbox
│       │   │   │   └── fileDialogService.ts
│       │   ├── driver
│       │   │   ├── browser
│       │   │   │   └── driver.ts
│       │   │   ├── common
│       │   │   │   └── driver.ts
│       │   │   └── electron-sandbox
│       │   │       └── driver.ts
│       │   ├── editor
│       │   │   ├── browser
│       │   │   │   ├── codeEditorService.ts
│       │   │   │   ├── editorPaneService.ts
│       │   │   │   ├── editorResolverService.ts
│       │   │   │   └── editorService.ts
│       │   │   ├── common
│       │   │   │   ├── customEditorLabelService.ts
│       │   │   │   ├── editorGroupColumn.ts
│       │   │   │   ├── editorGroupFinder.ts
│       │   │   │   ├── editorGroupsService.ts
│       │   │   │   ├── editorPaneService.ts
│       │   │   │   ├── editorResolverService.ts
│       │   │   │   └── editorService.ts
│       │   ├── encryption
│       │   │   ├── browser
│       │   │   │   └── encryptionService.ts
│       │   │   └── electron-sandbox
│       │   │       └── encryptionService.ts
│       │   ├── environment
│       │   │   ├── browser
│       │   │   │   └── environmentService.ts
│       │   │   ├── common
│       │   │   │   └── environmentService.ts
│       │   │   └── electron-sandbox
│       │   │       ├── environmentService.ts
│       │   │       └── shellEnvironmentService.ts
│       │   ├── extensionManagement
│       │   │   ├── browser
│       │   │   │   ├── builtinExtensionsScannerService.ts
│       │   │   │   ├── extensionBisect.ts
│       │   │   │   ├── extensionEnablementService.ts
│       │   │   │   ├── extensionsProfileScannerService.ts
│       │   │   │   └── webExtensionsScannerService.ts
│       │   │   ├── common
│       │   │   │   ├── extensionFeatures.ts
│       │   │   │   ├── extensionFeaturesManagemetService.ts
│       │   │   │   ├── extensionGalleryService.ts
│       │   │   │   ├── extensionManagement.ts
│       │   │   │   ├── extensionManagementChannelClient.ts
│       │   │   │   ├── extensionManagementServerService.ts
│       │   │   │   ├── extensionManagementService.ts
│       │   │   │   ├── extensionsIcons.ts
│       │   │   │   ├── remoteExtensionManagementService.ts
│       │   │   │   └── webExtensionManagementService.ts
│       │   │   ├── electron-sandbox
│       │   │   │   ├── extensionManagementServerService.ts
│       │   │   │   ├── extensionManagementService.ts
│       │   │   │   ├── extensionTipsService.ts
│       │   │   │   ├── nativeExtensionManagementService.ts
│       │   │   │   └── remoteExtensionManagementService.ts
│       │   ├── extensionRecommendations
│       │   │   └── common
│       │   │       ├── extensionIgnoredRecommendationsService.ts
│       │   │       ├── extensionRecommendations.ts
│       │   │       └── workspaceExtensionsConfig.ts
│       │   ├── extensions
│       │   │   ├── browser
│       │   │   │   ├── extensionService.ts
│       │   │   │   ├── extensionUrlHandler.ts
│       │   │   │   ├── extensionsScannerService.ts
│       │   │   │   ├── webWorkerExtensionHost.ts
│       │   │   │   └── webWorkerFileSystemProvider.ts
│       │   │   ├── common
│       │   │   │   ├── abstractExtensionService.ts
│       │   │   │   ├── extHostCustomers.ts
│       │   │   │   ├── extensionDescriptionRegistry.ts
│       │   │   │   ├── extensionDevOptions.ts
│       │   │   │   ├── extensionHostEnv.ts
│       │   │   │   ├── extensionHostKind.ts
│       │   │   │   ├── extensionHostManager.ts
│       │   │   │   ├── extensionHostManagers.ts
│       │   │   │   ├── extensionHostProtocol.ts
│       │   │   │   ├── extensionHostProxy.ts
│       │   │   │   ├── extensionManifestPropertiesService.ts
│       │   │   │   ├── extensionRunningLocation.ts
│       │   │   │   ├── extensionRunningLocationTracker.ts
│       │   │   │   ├── extensionStorageMigration.ts
│       │   │   │   ├── extensions.ts
│       │   │   │   ├── extensionsProposedApi.ts
│       │   │   │   ├── extensionsRegistry.ts
│       │   │   │   ├── extensionsUtil.ts
│       │   │   │   ├── lazyCreateExtensionHostManager.ts
│       │   │   │   ├── lazyPromise.ts
│       │   │   │   ├── polyfillNestedWorker.protocol.ts
│       │   │   │   ├── proxyIdentifier.ts
│       │   │   │   ├── remoteConsoleUtil.ts
│       │   │   │   ├── remoteExtensionHost.ts
│       │   │   │   ├── rpcProtocol.ts
│       │   │   │   └── workspaceContains.ts
│       │   │   ├── electron-sandbox
│       │   │   │   ├── cachedExtensionScanner.ts
│       │   │   │   ├── extensionHostProfiler.ts
│       │   │   │   ├── extensionHostStarter.ts
│       │   │   │   ├── extensionsScannerService.ts
│       │   │   │   ├── localProcessExtensionHost.ts
│       │   │   │   └── nativeExtensionService.ts
│       │   │   └── worker
│       │   │       ├── polyfillNestedWorker.ts
│       │   │       └── webWorkerExtensionHostIframe.html
│       │   ├── files
│       │   │   ├── browser
│       │   │   │   └── elevatedFileService.ts
│       │   │   ├── common
│       │   │   │   └── elevatedFileService.ts
│       │   │   └── electron-sandbox
│       │   │       ├── diskFileSystemProvider.ts
│       │   │       ├── elevatedFileService.ts
│       │   │       └── watcherClient.ts
│       │   ├── filesConfiguration
│       │   │   └── common
│       │   │       └── filesConfigurationService.ts
│       │   ├── history
│       │   │   ├── browser
│       │   │   │   └── historyService.ts
│       │   │   ├── common
│       │   │   │   └── history.ts
│       │   ├── host
│       │   │   ├── browser
│       │   │   │   ├── browserHostService.ts
│       │   │   │   └── host.ts
│       │   │   └── electron-sandbox
│       │   │       └── nativeHostService.ts
│       │   ├── integrity
│       │   │   ├── browser
│       │   │   │   └── integrityService.ts
│       │   │   ├── common
│       │   │   │   └── integrity.ts
│       │   │   └── electron-sandbox
│       │   │       └── integrityService.ts
│       │   ├── keybinding
│       │   │   ├── browser
│       │   │   │   ├── keybindingService.ts
│       │   │   │   ├── keyboardLayoutService.ts
│       │   │   │   ├── keyboardLayouts
│       │   │   │   │   ├── _.contribution.ts
│       │   │   │   │   ├── cz.win.ts
│       │   │   │   │   ├── de-swiss.win.ts
│       │   │   │   │   ├── de.darwin.ts
│       │   │   │   │   ├── de.linux.ts
│       │   │   │   │   ├── de.win.ts
│       │   │   │   │   ├── dk.win.ts
│       │   │   │   │   ├── dvorak.darwin.ts
│       │   │   │   │   ├── en-belgian.win.ts
│       │   │   │   │   ├── en-ext.darwin.ts
│       │   │   │   │   ├── en-in.win.ts
│       │   │   │   │   ├── en-intl.darwin.ts
│       │   │   │   │   ├── en-intl.win.ts
│       │   │   │   │   ├── en-uk.darwin.ts
│       │   │   │   │   ├── en-uk.win.ts
│       │   │   │   │   ├── en.darwin.ts
│       │   │   │   │   ├── en.linux.ts
│       │   │   │   │   ├── en.win.ts
│       │   │   │   │   ├── es-latin.win.ts
│       │   │   │   │   ├── es.darwin.ts
│       │   │   │   │   ├── es.linux.ts
│       │   │   │   │   ├── es.win.ts
│       │   │   │   │   ├── fr.darwin.ts
│       │   │   │   │   ├── fr.linux.ts
│       │   │   │   │   ├── fr.win.ts
│       │   │   │   │   ├── hu.win.ts
│       │   │   │   │   ├── it.darwin.ts
│       │   │   │   │   ├── it.win.ts
│       │   │   │   │   ├── jp-roman.darwin.ts
│       │   │   │   │   ├── jp.darwin.ts
│       │   │   │   │   ├── ko.darwin.ts
│       │   │   │   │   ├── layout.contribution.darwin.ts
│       │   │   │   │   ├── layout.contribution.linux.ts
│       │   │   │   │   ├── layout.contribution.win.ts
│       │   │   │   │   ├── no.win.ts
│       │   │   │   │   ├── pl.darwin.ts
│       │   │   │   │   ├── pl.win.ts
│       │   │   │   │   ├── pt-br.win.ts
│       │   │   │   │   ├── pt.darwin.ts
│       │   │   │   │   ├── pt.win.ts
│       │   │   │   │   ├── ru.darwin.ts
│       │   │   │   │   ├── ru.linux.ts
│       │   │   │   │   ├── ru.win.ts
│       │   │   │   │   ├── sv.darwin.ts
│       │   │   │   │   ├── sv.win.ts
│       │   │   │   │   ├── thai.win.ts
│       │   │   │   │   ├── tr.win.ts
│       │   │   │   │   └── zh-hans.darwin.ts
│       │   │   │   ├── navigatorKeyboard.ts
│       │   │   │   └── unboundCommands.ts
│       │   │   ├── common
│       │   │   │   ├── fallbackKeyboardMapper.ts
│       │   │   │   ├── keybindingEditing.ts
│       │   │   │   ├── keybindingIO.ts
│       │   │   │   ├── keymapInfo.ts
│       │   │   │   ├── macLinuxKeyboardMapper.ts
│       │   │   │   └── windowsKeyboardMapper.ts
│       │   │   ├── electron-sandbox
│       │   │   │   ├── nativeKeyboardLayout.ts
│       │   │   │   └── nativeKeyboardLayoutService.ts
│       │   ├── label
│       │   │   ├── common
│       │   │   │   └── labelService.ts
│       │   ├── language
│       │   │   └── common
│       │   │       └── languageService.ts
│       │   ├── languageDetection
│       │   │   ├── browser
│       │   │   │   ├── languageDetectionSimpleWorker.ts
│       │   │   │   ├── languageDetectionSimpleWorkerMain.ts
│       │   │   │   ├── languageDetectionWorker.protocol.ts
│       │   │   │   └── languageDetectionWorkerServiceImpl.ts
│       │   │   └── common
│       │   │       └── languageDetectionWorkerService.ts
│       │   ├── languageStatus
│       │   │   └── common
│       │   │       └── languageStatusService.ts
│       │   ├── layout
│       │   │   └── browser
│       │   │       └── layoutService.ts
│       │   ├── lifecycle
│       │   │   ├── browser
│       │   │   │   └── lifecycleService.ts
│       │   │   ├── common
│       │   │   │   ├── lifecycle.ts
│       │   │   │   └── lifecycleService.ts
│       │   │   ├── electron-sandbox
│       │   │   │   └── lifecycleService.ts
│       │   ├── localization
│       │   │   ├── browser
│       │   │   │   └── localeService.ts
│       │   │   ├── common
│       │   │   │   └── locale.ts
│       │   │   └── electron-sandbox
│       │   │       ├── languagePackService.ts
│       │   │       └── localeService.ts
│       │   ├── log
│       │   │   ├── common
│       │   │   │   └── logConstants.ts
│       │   │   └── electron-sandbox
│       │   │       └── logService.ts
│       │   ├── menubar
│       │   │   └── electron-sandbox
│       │   │       └── menubarService.ts
│       │   ├── model
│       │   │   └── common
│       │   │       └── modelService.ts
│       │   ├── notebook
│       │   │   └── common
│       │   │       └── notebookDocumentService.ts
│       │   ├── notification
│       │   │   └── common
│       │   │       └── notificationService.ts
│       │   ├── outline
│       │   │   └── browser
│       │   │       ├── outline.ts
│       │   │       └── outlineService.ts
│       │   ├── output
│       │   │   └── common
│       │   │       ├── delayedLogChannel.ts
│       │   │       └── output.ts
│       │   ├── panecomposite
│       │   │   └── browser
│       │   │       └── panecomposite.ts
│       │   ├── path
│       │   │   ├── browser
│       │   │   │   └── pathService.ts
│       │   │   ├── common
│       │   │   │   └── pathService.ts
│       │   │   └── electron-sandbox
│       │   │       └── pathService.ts
│       │   ├── preferences
│       │   │   ├── browser
│       │   │   │   ├── keybindingsEditorInput.ts
│       │   │   │   ├── keybindingsEditorModel.ts
│       │   │   │   └── preferencesService.ts
│       │   │   ├── common
│       │   │   │   ├── preferences.ts
│       │   │   │   ├── preferencesEditorInput.ts
│       │   │   │   ├── preferencesModels.ts
│       │   │   │   └── preferencesValidation.ts
│       │   ├── progress
│       │   │   ├── browser
│       │   │   │   ├── progressIndicator.ts
│       │   │   │   └── progressService.ts
│       │   ├── quickinput
│       │   │   └── browser
│       │   │       └── quickInputService.ts
│       │   ├── remote
│       │   │   ├── browser
│       │   │   │   ├── browserRemoteResourceHandler.ts
│       │   │   │   └── remoteAgentService.ts
│       │   │   ├── common
│       │   │   │   ├── abstractRemoteAgentService.ts
│       │   │   │   ├── remoteAgentEnvironmentChannel.ts
│       │   │   │   ├── remoteAgentService.ts
│       │   │   │   ├── remoteExplorerService.ts
│       │   │   │   ├── remoteExtensionsScanner.ts
│       │   │   │   ├── remoteFileSystemProviderClient.ts
│       │   │   │   └── tunnelModel.ts
│       │   │   └── electron-sandbox
│       │   │       └── remoteAgentService.ts
│       │   ├── request
│       │   │   ├── browser
│       │   │   │   └── requestService.ts
│       │   │   └── electron-sandbox
│       │   │       └── requestService.ts
│       │   ├── search
│       │   │   ├── browser
│       │   │   │   └── searchService.ts
│       │   │   ├── common
│       │   │   │   ├── fileSearchManager.ts
│       │   │   │   ├── folderQuerySearchTree.ts
│       │   │   │   ├── getFileResults.ts
│       │   │   │   ├── ignoreFile.ts
│       │   │   │   ├── localFileSearchWorkerTypes.ts
│       │   │   │   ├── queryBuilder.ts
│       │   │   │   ├── replace.ts
│       │   │   │   ├── search.ts
│       │   │   │   ├── searchExtConversionTypes.ts
│       │   │   │   ├── searchExtTypes.ts
│       │   │   │   ├── searchExtTypesInternal.ts
│       │   │   │   ├── searchHelpers.ts
│       │   │   │   ├── searchService.ts
│       │   │   │   └── textSearchManager.ts
│       │   │   ├── electron-sandbox
│       │   │   │   └── searchService.ts
│       │   │   ├── node
│       │   │   │   ├── fileSearch.ts
│       │   │   │   ├── rawSearchService.ts
│       │   │   │   ├── ripgrepFileSearch.ts
│       │   │   │   ├── ripgrepSearchProvider.ts
│       │   │   │   ├── ripgrepSearchUtils.ts
│       │   │   │   ├── ripgrepTextSearchEngine.ts
│       │   │   │   ├── textSearchAdapter.ts
│       │   │   │   └── textSearchManager.ts
│       │   │   └── worker
│       │   │       ├── localFileSearch.ts
│       │   │       └── localFileSearchMain.ts
│       │   ├── secrets
│       │   │   ├── browser
│       │   │   │   └── secretStorageService.ts
│       │   │   └── electron-sandbox
│       │   │       └── secretStorageService.ts
│       │   ├── sharedProcess
│       │   │   └── electron-sandbox
│       │   │       └── sharedProcessService.ts
│       │   ├── statusbar
│       │   │   └── browser
│       │   │       └── statusbar.ts
│       │   ├── storage
│       │   │   ├── browser
│       │   │   │   └── storageService.ts
│       │   │   ├── electron-sandbox
│       │   │   │   └── storageService.ts
│       │   ├── suggest
│       │   │   └── browser
│       │   │       ├── simpleCompletionItem.ts
│       │   │       ├── simpleCompletionModel.ts
│       │   │       ├── simpleSuggestWidget.ts
│       │   │       ├── simpleSuggestWidgetDetails.ts
│       │   │       └── simpleSuggestWidgetRenderer.ts
│       │   ├── telemetry
│       │   │   ├── browser
│       │   │   │   ├── telemetryService.ts
│       │   │   │   └── workbenchCommonProperties.ts
│       │   │   ├── common
│       │   │   │   └── workbenchCommonProperties.ts
│       │   │   ├── electron-sandbox
│       │   │   │   └── telemetryService.ts
│       │   ├── terminal
│       │   │   └── common
│       │   │       └── embedderTerminalService.ts
│       │   ├── textMate
│       │   │   ├── browser
│       │   │   │   ├── arrayOperation.ts
│       │   │   │   ├── backgroundTokenization
│       │   │   │   │   ├── textMateWorkerTokenizerController.ts
│       │   │   │   │   ├── threadedBackgroundTokenizerFactory.ts
│       │   │   │   │   └── worker
│       │   │   │   │       ├── textMateTokenizationWorker.worker.ts
│       │   │   │   │       ├── textMateTokenizationWorker.workerMain.ts
│       │   │   │   │       ├── textMateWorkerHost.ts
│       │   │   │   │       └── textMateWorkerTokenizer.ts
│       │   │   │   ├── textMateTokenizationFeature.contribution.ts
│       │   │   │   ├── textMateTokenizationFeature.ts
│       │   │   │   ├── textMateTokenizationFeatureImpl.ts
│       │   │   │   └── tokenizationSupport
│       │   │   │       ├── textMateTokenizationSupport.ts
│       │   │   │       └── tokenizationSupportWithLineLimit.ts
│       │   │   ├── common
│       │   │   │   ├── TMGrammarFactory.ts
│       │   │   │   ├── TMGrammars.ts
│       │   │   │   ├── TMHelper.ts
│       │   │   │   ├── TMScopeRegistry.ts
│       │   │   │   └── cgmanifest.json
│       │   ├── textfile
│       │   │   ├── browser
│       │   │   │   ├── browserTextFileService.ts
│       │   │   │   └── textFileService.ts
│       │   │   ├── common
│       │   │   │   ├── encoding.ts
│       │   │   │   ├── textEditorService.ts
│       │   │   │   ├── textFileEditorModel.ts
│       │   │   │   ├── textFileEditorModelManager.ts
│       │   │   │   ├── textFileSaveParticipant.ts
│       │   │   │   └── textfiles.ts
│       │   │   ├── electron-sandbox
│       │   │   │   └── nativeTextFileService.ts
│       │   ├── textmodelResolver
│       │   │   ├── common
│       │   │   │   └── textModelResolverService.ts
│       │   ├── textresourceProperties
│       │   │   └── common
│       │   │       └── textResourcePropertiesService.ts
│       │   ├── themes
│       │   │   ├── browser
│       │   │   │   ├── browserHostColorSchemeService.ts
│       │   │   │   ├── fileIconThemeData.ts
│       │   │   │   ├── productIconThemeData.ts
│       │   │   │   └── workbenchThemeService.ts
│       │   │   ├── common
│       │   │   │   ├── colorExtensionPoint.ts
│       │   │   │   ├── colorThemeData.ts
│       │   │   │   ├── colorThemeSchema.ts
│       │   │   │   ├── fileIconThemeSchema.ts
│       │   │   │   ├── hostColorSchemeService.ts
│       │   │   │   ├── iconExtensionPoint.ts
│       │   │   │   ├── plistParser.ts
│       │   │   │   ├── productIconThemeSchema.ts
│       │   │   │   ├── textMateScopeMatcher.ts
│       │   │   │   ├── themeCompatibility.ts
│       │   │   │   ├── themeConfiguration.ts
│       │   │   │   ├── themeExtensionPoints.ts
│       │   │   │   ├── tokenClassificationExtensionPoint.ts
│       │   │   │   └── workbenchThemeService.ts
│       │   │   ├── electron-sandbox
│       │   │   │   ├── nativeHostColorSchemeService.ts
│       │   │   │   └── themes.contribution.ts
│       │   ├── timer
│       │   │   ├── browser
│       │   │   │   └── timerService.ts
│       │   │   └── electron-sandbox
│       │   │       └── timerService.ts
│       │   ├── title
│       │   │   ├── browser
│       │   │   │   └── titleService.ts
│       │   │   └── electron-sandbox
│       │   │       └── titleService.ts
│       │   ├── treeSitter
│       │   │   └── browser
│       │   │       ├── treeSitterCodeEditors.ts
│       │   │       ├── treeSitterTokenizationFeature.contribution.ts
│       │   │       └── treeSitterTokenizationFeature.ts
│       │   ├── tunnel
│       │   │   ├── browser
│       │   │   │   └── tunnelService.ts
│       │   │   └── electron-sandbox
│       │   │       └── tunnelService.ts
│       │   ├── untitled
│       │   │   ├── common
│       │   │   │   ├── untitledTextEditorHandler.ts
│       │   │   │   ├── untitledTextEditorInput.ts
│       │   │   │   ├── untitledTextEditorModel.ts
│       │   │   │   └── untitledTextEditorService.ts
│       │   ├── update
│       │   │   ├── browser
│       │   │   │   └── updateService.ts
│       │   │   └── electron-sandbox
│       │   │       └── updateService.ts
│       │   ├── url
│       │   │   ├── browser
│       │   │   │   └── urlService.ts
│       │   │   └── electron-sandbox
│       │   │       └── urlService.ts
│       │   ├── userActivity
│       │   │   ├── browser
│       │   │   │   ├── domActivityTracker.ts
│       │   │   │   └── userActivityBrowser.ts
│       │   │   ├── common
│       │   │   │   ├── userActivityRegistry.ts
│       │   │   │   └── userActivityService.ts
│       │   ├── userData
│       │   │   └── browser
│       │   │       └── userDataInit.ts
│       │   ├── userDataProfile
│       │   │   ├── browser
│       │   │   │   ├── extensionsResource.ts
│       │   │   │   ├── globalStateResource.ts
│       │   │   │   ├── iconSelectBox.ts
│       │   │   │   ├── keybindingsResource.ts
│       │   │   │   ├── settingsResource.ts
│       │   │   │   ├── snippetsResource.ts
│       │   │   │   ├── tasksResource.ts
│       │   │   │   ├── userDataProfileImportExportService.ts
│       │   │   │   ├── userDataProfileInit.ts
│       │   │   │   ├── userDataProfileManagement.ts
│       │   │   │   └── userDataProfileStorageService.ts
│       │   │   └── common
│       │   │       ├── remoteUserDataProfiles.ts
│       │   │       ├── userDataProfile.ts
│       │   │       ├── userDataProfileIcons.ts
│       │   │       └── userDataProfileService.ts
│       │   ├── userDataSync
│       │   │   ├── browser
│       │   │   │   ├── userDataSyncEnablementService.ts
│       │   │   │   ├── userDataSyncInit.ts
│       │   │   │   ├── userDataSyncWorkbenchService.ts
│       │   │   │   └── webUserDataSyncEnablementService.ts
│       │   │   ├── common
│       │   │   │   ├── userDataSync.ts
│       │   │   │   └── userDataSyncUtil.ts
│       │   │   └── electron-sandbox
│       │   │       ├── userDataAutoSyncService.ts
│       │   │       └── userDataSyncService.ts
│       │   ├── utilityProcess
│       │   │   └── electron-sandbox
│       │   │       └── utilityProcessWorkerWorkbenchService.ts
│       │   ├── views
│       │   │   ├── browser
│       │   │   │   ├── viewDescriptorService.ts
│       │   │   │   └── viewsService.ts
│       │   │   ├── common
│       │   │   │   ├── viewContainerModel.ts
│       │   │   │   └── viewsService.ts
│       │   ├── workingCopy
│       │   │   ├── browser
│       │   │   │   ├── workingCopyBackupService.ts
│       │   │   │   ├── workingCopyBackupTracker.ts
│       │   │   │   └── workingCopyHistoryService.ts
│       │   │   ├── common
│       │   │   │   ├── abstractFileWorkingCopyManager.ts
│       │   │   │   ├── fileWorkingCopy.ts
│       │   │   │   ├── fileWorkingCopyManager.ts
│       │   │   │   ├── resourceWorkingCopy.ts
│       │   │   │   ├── storedFileWorkingCopy.ts
│       │   │   │   ├── storedFileWorkingCopyManager.ts
│       │   │   │   ├── storedFileWorkingCopySaveParticipant.ts
│       │   │   │   ├── untitledFileWorkingCopy.ts
│       │   │   │   ├── untitledFileWorkingCopyManager.ts
│       │   │   │   ├── workingCopy.ts
│       │   │   │   ├── workingCopyBackup.ts
│       │   │   │   ├── workingCopyBackupService.ts
│       │   │   │   ├── workingCopyBackupTracker.ts
│       │   │   │   ├── workingCopyEditorService.ts
│       │   │   │   ├── workingCopyFileOperationParticipant.ts
│       │   │   │   ├── workingCopyFileService.ts
│       │   │   │   ├── workingCopyHistory.ts
│       │   │   │   ├── workingCopyHistoryService.ts
│       │   │   │   ├── workingCopyHistoryTracker.ts
│       │   │   │   └── workingCopyService.ts
│       │   │   ├── electron-sandbox
│       │   │   │   ├── workingCopyBackupService.ts
│       │   │   │   ├── workingCopyBackupTracker.ts
│       │   │   │   └── workingCopyHistoryService.ts
│       │   └── workspaces
│       │       ├── browser
│       │       │   ├── abstractWorkspaceEditingService.ts
│       │       │   ├── workspaceEditingService.ts
│       │       │   ├── workspaceTrustEditorInput.ts
│       │       │   ├── workspaces.ts
│       │       │   └── workspacesService.ts
│       │       ├── common
│       │       │   ├── canonicalUriService.ts
│       │       │   ├── editSessionIdentityService.ts
│       │       │   ├── workspaceEditing.ts
│       │       │   ├── workspaceIdentityService.ts
│       │       │   ├── workspaceTrust.ts
│       │       │   └── workspaceUtils.ts
│       │       ├── electron-sandbox
│       │       │   ├── workspaceEditingService.ts
│       │       │   └── workspacesService.ts
│       ├── workbench.common.main.ts
│       ├── workbench.desktop.main.ts
│       ├── workbench.web.main.internal.ts
│       └── workbench.web.main.ts

```
