const { runtime } = require('project-euler-helpers')

// formulas
const triangle = (num) => (num * (num + 1)) / 2

const pentagonal = (num) => (num * ((3 * num) - 1)) / 2

const hexagonal = (num) => num * (2 * num - 1)

// returns index of lowest val in [tri, pent, hex] for switch 
const findLowest = (arr) => arr.indexOf(arr.slice().sort((a, b) => a - b)[0])

const findNextCommon = () => {
  // start at these, problem wants next after 40755
  let t = 286, p = 166, h = 144,
      current = [triangle(t), pentagonal(p), hexagonal(h)],
      lowest
  while (true) {
    // return val if all equal
    if (current[0] === current[1] && current[1] === current[2]) {
      return current[0]
    } 
    // lowest num gets its var incremented
    lowest = findLowest(current)
    // [tri, pent, hex] aka [0, 1, 2]
    switch(lowest) {
      case 0:
        t++
        current[0] = triangle(t)
        break
      case 1:
        p++
        current[1] = pentagonal(p)
        break
      case 2:
        h++
        current[2] = hexagonal(h)
        break
    }
  }
}

runtime(findNextCommon)
// runtime: 0.044s


//// may need these later on
// const isTriangle = (num) => {
//   let n = (Math.sqrt((8 * num) + 1) - 1) / 2
//   // check if int
//   return n % 1 === 0
// }

// const isPentagonal = (num) => {
//   let n = (Math.sqrt((24 * num) + 1) + 1) / 6
//   return n % 1 === 0
// }

// const isHexagonal = (num) => {
//   let n = (Math.sqrt((8 * num) + 1) + 1) / 4
//   console.log(n)
//   return n % 1 === 0
// }
// console.log(isHexagonal(1533776805))