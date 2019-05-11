const { runtime, genAlphaObj } = require('project-euler-helpers')
const fs = require('fs')
const path = require('path')

// for bound calc, 1 less var needed this way
Array.prototype.last = function () {
  return this[this.length - 1]
}

// import and format data into arr
let data = fs.readFileSync(path.join(__dirname, '../project_euler/words.txt'), 'utf-8').split(',').map(e => e.split('"')[1])

// check if triangle num exists === given num
const isTriangleNum = (num, bound) => {
  for (let i = 1; i < bound; i++) {
    if (((i * (i - 1)) / 2) === num) {
      return true
    }
  }
  return false
}

const findTriangleNums = (data) => {
  // map word arr (data) => char sum, calc bound
  let alphaScores = genAlphaObj('A', 'Z'), 
      charSums = data.map(e => e.split('').map(el => alphaScores[el]).reduce((a, ele) => a + ele, 0)),
      bound = charSums.slice().sort((a, b) => a - b).last()
  // return length of arr (count) of passing words
  return charSums.filter(e => isTriangleNum(e, bound)).length
}

runtime(findTriangleNums, data)
// runtime: 0.005s