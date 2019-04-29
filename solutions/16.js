const { runtime } = require('../modules/runtime')

/*
JS uses sci notation for big ints, which does not give enough precision (not all digits given)
this workaround stores each digit in an array
multiplies each by 2, adding any overflow from the prev num
*/
const digitCount = () => {
  // over represents carrying over 10's
  let digitArr = [2], newNum, over = 0, len
  for (let i = 1; i < 1000; i++) {
    len = digitArr.length
    for (let j = 0; j <= len; j++) {
      // if arr does not have val in next digit, give it 0
      newNum = ((digitArr[j] * 2) + over) || 0 + over;
      over = 0
      if (newNum > 9) {
        over = Math.floor(newNum / 10)
        newNum = newNum % 10
      }
      // need refactoring, adds unnecessary leading 0's to arr
      digitArr[j] = newNum
    }
    over = 0
  }
  // sum
  return digitArr.reduce((a, e) => a + e)
}

runtime(digitCount)