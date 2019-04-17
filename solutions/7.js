const {runtime} = require('../runtime.js')


const findPrime = (num) => {
  let current = 0
  let found = false
  let prime = 2
  while (!found) {
    if (current === num) {
      found = true
    }
    for (let i = 3; i < prime; i += 2) {
      if (i === 3 && prime % 2 === 0) {
        break
      }
      if (prime % i === 0) {
        break
      }
    }
    current++
    prime++
  }
  return prime
}

runtime(findPrime, 10001)