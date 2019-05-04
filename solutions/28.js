const { runtime } = require('project-euler-helpers')
// algorithm follows that each corner num += last corner + current spiral dimensions - 1 
// eg 1x1, 3x3, 5x5, 7x7 -> +0, +2, +4, +6 -> [[1], [3, 5, 7, 9], [13, 17, 21, 25], [31, 37, 43, 49]]
// summed on the fly, no need to store all corners
const cornerSum = (dim) => {
  let sum = 1, last = 1
  // spirals
  for (let i = 2; i < dim; i += 2) {
    // corners
    for (let j = 1; j <= 4; j++) {
      last += i
      sum += last
    }
  }
  return sum
}

runtime(cornerSum, 1001)
// runtime: 0.001s
