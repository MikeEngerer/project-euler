const { runtime, isPandigital } = require('project-euler-helpers')

const findPandigitalProducts = () => {
  let current, products = [], nums = []
  // bounds determined through trial/error
  for (let i = 3; i < 10000; i++) {
    products = []
    for (let j = 1; j <= 5; j++) {
      // store products
      products.push(j * i)
      // concat prods to string
      current = products.reduce((a, e) => a + e, '')
      // convert to int for conditionals
      currentTotal = Number(current)
      // lower bound -> need more prods, upper bound -> break
      if (currentTotal < 123456789) {
        continue
      } else if (currentTotal > 987654321) {
        break
      } else {
        if (isPandigital(currentTotal)) {
          nums.push(currentTotal)
        }
      }
    }
  }
  // sort arr of pandigitals, return highest
  return nums.sort((a, b) => b - a)[0]
}

runtime(findPandigitalProducts)
// runtime: 0.02s
