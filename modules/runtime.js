const runtime = function (func, args) {
  let argArr = Array.prototype.slice.call(arguments, 1)
  let currentTime = Date.now()
  console.log('func returned', func(...argArr))
  console.log('seconds elapsed:', (Date.now() - currentTime) / 1000)
  return
}


module.exports = {
  runtime
}