const timeout = require('ccz/timeout')
const printTime = require('./util')

async function main(){
  printTime()
  await timeout(1000)
  printTime()
}

main()