## Project-euler Solutions + helper modules
### Setup

clone & install packages
```
git clone <this repo> <your repo>
npm i
```
### Usage

Questions and hashed answers found in project_euler.txt. Diagrams found in project_euler folder. These files were obtained from [local euler](http://kmkeen.com/local-euler/2008-07-16-07-33-00.html).

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