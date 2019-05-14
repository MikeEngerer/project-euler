const { runtime, isPrime } = require('project-euler-helpers')

const nextComposite = (previous) => {
  while (true) {
    previous++
    if (previous % 2 !== 0 && !isPrime(previous)) {
      return previous
    }
  }
}

const findComposite = () => {
  let i = 1, square, current = 9
  while (true) {
    square = 2 * (i ** 2)
    if (square > current) {
      return current
    }
    if (isPrime(current - square)) {
      current = nextComposite(current)
      i = 1
    } else {
      i++
    }
  }
}

runtime(findComposite)
// runtime: 0.006s