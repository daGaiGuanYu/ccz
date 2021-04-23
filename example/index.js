const printTime = require('./util')
const { timeoutP, intervalP } = require('ccz')

async function main(){
  printTime()
  await timeoutP(1000)
  await intervalP(1000, 2, printTime)
  
  await timeoutP(2000)
  await intervalP(500, 3, printTime)
  await timeoutP(1000)
  printTime()
}

main()