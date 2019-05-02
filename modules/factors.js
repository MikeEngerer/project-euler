// returns count of factors of num
const findFactorCount = (num) => {
  // all nums have factors 1 and itself
  let count = 2
  // max factor possible (excluding compliments)
  let max = Math.floor(Math.sqrt(num))
  for (let i = 2; i <= max + 1; i++) {
    if (num % i === 0) {
      // divisible by i and i's compliment
      count += 2
    }
  }
  return count
}

// returns unsorted arr of factors of given num
const findFactors = (num) => {
  let factors = []
  let max = Math.floor(Math.sqrt(num))
  for (let i = 1; i <= max; i++) {
    if (num % i === 0) {
      // push i and i's compliment (if not self) to factors arr
      factors.push(i)
      if (i !== num / i) {
        factors.push(num / i)
      }
    }
  }
  return factors
}

// console.log(findFactors(2))

// returns sum of factors of given num
const findFactorSum = (num) => findFactors(num).reduce((a, e) => a + e, 0)

module.exports = {
  findFactorCount,
  findFactors,
  findFactorSum
}