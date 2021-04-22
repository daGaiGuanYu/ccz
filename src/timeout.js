const base = require('./base')

module.exports = function(duration){
  let result = base()
  result.timeoutID = setTimeout(result.resolve, duration)
  return result
}