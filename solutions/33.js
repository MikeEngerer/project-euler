const { runtime } = require('project-euler-helpers')

// check if initial quotient of two nums is equal to its modified quotient (remove specified num)
const splitAndCheck = (num1, num2, cancel) => {
  let quotient = num1 / num2
  num1 = Number(num1.toString().split('').filter(e => e != cancel).join(''))
  num2 = Number(num2.toString().split('').filter(e => e != cancel).join(''))
  return quotient === (num1 / num2)
}

/*
find all candidate pairs:
-must have 2 digits each (max = 100, i = 10)
-must have 1 like digit across pair
-each num % 10 cannot be 0 (excluded in problem description)
returns arr of pairs that pass these and above splitAndCheck criteria
*/
const findFractions = (max) => {
  let cancel, cancel2, nums = [], current
  for (let i = 10; i < max; i++) {
    if (i % 10 === 0) {
      continue
    }
    cancel = i.toString()[0]
    cancel2 = i.toString()[1]
    for (let j = i + 1; j < max; j++) {
      current = j.toString().split('')
      if (current[0] == cancel || current[1] == cancel) {
        if (splitAndCheck(i, j, cancel)) {
          nums.push([i, j])
        }
      } else if (current[0] == cancel2 || current[1] == cancel2) {
        if (splitAndCheck(i, j, cancel2)) {
          nums.push([i, j])
        }
      }
    }
  }
  return nums
}

// reduces fraction, returns pair of numer/denom as arr
const reduceFraction = (nums) => {
  let reduced = []
  for (let i = 2; i <= nums[0]; i++) {
    if (nums[0] % i === 0 && nums[1] % i === 0) {
      reduced[0] = nums[0] / i
      reduced[1] = nums[1] / i
    }
  }
  return reduced
}

// reduced product of reduced fractions returned from findFractions, returns denom value
const fractionProduct = () => {
  let reduced = findFractions(100).map(e => reduceFraction(e)),
      numerator = reduced.reduce((a, e) => a *= e[0], 1),
      denominator = reduced.reduce((a, e) => a *= e[1], 1)
  return reduceFraction([numerator, denominator])[1]
}
runtime(fractionProduct)
// runtime: 0.004s