const { runtime, isPrime } = require('project-euler-helpers')

// return arr of distinct prime factors
const findDistinctPrimeFactors = (num) => {
  if (isPrime(num)) return [num]
  for (let i = Math.floor(num / 2); i >= 1; i--) {
    // find highest factor other than self
    if (num % i === 0) {
      // factor the found factor and its compliment
      return [...findDistinctPrimeFactors(i), ...findDistinctPrimeFactors(num / i)].unique()
    }
  }
}

// return totient(num) using arr of distinct prime factors in formula t(n) = n(1 - 1 / p)
const totient = (num, arr) => num * arr.reduce((a, e) => a * (1 - (1 / e)), 1)

// returns num under max that has highest num / totient(num)
const minimizeTotientUnderMax = (max) => {
  let highestQuotient = 0, primeFactors, quotient, highestNum
  for (let i = 2; i < max; i++) {
    // prime / totient(prime) = prime / prime - 1... not worth checking
    if (isPrime(i)) {
      continue
    } else {
      // gen arr of distinct prime factors
      primeFactors = findDistinctPrimeFactors(i)
      // calc quotient = num / totient(num)
      quotient = i / totient(i, primeFactors)
    }
    // check if quotient is higher than highest
    if (quotient > highestQuotient) {
      highestQuotient = quotient
      highestNum = i
    }
  }
  return highestNum
}

// WAY too slow, need to refactor
runtime(minimizeTotientUnderMax, 1000001)
// runtime: 525s