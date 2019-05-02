const { runtime, genPrimeArr } = require('project-euler-helpers')

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

// refactored solution using genPrimeArr 

const find10001 = () => {
  let primeArr = genPrimeArr(10001)
  return primeArr[primeArr.length - 1]
}

runtime(findPrime, 10001)
//runtime: 1.534s
runtime(find10001)
// runtime: 0.156s
