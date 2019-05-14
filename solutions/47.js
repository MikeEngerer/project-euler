const { runtime, isPrime } = require('project-euler-helpers')

// filters any arr to contain only unique values
Array.prototype.unique = function () {
  return this.sort((a, b) => a - b).filter((e, i) => i === this.length - 1 ? true : this[i + 1] !== e) 
}

// return first of four consecutive numbers, each having four distinct prime factors
const fourConsecutive = () => {
  let i = 2
  while (true) {
    // check num, num + 1, ... has 4 distinct prime factors
    if (findDistinctPrimeFactors(i).length === 4) {
      if (findDistinctPrimeFactors(i + 1).length === 4) {
        if (findDistinctPrimeFactors(i + 2).length === 4) {
          if (findDistinctPrimeFactors(i + 3).length === 4) {
            return i
          }
        }
      }
    }
    // if any test fails, increment num and repeat
    i++
  }
}

// return arr of distinct prime factors
const findDistinctPrimeFactors = (num) => {
  if (isPrime(num)) return [num]
  for (let i = Math.floor(num / 2); i >= 1; i--) {
    // find highest factor other than self
    if (num % i === 0) {
      // factor the found factor and its compliment
      return [...findDistinctPrimeFactors(i), ...findDistinctPrimeFactors(num / i)].unique()
    }
  }
}

// needs refactoring... too slow
runtime(fourConsecutive)
// runtime: 10.702s