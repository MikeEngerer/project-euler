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
const { runtime } = require('/path/to/root/runtime.js')

const func = (arguments) => value

runtime(func, arguments)
```

'isPrime' module contains two functions for handling primes.

These are not too efficient (especially isPrime()); will improve when problems become too computationally intense.
```
const { isPrime, genPrimeArr } = require('/path/to/root/isPrime.js')

isPrime(num) // bool
genPrimeArr(numPrimes) // array of primes of length numPrimes - 1
```

'reverse-md5' module utilizes the npm package (same name) as a means to compare the provided answers to your own.
Project euler's method is to produce an md5sum and compare; this is much quicker and easier.
```
const { reversed } = require('/path/to/root/reverse-md5.js')

reversed(md5-string)
```
