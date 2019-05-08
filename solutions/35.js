const { runtime, isPrime, genPrimeArrUnderMax } = require('project-euler-helpers')

const rotateNum = (num) => {
  let arr = num.toString().split(''), temp = arr[arr.length - 1]
  // move last digit to arr[0], remove from original location [len - 1]
  arr.unshift(temp)
  arr.pop()
  return arr.join('')
}

const isCircular = (num) => {
  // More elegant sol to find num digits than converting to string - found on SO
  const len = Math.log(num) * Math.LOG10E + 1 | 0;
  // nums given are always prime, 1 digit === circular prime
  if (len === 1) {
    return true
  }
  // rotate num and check if still prime
  for (let i = 0; i < len - 1; i++) {
    // separate to handle 0s in number parsing
    num = rotateNum(num)
    temp = Number(num)
    if (!isPrime(temp)) {
      return false
    }
  }
  return true
}

const findCircularPrimes = (max) => {
  // starting at i = 3 is convenient, count starts at 1 to include 2 (prime and circular) 
  let count = 1
  for (let i = 3; i < max; i += 2) {
    if (isPrime(i) && isCircular(i)) {
      count++
    }
  }
  return count
}

runtime(findCircularPrimes, 1000000)
// runtime: 0.336s
