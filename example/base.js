const base = require('../src/base')

const p = base()
p.then(function(data){
  console.log(data)
})

p.resolve(2)
console.log('haha')