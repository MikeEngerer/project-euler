const { runtime } = require('../modules/runtime')
const { findFactorCount } = require('../modules/factors')

const findTriangleNumFactors = (numFactors) => {
  let found = false
  let currentNum = 0
  let currentSum = 0
  while (!found) {
    currentNum++
    currentSum += currentNum
    if (findFactorCount(currentSum) >= numFactors) {
      found = true
    }
  }
  return currentSum
}

//// same func as above using recursion rather than iteration (exceeds call stack)
// const findTriangleNumFactors = (lastNum, lastSum) => {
//   let currentNum = lastNum + 1
//   let currentSum = currentNum + lastSum
//   let factors = findFactorCount(currentSum)
//   console.log(currentNum, currentSum, factors)
//   if (factors >= 500) {
//     return currentSum
//   } 
//   findTriangleNumFactors(currentNum, currentSum)
// }

runtime(findTriangleNumFactors, 500)
