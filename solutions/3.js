const { runtime } = require('project-euler-helpers')

const findPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      num = num / i
      i = 2
    }
  }
  return num
}

runtime(findPrime, 600851475143)
// runtime: 0.001s
