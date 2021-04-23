const intervalP = require('./interval')

module.exports = function(duration, times, job, ...args){
  const interval = duration / (times - 1)
  return intervalP(job, times, interval, ...args)
}