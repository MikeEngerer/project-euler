const { runtime, findFactors } = require('project-euler-helpers')

const factorSum = (num) => findFactors(num).reduce((a, e) => a + e, 0) - num

// returns lowest val in set of highest count amicable chain
const longestAmicableChain = (max) => {
  let current, currentSet, currentCount, i = 10, highestCount = 0, highestVal, amicable
  while (i < max) { // initial num loop
    current = i
    currentSet = [current]
    currentCount = 0
    amicable = false
    while (true) { // factor sum loop
      current = factorSum(current)
      if (current === i) { // current === initial -forms amicable chain
        amicable = true
        break
      }
      if (current > max || currentSet.includes(current)) { // over max or repeated val -not amicable
        break
      }
      currentSet.push(current)
      currentCount++
    }
    if (amicable && currentCount > highestCount) {
      highestCount = currentCount
      highestVal = currentSet.sort((a, b) => a - b)[0]
    }
    i++
  }
  return highestVal
}

runtime(longestAmicableChain, 1000000)
// runtime: 12.21s

