const { runtime, genPrimeArrUnderMax } = require('project-euler-helpers')

// checks if two nums are permutations of each other
const isPermutation = (num, num2) => num.toString().split('').sort().join('') === num2.toString().split('').sort().join('')

// filters set of primes in range(1000, 10000) incrementally, each time applying new criteria
const findSet = () => {
  // primes in range(1000, 10000)
  let primes = genPrimeArrUnderMax(10000).filter(e => e.toString().length === 4), 
      current, primeSets = []
  // filter and map primes into new arr of primes with 3+ permutations [[1021, 1201, 2011], [...], ...]
  for (let i = 0; i < primes.length; i++) {
    current = [primes[i]]
    for (let j = 0; j < primes.length; j++) {
      if (i === j) {
        continue
      }
      if (isPermutation(primes[i], primes[j])) {
        current.push(primes[j])
      }
    }
    // only include if at least 3 permutations
    if (current.length >= 3) {
      // add as arr to passing sets
      primeSets.push(current)
    }
    // remove from original arr for speed
    primes = primes.filter(e => !current.includes(e))
  }
  let difference, difference2, found = []
  // find sets of 3 primes with equal difference, store in found 
  primeSets.forEach(e => {
    e.sort((a, b) => a - b)
    for (let i = 0; i < e.length - 2; i++) {
      for (let j = i + 1; j < e.length - 1; j++) {
        difference = e[j] - e[i]
        for (let k = j + 1; k < e.length; k++) {
          difference2 = e[k] - e[j]
          // check diff are equal (eg. 30 - 20 === 20 - 10)
          if (Math.abs(difference) === Math.abs(difference2)) {
            found.push([e[i], e[j], e[k]])
          }
        }
      }
    }
  })
  // concat second set in found and return str (first set is from problem description)
  return found[1][0].toString() + found[1][1].toString() + found[1][2].toString()
}

runtime(findSet)
// runtime: 0.176s