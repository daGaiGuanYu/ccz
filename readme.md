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
const { timeout } = require('ccz/src/timeout')

async function main(){
  console.log('开始')
  await timeout(1000)
  console.log('一秒之后')
}

main()
```