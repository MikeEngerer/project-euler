const { runtime } = require('project-euler-helpers')

const findNthPermutation = (n, digits) => {
  let count = 1, currentHigh, currentLow, reversed, temp
  // follows documented algorithm for finding all permutations
  // https://en.wikipedia.org/wiki/Permutation#Generation_in_lexicographic_order
  while (count < n) {
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
    count++
  }
  return digits.join('')
}

runtime(findNthPermutation, 1000000, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
// runtime: 0.287s


