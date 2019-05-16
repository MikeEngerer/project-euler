const { runtime, Array, isPrime } = require('project-euler-helpers')
// algorithm follows that each corner num += last corner + current spiral dimensions - 1 
// eg 1x1, 3x3, 5x5, 7x7 -> +0, +2, +4, +6 -> [[1], [3, 5, 7, 9], [13, 17, 21, 25], [31, 37, 43, 49]]
const primeRatio = () => {
  let last = 1, total = 1, primes = 0, i = 2
  // spirals
  while (true) {
    // corners
    for (let j = 1; j <= 4; j++) {
      last += i
      // total count and # of prime counted
      total++
      if (isPrime(last)) {
        primes++
      }
    }
    // when primes / total < 0.1 (10%), current dim (i + 1) returned
    if (primes / total < 0.1) {
      return i + 1
    }
    i += 2
  }
}

runtime(primeRatio)
// runtime: 0.2s