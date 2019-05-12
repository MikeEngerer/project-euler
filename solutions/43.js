const { runtime } = require('project-euler-helpers')

// used for max permutations calc
const factorial = (num) => {
  if (num === 1) return 1
  return num * (factorial(num - 1))
}

// create arr of num's subsets to check
const mapSubset = (num) => {
  let subset = [], str
  num = num.toString()
  for (let i = 1; i <= 7; i++) {
    str = `${num[i]}${num[i + 1]}${num[i + 2]}`
    subset.push(Number(str))
  }
  return subset
}

// check each subset against divisor, returns bool
const checkSubset = (arr) => {
  let primes = [2, 3, 5, 7, 11, 13, 17]
  let bools = arr.map((e, i) => e % primes[i] === 0).filter(e => !e)
  return bools.length > 0 ? false : true
}

const pandigitalPermutations = (digits) => {
  let count = 1, currentHigh, currentLow, reversed, temp, copy, sum = 0, 
      max = (digits.length - 1) * factorial(digits.length - 1)
  // follows documented algorithm for finding all permutations:
  // https://en.wikipedia.org/wiki/Permutation#Generation_in_lexicographic_order
  while (count <= max) {
    for (let i = 0; i < digits.length - 1; i++) {
      if (digits[i] < digits[i + 1]) {
        currentLow = i
      } else {
        continue
      }
      for (let j = 1; j < digits.length; j++) {
        if (digits[currentLow] < digits[j]) {
          currentHigh = j
        }
      }
    }
    // swap high and low, reverse everthing from low + 1 onward
    temp = digits[currentLow]
    digits[currentLow] = digits[currentHigh]
    digits[currentHigh] = temp
    reversed = digits.splice(currentLow + 1).reverse()
    reversed.forEach(e => digits.push(e))
    copy = digits.slice().join('')
    // add passing permutations to sum
    if (checkSubset(mapSubset(copy))) {
      sum += Number(copy)
    }
    count++
  }
  return sum
}


runtime(pandigitalPermutations, [1, 0, 2, 3, 4, 5, 6, 7, 8, 9])
// runtime: 4.957s

// refactor: reduce permutation test cases