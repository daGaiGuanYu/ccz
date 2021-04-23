# ccz
setTimeout、setInterval 是两个常用的异步函数。  
但作为异步函数，他们不支持 ```Promise```或者 ```async/await```写法。  
代码写起来：
```js
setTimeout(() => {
  console.log('执行一些操作')
  setTimeout(() => {
    console.log('执行另一些操作')
    // setTimeout ...
  }, 3000)
}, 1000)
```
不好看！

丑丑仔的目的，就是使你的 setTimeout 和 setInterval 好看些。  

# 使用
### 安装
```bash
npm install ccz
```

### 例子
##### 程序“暂停”一秒
``` js
const timeoutP = require('ccz/timeout')

async function main(){
  console.log('开始')
  await timeoutP(1000)
  console.log('一秒之后')
  await timeoutP(2000)
  console.log('又过了两秒')
}

main()
```

##### 每秒一次，共三次
``` js
const intervalP = require('ccz/interval')

async function main(){
  console.log('开始')
  await intervalP(
    function(){
      console.log('哈哈')
    },
    3, 1000
  )
  console.log('结束')
}

main()
```

##### 先停一秒，再每秒执行一次，执行两次；再停两秒，每半秒执行一次，执行三次，再等一秒！
``` js
const { timeoutP, intervalP } = require('ccz')

async function main(){
  console.log('开始')
  await timeoutP(1000) // 等一秒
  await intervalP(
    () => console.log('每秒一次，共两次'),
    2, 1000)
  
  await timeoutP(2000) // 等两秒
  await intervalP(
    () => console.log('每半秒一次，共三次'),
    3, 500)
  await timeoutP(1000) // 等一秒
  
  console.log('结束')
}

main()
```

##### 一秒执行 24 次
``` js
const withoutIntervalP = require('ccz/without-interval')

async function main(){
  console.log('开始')
  await withoutIntervalP(1000, 24, () => {
    console.log('换帧')
  })
  console.log('结束')
}

main()
```

# 放弃版权声明
本仓库的所有代码可以免费复制、改造、使用、转载。署名也不需要。