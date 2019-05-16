const { runtime } = require('project-euler-helpers')

// returns digit count
const digitCount = (num) => num.toString().length

// returns count of len(x ** n) === n
const powEqualsDigitCount = () => {
  let pow = 1, count = 0, digits
  // upper bound is 10; all pows of 10+ will have more digits than pow val
  for (let i = 1; i < 10; i++) {
    while (true) {
      digits = digitCount(Math.pow(i, pow))
      if (digits === pow) {
        count++
      } else if (pow > digits) {
        pow = 1
        break
      }
      pow++
    }
  }
  return count
}

runtime(powEqualsDigitCount)
// runtime: 0.001s