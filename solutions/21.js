const { runtime } = require('../modules/runtime')
const { findFactors } = require('../modules/factors')

// construct obj of factor sums for all numbers range(1, max) inclusive
const storeFactorSums = (max) => {
  let i = 1, factorSums = {}
  while (i <= max) {
    // sum of factors of i less i -> amicable(i) does not include self
    factorSums[i] = findFactors(i).reduce((a, e) => a + e, 0) - i
    i++
  }
  return factorSums
}

const findAmicablePairsSum = (max) => {
  let sum = 0, factorSums = storeFactorSums(max), i = 1, current, compliment
  for (i; i <= max; i++) {
    // current is sum of factors of i
    current = factorSums[i]
    // sum of factors larger than range(1, max) means i cannot be amicable
    if (current > max) continue
    // edge case: sum of factors of i === i
    if (i === current) continue
    // compliment is sum of factors of sum of factors of i (sumfactors(sumfactors(i)))
    compliment = factorSums[current]
    // if sumfactors(sumfactors(i)) == i, i is an amicable num
    if (compliment === i) {
      sum += i
    }
  }
  return sum
}

runtime(findAmicablePairsSum, 9999)
// runtime: 0.013s
