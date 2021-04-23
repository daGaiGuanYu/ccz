const withoutIntervalP = require('ccz/without-interval')
const printTime = require('./util')

async function main(){
  printTime()
  await withoutIntervalP(1000, 24, printTime)
  printTime()
}

main()