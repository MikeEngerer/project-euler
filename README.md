## Project-Euler solutions + helper modules

### About

My ongoing collection of JS solutions to the [Project-Euler](https://projecteuler.net/) problem set. 

Questions and hashed answers found in project_euler.txt. Diagrams found in project_euler folder. These files were obtained from [local euler](http://kmkeen.com/local-euler/2008-07-16-07-33-00.html).

This is a WIP, many solutions are far from optimal/efficient. Refactoring as I go!

### Setup

To obtain the problem set/modules/solutions locally:

```
git clone <this repo> <your repo>
npm i
```
### Usage

'runtime' module evals func with args given and logs runtime + returned value.
```
const { runtime } = require('/path/to/modules/runtime')

const func = (arguments) => value

runtime(func, arguments)
```
'fibonacci' module contains funcs for working with the fibonacci sequence.
```
const { fibNthTerm, isFib } = require('/path/to/modules/fibonacci')

fibNthTerm(10) // 55
isFib(55) // true
isFib(4) // false
```

'primes' module contains two functions for handling primes.

These are not too efficient; will improve as problems become more computationally intense.
```
const { isPrime, genPrimeArr } = require('/path/to/modules/primes')

isPrime(num) // bool
genPrimeArr(numPrimes) // array of primes of length numPrimes - 1
```
'factors' module contains two functions for finding factors.
```
const { findFactors, findFactorCount } = require('/path/to/modules/factors')

findFactors(num) // unsorted array of factors
findFactorCount(num) // factor count
```
'grid' module contains functions for creating grids (2d arr)
```
const { genGrid } = require('/path/to/modules/grid')

genGrid(rows, cols, val)
genGrid(3, 4, 0) // [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
```

'alphabet' module contains functions for generating arrays/objects of characters
```
const { genAlphaArr, genAlphaObj } = require('/path/to/modules/alphabet')

genAlphaArr('A', 'Z') // ['A', 'B', ... ,'Z']
genAlphaObj('a', 'z') // { 'a': 1, 'b': 2, ..., 'z': 26}
```

'reverse-md5' module utilizes the npm package (same name). Use to obtain answers from project_euler.txt if you're stuck.
```
const { reversed } = require('/path/to/modules/reverse-md5')

reversed(md5-hash)
```
