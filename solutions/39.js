const { runtime } = require('project-euler-helpers')
// lots of room for improvement on this one, will come back and refactor

// verify sidelengths a, b, c create a valid triangle
const isTriangle = (a, b, c) => Math.sqrt(a ** 2 + b ** 2) === c

//check all values for c against sidelengths a, b, return arr of perims
const findTrianglePerims = (a, b, max) => {
  let arr = [], boundary = max - a + b
  for (let i = b + 1; i <= boundary; i++) {
    count = 0
    if (isTriangle(a, b, i)) {
      arr.push(a + b + i)
    }
  }
  return arr
}

// check all sidelengths a, b and store perimeter count, highest count perim is returned
const loopSidesAB = (max) => {
  let arr, obj = {}, highest = 0, perim
  for (let i = 1; i <= max; i++) {
    for (let j = i; j <= max; j++) {
      findTrianglePerims(i, j, max).forEach(e => {
        if (e <= max) {
          obj[e] ? obj[e]++ : obj[e] = 1
        }
      })
    }
  }
  // all counted, find highest
  for (let i in obj) {
    if (obj[i] > highest) {
      highest = obj[i]
      perim = i
    }
  }
  return perim
}

runtime(loopSidesAB, 1000)
// runtime: 4.602s


