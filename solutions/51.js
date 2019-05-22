const { runtime, isPrime } = require('project-euler-helpers')
// figuring out that 3 digits needed to be replaced was a guessing game... needs refactoring to increase modularity

/* returns family of all num arrangements with 3 digit replacements in the form:
* family = {
*  index1: {
*     index2: {
*       index3: [10 * []],
*       ...
*     },
*    ...
*   },
*   ...
* }
* innermost values are a family of nums (arr of arrs), and obj keys denote which index of str(num) is replaced
* eg. for the num 12345, its array at family[0][1][3] = [[1, 1, 3, 1, 5], ..., [9, 9, 3, 9, 5]]
*/
const replaceDigits = (num) => {
  let str = num.toString().split(''), currentSet, family = {}, copy, tempL, tempK
  for (let i = 1; i < 10; i++) { // value to use as replacement (range(1, 10))
    for (let j = 0; j < str.length - 2; j++) { // first index
      if (!family[j]) {
        family[j] = {}
      }
      copy = str.slice()
      copy[j] = i
      for (let k = j + 1; k < str.length - 1; k++) { // second index
        if (!family[j][k]) {
          family[j][k] = {}
        }
        tempK = copy[k]
        copy[k] = i
        for (let l = k + 1; l < str.length; l++) { // third index
          if (!family[j][k][l]) {
            family[j][k][l] = []
          }
          tempL = copy[l]
          copy[l] = i // all digits replaced at indexes j, k, l
          family[j][k][l].push(Number(copy.slice().join(''))) // convert back to num and add to family j, k, l
          copy[l] = tempL
        }
        copy[k] = tempK
      } 
    }
  }
  return family
}

// increment num, generate family of 3 digit replacements, return lowest in fam if # primes === n
const findFamilyWithNPrimes = (n) => {
  let current = 10000, family
  while (true) {
    family = replaceDigits(current) // generate family of 3 digit replacements
    for (i in family) {
      for (j in family[i]) {
        for (k in family[i][j]) {
          if (family[i][j][k].filter(e => isPrime(e)).length === n) { // filter out non primes, check === n
            return family[i][j][k][0] // lowest in family
          }
        }
      }
    }
    current++
  }
}

runtime(findFamilyWithNPrimes, 8)
// runtime: 6.833s