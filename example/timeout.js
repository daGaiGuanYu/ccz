const timeout = require('../src/timeout')

async function main(){
  console.log('开始')
  await timeout(1000)
  console.log('一秒之后')
}

main()