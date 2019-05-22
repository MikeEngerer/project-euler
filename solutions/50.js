const { runtime, isPrime } = require('project-euler-helpers')

// only trick to this one is knowing that the sequence need not start at 2
// in this approach we start at 2 and add primes to sum until the next prime puts us over max
// at this point, start subtracting primes starting from 2 until sum is prime
const primeSumToPrime = (max) => {
  let i = 2, j = 2, sum = 0
  while (true) {
    // skip i if not prime
    if (!isPrime(i)) {
      i++
      continue
    }
    if (sum + i > max) { // addition of next prime puts us over max
      if (isPrime(sum)) {
        return sum // found
      } else {
        while (!isPrime(sum)) { // start subtracting primes starting from 2
          if (!isPrime(j)) { // skip j if not prime
            j++ 
            continue
          }
          sum -= j
          j++
        }
        return sum // found
      }
    }
    sum += i
    i++
  }
}

runtime(primeSumToPrime, 1000000)
// runtime: 0.003s