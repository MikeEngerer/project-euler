const isPrime = (num) => {
  if (num === 2) return true
  if (num % 2 === 0 || num === 1) return false
  for (let i = 3; i < Math.ceil(Math.sqrt(num)) + 1; i += 2) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

const genPrimeArr = (numPrimes) => {
  let primes = [2,3,5,7,11]
  let newPrime = 13
  while (primes.length < numPrimes) {
    let len = primes.length
    for (let i = 0; i < len; i++) {
      if (newPrime % primes[i] === 0) {
        break
      }
      if (i === (len - 1) && newPrime % primes[i] !== 0) {
        primes.push(newPrime)
      }
    }
    newPrime += 2
  }
  return primes
}


module.exports = {
  isPrime,
  genPrimeArr
}