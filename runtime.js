const runtime = (func, args) => {
  let currentTime = Date.now()
  console.log('func returned:', func(args))
  console.log('seconds elapsed:', (Date.now() - currentTime) / 1000)
}

module.exports = {
  runtime
}