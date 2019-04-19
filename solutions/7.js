const { runtime } = require('../runtime.js')

const findPrime = (num) => {
  let primeArr = [1, 2, 3, 5, 7, 11, 13]
  let len = primeArr.length
  let found = false
  let i;
  while (num !== len) {
    len = primeArr.length
    latestPrime = primeArr[len - 1]
    i = latestPrime + 1
    while (!found) {
      if (isPrime(i)) {
        primeArr.push(i)
        found = true
      }
      i++
    }
    found = false
  }
  return primeArr[primeArr.length - 1]
}

const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

runtime(findPrime, 10001)