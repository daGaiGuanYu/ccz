const defaultStart = new Date()

module.exports = function(start = defaultStart){
  console.log((new Date() - start) / 1000)
}