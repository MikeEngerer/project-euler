const { runtime } = require('../runtime')

const isPalindrome = (str) => str === str.slice().split('').reverse().join('')

const convertNumToBin = (num) => (num).toString(2)

const convertNumToStr = (num) => (num).toString()

const findPalindromes = (max) => {
  let nums = [], currentNum = 0, strNum, binNum
  while (currentNum <= max) {
    binNum = convertNumToBin(currentNum)
    strNum = convertNumToStr(currentNum)
    if (isPalindrome(binNum) && isPalindrome(strNum)) nums.push(currentNum)
    currentNum++
  }
  return nums.reduce((a, e) => a + e, 0)
}

runtime(findPalindromes, 1000000)
