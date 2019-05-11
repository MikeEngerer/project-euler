const { runtime, isPandigital, isPrime } = require('project-euler-helpers') 

// check if pandigital first, then if prime (2x faster than reverse order)
const findPandigitalPrimes = (max) => {
  let numDigits, highest = 0
  for (let i = 11; i < max; i += 2) {
    numDigits = i.toString().length
    if (isPandigital(i, numDigits)) {
      if (isPrime(i)) {
        highest = i
      }
    }
  }
  return highest
}

// upper bound is intuitively 10000000, sped up slightly by lowering to 8000000 experimentally
runtime(findPandigitalPrimes, 8000000)
// runtime: 3.157s

// refactor: find pandigital permutations under 10000000, filter with isPrime, return highest