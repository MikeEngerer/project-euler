const { runtime, isPrime } = require('project-euler-helpers')

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
// runtime: 0.669s
