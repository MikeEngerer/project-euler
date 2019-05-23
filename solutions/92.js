const { runtime } = require('project-euler-helpers')

// returns sum of digits ** 2
const sumDigitSquares = (num) => num.toString().split('').reduce((a, e) => a + Number(e) ** 2, 0)

// returns count of digit square sums arriving at 89, under max
const totalEndingAt89 = (max) => {
  let count = 0, num
  for (let i = 1; i < max; i++) { // starting num
    num = i
    while (true) {
      if (num === 89) { // found, count++
        count++
        break
      } else if (num === 1) { // will not hit 89, break
        break
      } else {
        num = sumDigitSquares(num) // continue until 89 or 1
      }
    }
  }
  return count
}

runtime(totalEndingAt89, 10000000)
// runtime: 22.464s

// refactor: store patterns leading to 89, terminate loop when any num leading to 89 is found