const interval = require('../src/interval')

async function main(){
  let start = new Date()
  console.log('开始')
  let i = 0
  const p = interval(
    function(){
      console.log(i++)
      if(i == 3)
        p.stop()
    },
    5, 1000
  )
  await p
  console.log('结束', (new Date() - start)/1000)
}

main()