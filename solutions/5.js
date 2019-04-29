let {runtime} = require('../modules/runtime')

const findSmallestMultiple = (max) => {
  let found = false
  let currentMultiple = max
  while (!found) {
    for (let i = 1; i <= max; i++) {
      if (currentMultiple % i !== 0) {
        break
      }
      if (i === max && currentMultiple % i === 0) {
        found = currentMultiple
      }
    }
    currentMultiple+=max
  }
  return found
}

runtime(findSmallestMultiple, 20)