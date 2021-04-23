const byDurationTimesP = require('ccz/by-duration-times')
const printTime = require('./util')

async function main(){
  printTime()
  await byDurationTimesP(1000, 24, printTime)
  printTime()
}

main()