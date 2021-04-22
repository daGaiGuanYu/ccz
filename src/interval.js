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

  p.stop = function(){
    clearInterval(p.intervalID)
    p.resolve()
  }

  if(times < 1) { // 必须写在 tryJob 定义之后，否则 tryJob 在 times == 1 的情况下，没有值
    p.resolve()
    return p
  }
  
  p.intervalID = setInterval(function(){
    p.tryJob()
    if(--times < 1)
      p.stop()
  }, delay)

  return p
}

function interval(job, times, delay, ...args){
  times = times - 1
  const p = raw(job, times, delay, ...args)
  if(times >= 0)
    p.tryJob()
  return p
}

interval.raw = raw
// interval.continueOnError
// interval.continueOnErrorRaw

module.exports = interval