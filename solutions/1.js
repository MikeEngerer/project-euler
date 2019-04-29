let { runtime } = require('../modules/runtime')

let multiples = (input) => input.reduce((a, e) => check(e) ? a + e : a)

let check = (input) => {
  return input % 3 === 0 || input % 5 === 0
}

let sample = []
for (let i = 0; i < 1000; i++) {
  sample.push(i)
}

runtime(multiples, sample)
