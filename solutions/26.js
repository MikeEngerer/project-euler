const { runtime } = require('project-euler-helpers')

// credit for insights that led me to this algorithm: https://www.xarg.org/puzzle/project-euler/problem-26/
const findCycle = (num) => {
  if (num % 2 === 0 || num % 5 === 0) return []
  let remainder = 1 % num, digits = [], current
  while (true) {
    // each digit is the floored quotient of the previous division's remainder * 10 / initial num
    current = Math.floor(remainder * 10 / num)
    digits.push(current)
    remainder = (remainder * 10) % num
    // if 1, cycle has finished (always starts at 1)
    if (remainder === 1) {
      break
    }
  }
  return digits
}

const findHighestCycle = (max) => {
  let current, highest = [], num
  for (let i = 2; i < max;i++) {
    current = findCycle(i)
    if (current.length > highest.length) {
      highest = current
      num = i
    }
  }
  return num
}

runtime(findHighestCycle, 1000)
// runtime: 0.006s


//// this works to find a recurring pattern, but i quickly learned decimal precision is way too low
// const findPattern = (num) => {
//   num = num.toString().split('.')[1].split('')
//   let longest = 0, current, frontCheck, backCheck, notSame
//   for (let i = 0; i < num.length; i++) {
//     current = num[i]
//     for (let j = i + 1; j < num.length; j++) {
//       frontCheck = num.slice(j, j + current.length).join('') === current
//       backCheck = num.slice(num.length - current.length).join('') === current
//       longer = current.length > longest
//       notSame = current[0] !== longest
//       if (frontCheck && longer && notSame) {
//         longest = current
//       } else {
//         current += num[j]
//       }
//     }
//   }
//   return longest || 'N/A'
// }

// const iterate = () => {
//   let longest = '', current
//   for (let i = 2; i <= 1000; i++) {
//     // console.log(Number((1 / i).toString().split('.')[1]))
//     current = findPattern(1 / i)
//     // console.log(current)
//     if (current.length > longest.length) {
//       console.log(i, 1 / i)
//       longest = current
//     }
//   }
//   return longest
// }
