const printTime = require('./util')
const { timeoutP, intervalP } = require('ccz')

async function main(){
  printTime()
  await timeoutP(1000)
  await intervalP(printTime, 2, 1000)
  
  await timeoutP(2000)
  await intervalP(printTime, 3, 500)
  await timeoutP(1000)
  printTime()
}

main()