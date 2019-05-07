const { runtime } = require('project-euler-helpers')

const genDigitArr = (max) => {
  let arr = [], current = 1, str
  while (arr.length <= max) {
    str = current.toString().split('')
    str.forEach(e => arr.push(Number(e)))
    current++
  }
  return arr
}

const calcAnswer = (max) => {
  let arr = genDigitArr(max)
  return arr[0] * arr[9] * arr[99] * arr[999] * arr[9999] * arr[99999] * arr[999999]  
}


runtime(calcAnswer, 1000000)
// runtime: 0.083s