const { runtime } = require('project-euler-helpers')

// checks if two nums are permutations of each other
const isPermutation = (num, num2) => num.toString().split('').sort().join('') === num2.toString().split('').sort().join('')

const findMin = () => {
  let current = 1
  while (true) {
    for (let i = 2; i <= 6; i++) {
      // num is found and returned when isPermutation(num, num * range(1, 6))
      if (isPermutation(current, current * i)) {
        if (i === 6) return current
      } else {
        break
      }
    }
    current++
  }
}

runtime(findMin)
// runtime: 0.235s