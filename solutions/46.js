const { runtime, isPrime } = require('project-euler-helpers')

// a composite odd number is any odd number that is not prime
const nextComposite = (previous) => {
  while (true) {
    // increment previous composite until next is found
    previous += 2
    if (!isPrime(previous)) {
      return previous
    }
  }
}

/*
  proposition states every composite num == some prime + some double square (2 * (i ** 2))
  for each composite num, i is incremented until either:
    - doubleSquare(i) > current -> no combo was found, return this num
    - isPrime(current - doubleSquare(i)) -> satisfies proposition, move on to next composite
*/
const findComposite = () => {
  let i = 1, doubleSquare, current = 5995
  while (true) {
    doubleSquare = 2 * (i ** 2)
    if (doubleSquare > current) {
      return current
    }
    if (isPrime(current - doubleSquare)) {
      current = nextComposite(current)
      i = 1
    } else {
      i++
    }
  }
}

runtime(findComposite)
// runtime: 0.006s