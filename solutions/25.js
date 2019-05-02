const { runtime } = require('project-euler-helpers')

// recursive solution using digit arrs (nums too big for JS)
const fib = (last = [1], secondLast = [1], count = 2) => {
  if (last.length === 1000) return count
  let lastCopy = last.slice(), over = 0
  for (let i = 0; i < last.length; i++) {
    last[i] += secondLast[i] + over || over
    if (last[i] > 9) {
      over = 1
      last[i] -= 10
    } else {
      over = 0
    }
  }
  if (over) last.push(over)
  count++
  return fib(last, lastCopy, count)
}

runtime(fib)
// runtime: 0.059s


//// previous attempt that didnt work out... arr of digits in reverse made the above solution much easier
// const shiftDigits = (last, secondLast) => {
//   while (last.length !== secondLast.length)
//     secondLast.unshift(0)
//   // console.log(last, secondLast)
//   return [last, secondLast]
// }

// const trimZeros = (arr) => {
//   // console.log('in', arr)
//   let flag = true
//   while (flag) {
//     if (arr[0] === 0) {
//       arr.shift()
//     } else {
//       flag = false
//     }
//   }
//   // console.log('out', arr)
//   return arr
// }

// const addDigitArrs = (last, secondLast) => {
//   let both = shiftDigits(last, secondLast), newDigitArr = [], over = 0, currentSum
//   last = both[0]
//   secondLast = both[1]
//   console.log(last, secondLast)
//   for (let i = 0; i <= last.length; i++) {
//     // console.log(last[i], secondLast[i])
//     currentSum = secondLast[i] + last[i] || 0
//     if (currentSum > 9) {
//       if (newDigitArr[i - 1]) {
//         newDigitArr[i - 1] += 1
//       } else {
//         newDigitArr.unshift(1)
//       }
//       currentSum = currentSum % 10
//     } else {
//       over = 0
//     }
//     if (currentSum) {
//       newDigitArr.push(currentSum)
//     }
//   }
//   return [trimZeros(last), trimZeros(newDigitArr)]
// }

// const findNumDigits = (num) => {
//   let last = [1], secondLast = [1], temp
//   while (last.length < num - 1) {
//     // console.log(last)
//     temp = addDigitArrs(last, secondLast)
//     // console.log(temp[1], temp[0])
//     last = temp[1]
//     secondLast = temp[0]
//   }
//   return last.join('')
// }

// console.log(trimZeros([1, 1, 0, 0, 0]))
// console.log(findNumDigits(10))
// console.log(addDigitArrs([8], [5]))