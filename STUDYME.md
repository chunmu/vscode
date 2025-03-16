# 一点一滴学习

##### 迭代器用法

```typescript
export class SetWithKey<T> implements Set<T> {
	private _map = new Map<any, T>();

	*values(): IterableIterator<T> {
		for (const entry of this._map.values()) {
			yield entry;
		}
	}

	// 迭代器用法学习
	[Symbol.iterator](): IterableIterator<T> {
		return this.values();
	}

}

// 例1
const array1 = ["a", "b", "c"];
const iterator1 = array1[Symbol.iterator]();

for (const value of iterator1) {
  console.log(value);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

// 例2
*[Symbol.iterator] () {}

var NumbersFromOne = {
  [Symbol.iterator]: function* () {
    for (let i = 1;; ++i) yield i;
  }
};

```

##### electron app CommandLine

```typescript
// CommandLine命令行是给内核Chromium设定启动参数的
app.commandLine.appendSwitch(argvKey, argvValue);

```
