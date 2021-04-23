const ccz = require('./index')

module.exports = function(duration, times, job, conf){
  const { before, after, beforeInterval, afterInterval } = conf || {}
  const interval = duration / (times - 1)
  return ccz([{
    before: beforeInterval && interval || before || 0,
    after: afterInterval && interval || after || 0,
    times, job, interval
  }])
}