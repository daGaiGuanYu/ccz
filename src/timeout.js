const base = require('./base')

module.exports = function(duration){
  let result = base()
  result.timeId = setTimeout(result.resolve, duration)
  return result
}