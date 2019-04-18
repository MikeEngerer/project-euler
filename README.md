## Project-euler Solutions + helper modules
### Setup

clone & install packages
```
git clone <this repo> <your repo>
npm i
```
### Usage

Included 'runtime' module evals func with args given and logs runtime + returned value to console
```
const { runtime } = require('/path/to/root/runtime.js')

const func = (arguments) => value

runtime(func, arguments)
```
'reverse-md5' module utilizes the npm package (same name) as a means to compare the provided answers to your own.
Project euler's method is to produce an md5sum and compare; this is much quicker and easier.
```
const { reversed } = require('/path/to/root/reverse-md5.js')

/// your code here

reversed(md5-string)
```

### Notes

This is a WIP, will continue to update with more solutions/modules. Many solutions are far from optimal/efficient. Refactoring as I go!