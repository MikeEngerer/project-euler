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

/* This refactor reduced the runtime from 525s to 0.001s, and was inspired by this article:
* https://www.mathblog.dk/project-euler-69-find-the-value-of-n-%E2%89%A4-1000000-for-which-n%CF%86n-is-a-maximum/
* 
* Since the totient equation (t(n) = n(1 - 1 / p1)...(1 - 1 / pk)) relies on distinct prime factors, we
* simply need to multiply the series of primes starting from 2 until the product > max, and return that product
*/

const minTotient = (max) => {
  let i = 2, total = 1  
  while (true) {
    if (total * i > max) {
      return total
    }
    if (isPrime(i)) {
      total *= i
    }
    i++
  }
}

// new solution
runtime(minTotient, 1000000)
// runtime: 0.001s

// WAY too slow, need to refactor
// runtime(minimizeTotientUnderMax, 1000001)
// runtime: 525s