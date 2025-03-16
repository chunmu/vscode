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

##### 垃圾回收 GC回收时的回调 FinalizationRegistry

```typescript
let obj = {name:"小余",age:20}

//当被GC(垃圾回收)的时候就会调用这里面的回调函数
const finalRegistry = new FinalizationRegistry(()=>{
  console.log("某一个对象被回收了 ");
})

//调用register(寄存器)进行注册任何我们想要清理回调的对象
finalRegistry.register(obj)//此时不会生效
//置为空，让obj在下轮中被垃圾回收掉
obj = null
//因为GC不是马上就回收的，它会在CPU空闲的时候进行回收，所以在一定间隔之后就会进行回收处理，然后触发我们的回调

```


