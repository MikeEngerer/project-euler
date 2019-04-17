## Project-euler Solutions + helper modules
### Setup
clone & install packages
```
git clone <this repo> <your repo>
npm i
```
### Usage
'runtime' module evals func with args given and logs runtime + returned value to console
```
const { runtime } = require('/path/to/root/runtime.js')

/// your code here

runtime(function, arguments)
```
'reverse-md5' module utilizes the npm package (same name) as a means to compare the provided answers to your own.
Project euler's method of simply utilizing md5sum through terminal is a much quicker and easier way to do the same thing.
```
const { reversed } = require('/path/to/root/reverse-md5.js')

/// your code here

reversed(md5-string)
```

### Notes
My solutions are here for help when struggling through a problem, however, many are far from optimal/efficient. 
Refactoring of solutions in the works! 
