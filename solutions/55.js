const { runtime, isPalindrome } = require('project-euler-helpers')

// returns bool
const isLychrel = (num) => {
  let rev
  // if not palindrome by iteration 50, considered Lychrel
  for (let i = 0; i < 50; i++) {
    // reverse num, add to self
    rev = Number(num.toString().split('').slice().reverse().join(''))
    num += rev
    if (isPalindrome(num)) {
      return false
    }
  }
  return true
}

// find count of Lychrel nums under given max
const findLychrelNums = (max) => {
  let count = 0
  for (let i = 1; i < max; i++) {
    if (isLychrel(i)) {
      count++
    }
  }
  return count
}

runtime(findLychrelNums, 10000)
// runtime: 0.107s