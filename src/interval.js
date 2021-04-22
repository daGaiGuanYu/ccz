const getPromise = require('./base')

function raw(job, times, delay, ...args) {
  const p = getPromise()
  p.tryJob = function(){
    try {
      job(...args)
    } catch(e) {
      clearInterval(p.intervalID)
      p.reject(e)
    }
  }
  if(times < 1) // 必须写在 tryJob 定义之后，否则 tryJob 在 times == 1 的情况下，没有值
    return p.resolve()
  
  p.intervalID = setInterval(function(){
    p.tryJob()
    if(--times < 1) {
      clearInterval(p.intervalID)
      p.resolve()
    }
  }, delay)

  return p
}

function interval(){

}

interval.raw = raw
// interval.continueOnError
// interval.continueOnErrorRaw

module.exports = interval