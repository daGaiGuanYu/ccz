const timeoutP = require('./timeout')
const intervalP = require('./interval')

class ItemDesc {
  constructor({ before, times, job, interval, after }){
    this.before = before || 0
    this.times = times || 1
    this.job = job
    this.interval = interval || 1000
    this.after = after || 0
  }
}

async function ccz(list){
  if(! list instanceof Array)
    throw Error('list 必须是一个数组')
  for(let item of list)
    if(! item instanceof ItemDesc)
      throw Error('list 的元素必须是 ItemDesc 对象')

  for(let { before, times, job, interval, after } of list){
    await timeoutP(before)
    await intervalP(job, times, interval)
    await timeoutP(after)
  }
}

ccz.ItemDesc = ItemDesc
module.exports = ccz