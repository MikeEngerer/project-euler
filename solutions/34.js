const { runtime } = require('project-euler-helpers')

const factorial = (num) => { 
  if (num === 0) return 1
  if (num === 1) return 1
  return num * factorial(num - 1)
}

// check num's digit factorial sum === num
const digitFactorial = (max) => {
  let sum = 0, current
  for (let i = 3; i <= max; i++) {  
    current = i.toString().split('').reduce((a, e) => a + factorial(Number(e)), 0)
    if (current === i) {
      sum += current
    }
  }
  return sum
}

runtime(digitFactorial, 41000)
// runtime: 0.03s