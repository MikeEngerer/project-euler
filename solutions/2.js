const { runtime } = require('../runtime.js')

const fibSum = () => {
  let seq = [1, 1]
  let current = 0;
  let sumEven = 0
  while (current < 4000000) {
    current = seq[seq.length - 1] + seq[seq.length - 2]
    // generate seq
    seq.push(current)
    // add to sum if even
    if (current % 2 === 0) {
      sumEven += current
    }
  }
  return sumEven
}

runtime(fibSum)