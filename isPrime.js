const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
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