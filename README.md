## Project-euler Solutions + helper modules

### About

My ongoing collection of JS solutions to the [Project-euler](https://projecteuler.net/) problem set. 

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
const { runtime } = require('/path/to/root/runtime')

const func = (arguments) => value

runtime(func, arguments)
```

'isPrime' module contains two functions for handling primes.

These are not too efficient; will improve as problems become more computationally intense.
```
const { isPrime, genPrimeArr } = require('/path/to/root/isPrime')

isPrime(num) // bool
genPrimeArr(numPrimes) // array of primes of length numPrimes - 1
```
'factors' module contains two functions for finding factors.
```
const { findFactors, findFactorCount } = require('/path/to/root/factors')

findFactors(num) // unsorted array of factors
findFactorCount(num) // factor count
```


'reverse-md5' module utilizes the npm package (same name) as a means to compare the provided answers to your own.
Project euler's method is to produce an md5sum and compare; this is much quicker and easier, so don't use this (lol).
```
const { reversed } = require('/path/to/root/reverse-md5')

reversed(md5-hash)
```
