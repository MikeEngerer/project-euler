const { runtime, isPandigital } = require('project-euler-helpers')

// modified from fibNthTerm, this func takes both nums as arays of digits in reverse, returns next
const nextFib = (last, secondLast) => {
  let lastCopy = last.slice(), over = 0
  for (let i = 0; i < last.length; i++) {
    last[i] += secondLast[i] + over || over
    if (last[i] > 9) {
      over = 1
      last[i] -= 10
    } else {
      over = 0
    }
  }
  if (over) last.push(over)
  return last
}
// checks fib[n] for pandigital first and last 9 digits, returns n
const fibPandigital = () => {
  let secondLast = [1], last = [1], current, count = 2, first9, last9
  while (true) {
    count++
    // get next fib 
    current = nextFib(last.slice(), secondLast.slice())
    secondLast = last.slice()
    last = current.slice()
    currentNum = current.slice().reverse()
    // slice first 9 digits
    first9 = Number(currentNum.slice(0, 9).join(''))
    if (isPandigital(first9)) { // only continue checking if first 9 are pandigital
      // slice last 9 digits
      last9 = Number(currentNum.slice(current.length - 9).join(''))
      if (isPandigital(last9)) {
        return count
      }
    }
  }
}

// super slow... needs major refactoring but fib[n] digits > 68000 so idk 
runtime(fibPandigital)
// runtime: 506.469s