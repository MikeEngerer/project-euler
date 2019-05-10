const { runtime, isPrime } = require('project-euler-helpers')

// checks if quadratic expression evals to a prime num
const producesPrime = (n, a, b) => isPrime((n ** 2) + (a * n) + b)

// finds coefficients (a, b) of quadratic equation that produce highest consecutive primes where n = 0; n++
// returns product of coefficients
const findMax = (max) => {
  let highest = 0, current, n, product
  for (let a = -1; a > -max; a--) {
    for (let b = -1; b > -max; b--) {
      // check a b, -a b, a -b, -a -b
      // needs refactoring to improve modularity
      n = 0
      current = 0
      while (true) {
        if (producesPrime(n, a, b)) {
          current++
          n++
        } else {
          if (current > highest) {
            highest = current
            product = a * b
          }
          break
        }
      }
      n = 0
      current = 0
      while (true) {
        if (producesPrime(n, a, -b)) {
          current++
          n++
        } else {
          if (current > highest) {
            highest = current
            product = a * -b
          }
          break
        }
      }  
      n = 0
      current = 0
      while (true) {
        if (producesPrime(n, -a, b)) {
          current++
          n++
        } else {
          if (current > highest) {
            highest = current
            product = -a * b
          }
          break
        }
      }  
      n = 0
      current = 0
      while (true) {
        if (producesPrime(n, -a, -b)) {
          current++
          n++
        } else {
          if (current > highest) {
            highest = current
            product = -a * -b
          }
          break
        }
      }
    }
  }
  return product
}

runtime(findMax, 1000)
// runtime: 0.094s