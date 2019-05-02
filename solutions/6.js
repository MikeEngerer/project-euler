const { runtime } = require('project-euler-helpers')

const diff = (max) => {
  let sum = 0
  let sumOfSquares = 0
  for (let i = 1; i <= max; i++) {
    sum += i
    sumOfSquares += i ** 2
  }
  return (sum ** 2) - sumOfSquares
}

runtime(diff, 100)
// runtime: 0.001s
