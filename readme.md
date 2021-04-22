# ccz
丑丑仔。  
如果你需要使用 setTimeout、setInterval，那可以试试丑丑仔。

# 安装
```bash
npm install ccz
```

# 例子
##### 程序“暂停”一秒
``` js
const timeoutP = require('ccz/timeout')

async function main(){
  console.log('开始')
  await timeoutP(1000)
  console.log('一秒之后')
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

##### 先“暂停”两秒，执行一次；再每隔一秒执行一次，再等半秒，执行；再每隔两秒执行一次