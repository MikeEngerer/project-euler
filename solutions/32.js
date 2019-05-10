const { runtime, isPandigital } = require('project-euler-helpers')

// upper/lower bounds determined experimentally
// returns sum of unique products
const findPanNums = () => {
  let nums = [], combined
  for (let i = 1; i < 50; i++) {
    // cannot contain '0'
    if (i % 10 === 0) {
      continue
    }
    for (let j = 100; j < 2000; j++) {
      if (i % 10 === 0) {
        continue
      }
      // combine nums
      combined = i.toString() + j.toString() + (i * j).toString()
      if (isPandigital(combined)) {
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
// runtime: 0.157s