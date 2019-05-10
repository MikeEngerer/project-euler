const { runtime } = require('project-euler-helpers')
// checks sorted str of nums === 123456789
const isPandigital = (multiplicand, multiplier, product) => {
  let str = multiplicand.toString() + multiplier.toString() + product.toString(), nums = '123456789'
  str = str.split('').sort().join('')
  return str === nums
}

// upper/lower bounds determined experimentally
// returns sum of unique products
const findPanNums = () => {
  let nums = []
  for (let i = 1; i < 50; i++) {
    // cannot contain '0'
    if (i % 10 === 0) continue
    for (let j = 100; j < 2000; j++) {
      if (i % 10 === 0) continue
      if (isPandigital(i, j, i * j)) {
        // check unique
        if (!nums.includes(i * j)) {
          nums.push(i * j)
        }
      }
    }
  }
  // sum
  return nums.reduce((a, e) => e + a, 0)
}

runtime(findPanNums)
// runtime: 0.108s