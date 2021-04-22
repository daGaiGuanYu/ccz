const interval = require('../src/interval')

async function main(){
  let start = new Date()
  console.log('开始')
  let i = 0
  await interval(
    function(){
      console.log(i++)
    },
    5, 1000
  )
  console.log('结束', (new Date() - start)/1000)
}

main()