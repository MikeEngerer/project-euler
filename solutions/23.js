const { runtime, findFactorSum } = require('project-euler-helpers')

const findAbundantNums = (max) => {
  let factorSums = [], currentSum
  for (let i = 1; i <= max; i++) {
    currentSum = findFactorSum(i) - i
    if (currentSum > i && currentSum < max) {
      factorSums.push(i)
    }
  }
  return factorSums
}

const findAbundantSums = (max) => {
  let sums = [], currentSum, nums = findAbundantNums(max)
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      currentSum = nums[i] + nums[j]
      if (currentSum > max) {
        break
      }
      sums.push(currentSum)
    }
  }
  return sums
}

const findNonAbunSum = (max) => {
  let sum = 0, sums = findAbundantSums(max)
  for (let k = 0; k < max; k++) {
    if (!sums.includes(k)) {
      sum += k
    }
  }
  return sum
}

runtime(findNonAbunSum, 28123)
// runtime: 34.967s
// my least efficient solution to a problem yet, will come back to this one

