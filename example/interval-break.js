const interval = require('ccz/interval')
const printTime = require('./util')

async function main(){
  let i = 0
  printTime()
  const p = interval(1000, 50, () => {
    printTime()
    if(i++ == 2)
      p.stop()
  })
  await p
  printTime()
}

main()