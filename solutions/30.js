const { runtime } = require('project-euler-helpers')

const fifthPowerSums = (max) => {
  let arr, sum, total = 0
  for (let i = 2; i < max; i++) {
    arr = i.toString().split('')
    sum = arr.reduce((a, e) => a += Number(e) ** 5, 0)
    // sum of digits ** 5 === num
    if (sum === i) {
      total += i
    }
  }
  return total
} 

// upper bound determined through trial/error... not sure how to do this mathematically
runtime(fifthPowerSums, 200000)
// runtime: 0.066s