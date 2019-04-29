const runtime = function (func, args) {
  let argArr = Array.prototype.slice.call(arguments, 1), initialTime = Date.now()
  console.log('func returned:', func(...argArr))
  console.log('runtime:', `${(Date.now() - initialTime) / 1000}s`)
  return
}


module.exports = {
  runtime
}