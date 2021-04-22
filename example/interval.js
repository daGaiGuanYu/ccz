const interval = require('ccz/interval')
const printTime = require('./util')

async function main(){
  printTime()
  await interval(
    function(){
      printTime()
    },
    3, 1000
  )
  printTime()
}

main()