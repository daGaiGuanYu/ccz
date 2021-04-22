const printTime = require('./util')
const ccz = require('../src/index')
const CCZItem = ccz.ItemDesc

async function main(){
  printTime()
  await ccz([
    new CCZItem({
      before: 1000, // 先停 1 秒
      times: 2, // 两次
      job(){
        printTime()
      },
      interval: 1000, // 中间间隔 1 秒
      after: 0 // 最后，暂停 0 秒
    }),
    new CCZItem({
      before: 2000, // 先停 1 秒
      times: 3, // 三次
      job(){
        printTime()
      },
      interval: 500, // 中间间隔 0.5 秒
      after: 1000 // 最后，暂停 1 秒
    })
  ])
  printTime()
}

main()