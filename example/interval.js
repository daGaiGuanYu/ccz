const interval = require('ccz/interval')
const printTime = require('./util')

async function main(){
  printTime()
  await interval(1000, 3, printTime)
  printTime()
}

main()