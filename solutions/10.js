const { runtime } = require('../modules/runtime')
const { isPrime } = require('../modules/primes')

const findPrimeSum = () => {
  let sum = 2;
  let current = 3
  while (current < 2000000) {
    if (isPrime(current)) {
      sum += current
    }
    current += 2
  }
  return sum
}

runtime(findPrimeSum)