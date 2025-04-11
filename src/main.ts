/////// <reference types="node" />
import * as path from 'path';
import * as fs from 'original-fs';
import * as os from 'os';
import { fileURLToPath } from 'url';
import { app, protocol, crashReporter, Menu, contentTracing } from 'electron';
import { configurePortable } from './bootstrap-node.js';
import { product } from './bootstrap-meta.js';

// 新版node当前目录的获取方式
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Enable portable support
const portable = configurePortable(product);
console.log('xxxxxx')