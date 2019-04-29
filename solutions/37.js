const { genPrimeArr, isPrime } = require('../modules/primes')
const { runtime } = require('../modules/runtime')

// badly needs refactoring

// 60000 primes - this is the slow part (6s)
let primes = genPrimeArr(60000).slice(4)

// to weed out a bunch (first or last digit cannot be 1)
const firstCheck = (num) => {
  let strNum = num.toString()
  if (strNum[0] == 1 || strNum[strNum.length - 1] == 1) {
    return false
  }
  return true
}

// convert to str, truncate one digit at a time and check if still prime
const truncateFromRight = (num) => {
  if (!firstCheck(num)) return false
  let strNum = num.toString()
  while (strNum.length > 1) {
    strNum = strNum.split('')
    strNum.pop()
    strNum = strNum.join('')
    if (!isPrime(Number(strNum))) return false
  }
  return true
}

// convert to str, truncate one digit at a time and check if still prime
const truncateFromLeft = (num) => {
  if (!firstCheck(num)) return false
  let strNum = num.toString()
  while (strNum.length > 1) {
    strNum = strNum.split('').slice(1).join('')
    if (!isPrime(Number(strNum))) return false
  }
  return true
}

// use above funcs to reduce arr of primes to sum of truncatable primes
const loopData = (primes) => primes.reduce((a, e) => truncateFromLeft(e) && truncateFromRight(e) ? a + e : a, 0)

runtime(loopData, primes)
