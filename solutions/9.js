const { runtime } = require('project-euler-helpers')

const findTrip = () => {
  let i = 1;
  let j = 2;
  let sum = i + j + calcC(i, j)
  while (sum !== 1000) {
    if (sum > 1000) {
      i++
      j = i + 1
    } else {
      j++
    }
    sum = i + j + calcC(i, j)
  }
  return i * j * calcC(i, j)
}

const calcC = (a, b) => {
  return Math.sqrt((a**2) + (b**2))
}

runtime(findTrip)
// runtime: 0.004s