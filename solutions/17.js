const { runtime } = require('../modules/runtime')

let map = {
  0: '',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
  100: 'hundred'
}

const convertNumToWordStr = (num, str = '') => {
  let strNum = num.toString()
  if (num === 1000) {
    return 'onethousand'
  }
  if (num > 99) {
    str += map[strNum[0]] + map[100]
    if (num % 100 !== 0) {
      str += 'and'
    }
    num = num % 100
    return convertNumToWordStr(num, str)
  }
  if (num > 19) {
    str += map[`${strNum[0]}0`]
    num = num % 10
    return convertNumToWordStr(num, str)
  }
  if (num < 20) {
    str += map[num]
    return str
  }
}

const loopToThousand = () => {
  let sum = 0
  for (let i = 1; i <= 1000; i++) {
    sum += convertNumToWordStr(i).length
  }
  return sum
}

runtime(loopToThousand)