const interval = require('ccz/interval')
const printTime = require('./util')

async function main(){
  let i = 0
  printTime()
  const p = interval(
    function(){
      printTime()
      if(i++ == 3)
        p.stop()
    },
    5, 1000
  )
  await p
  printTime()
}

main()