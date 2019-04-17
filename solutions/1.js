let { reversed } = require('../reverse-md5.js')

let multiples = (input) => input.reduce((a, e) => check(e) ? a + e : a)


let check = (input) => {
  return input % 3 === 0 || input % 5 === 0
}


console.log(multiples([1, 2, 3, 4, 5, 6, 7, 8, 9]))

let x = []
for (let i = 0; i < 1000; i++) {
  x.push(i)
}

console.log(multiples(x))

reversed('e1edf9d1967ca96767dcc2b2d6df69f4')