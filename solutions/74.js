const { runtime } = require('project-euler-helpers')

// eg. factorial(4) = 24
const factorial = (num) => {
  if (num === 1 || num === 0) return 1
  return num * factorial(num - 1)
}

// loop range(1, max), increment count if digit factorial sum sequence has n terms, return count
const chainWithNTermsUnderMax = (n, max) => {
  let count = 0, currentCount, num, past = []
  for (let i = 1; i < max; i++) {
    currentCount = 1 // include self in count
    num = i
    past = [] // store past digit factorial sums for i
    while (true) {
      past.push(num)
      num = [...num.toString()].map(e => factorial(Number(e))).reduce((a, e) => a + e, 0) // digit factorial sum
      if (past.includes(num)) { // once we see a number twice, break
        break
      }
      currentCount++
    }
    if (currentCount === n) { // count of pattern terms === n (target length)
      count++
    }
  }
  return count
}

runtime(chainWithNTermsUnderMax, 60, 1000000)
// runtime:16.902s

// refactor: store patterns of repeating factorial sums