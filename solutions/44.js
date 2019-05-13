const { runtime } = require('project-euler-helpers')
 
// formula to calc pents
const pentagonal = (num) => (num * ((num * 3) - 1)) / 2

// gen objs of pents for lookup/reverse lookup
const genPentagonalObj = (max) => {
  let nums = {}, pents = {}
  for (let i = 1; i <= max; i++) {
    current = pentagonal(i)
    nums[i] = current
    pents[current] = i
  }
  // nums = {1: 1, 2: 5, 3: 12,...}, pents = {1: 1, 5: 2, 12: 3, ...}
  return [nums, pents]
}

const findMatch = (max) => {
  let data = genPentagonalObj(max), nums = data[0], pents = data[1]
  for (let i = 0; i < max; i++) {
    for (let j = 0; j < max; j++) {
      sum = nums[i] + nums[j]
      difference = Math.abs(nums[i] - nums[j])
      // check if sum/difference are themselves pents
      if (pents[sum] && pents[difference]) {
        return difference
      }
    }
  }
  return false
}

// max found experimentally
runtime(findMatch, 2500)
// runtime: 0.135s

