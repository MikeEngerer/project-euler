const { runtime } = require('../modules/runtime')

const isPalindrome = (num) => {
  let strNum = num.toString()
  let reverseNum = strNum.split('').reverse().join('')
  return strNum === reverseNum
}

const numProductPalidrome = () => {
  let prod;
  let largestPalindrome = 0
  for (let i = 999; i > 99; i--) {
    for (let j = 999; j > 99; j--) {
      prod = i * j
      if (isPalindrome(prod) && prod > largestPalindrome) {
        largestPalindrome = prod
      }
      prod = null;
    }
  }
  return largestPalindrome
}

runtime(numProductPalidrome)