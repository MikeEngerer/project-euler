const { runtime } = require('project-euler-helpers')

Number.prototype.toBin = function () {
  return this.toString(2)
}

const isPalindrome = (num) => {
  let str = num.toString().split(''), 
      revStr = str.slice().reverse().join(''), 
      bin = num.toBin().split(''), 
      revBin = bin.slice().reverse().join('')
  return str.join('') === revStr && bin.join('') === revBin
}

const palindromeSum = (max) => {
  let sum = 0
  for (let i = 1; i < max; i++) {
    if (isPalindrome(i)) {
      sum += i
    }
  }
  return sum
}

runtime(palindromeSum, 1000000)
// runtime: 1.887s