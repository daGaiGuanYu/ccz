module.exports = function(){
  let resolve, reject
  let result = new Promise((res, rej) => {
    resolve = res
    reject = rej
  })
  result.resolve = resolve
  result.reject = reject
  return result
}