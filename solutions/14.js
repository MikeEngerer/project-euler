const { runtime } = require('project-euler-helpers')

const countTerms = (num) => {
  let count = 0
  // assume all nums reduce to 1 eventually, as stated in problem
  while (num !== 1) {
    count++
    num = applyFormula(num)
  }
  // extra for val 1 itself
  count++
  return count
}

// even or odd
const applyFormula = (num) => num % 2 === 0 ? num / 2 : (3 * num) + 1

const findLargestTermCount = (maxNum) => {
  // keep track of winning num, its term count, and the current nums term count
  let highNum = 0, highCount = 0, currentCount;
  for (let i = 2; i < maxNum; i++) {
    currentCount = countTerms(i)
    if (currentCount > highCount) {
      highNum = i
      highCount = currentCount
    }
  }
  return highNum
}

runtime(findLargestTermCount, 1000000)
// runtime: 1.154s
