const { runtime, isPermutation } = require('project-euler-helpers')

// returns smallest permutation of a num
const minPermutation = (num) => {
  // sort to min permutation
  let arr = num.toString().split('').map(e => Number(e)).sort((a, b) => a - b)
  // if starts with 0, swap with first non-zero digit 
  if (arr[0] === 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        arr[0] = arr[i]
        arr[i] = 0
        break
      }
    }
  }
  return arr.join('')
}

// calc cubes and store min permutation in obj with count and the OG cube
// increment count on match until 5, return OG cube
const findSmallestCube = () => {
  let i = 1, cubes = {}, cube, current
  while (true) {
    cube = Math.pow(i, 3)
    current = minPermutation(cube)
    cubes[current] ? cubes[current].count++ : cubes[current] = { count: 1, num: cube }
    if (cubes[current].count === 5) {
      return cubes[current].num
    }
    i++
  }

}

runtime(findSmallestCube)
// runtime: 0.031s