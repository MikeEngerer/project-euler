const { runtime } = require('../runtime')

const isPalindrome = (str) => str === str.slice().split('').reverse().join('')

const convertNumToBin = (num) => (num).toString(2)

const convertNumToStr = (num) => (num).toString()

const findPalindromes = (max) => {
  let nums = [], count = 0, strNum, binNum
  while (count <= max) {
    binNum = convertNumToBin(count)
    strNum = convertNumToStr(count)
    if (isPalindrome(binNum) && isPalindrome(strNum)) nums.push(count)
    count++
  }
  return nums.reduce((a, e) => a + e, 0)
}

runtime(findPalindromes, 1000000)
