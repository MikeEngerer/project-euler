const fibNthTerm = (n, last = [1], secondLast = [1], count = 2) => {
  if (!n) return
  if (count === n) return last.reverse().join('')
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
  count++
  return fibNthTerm(n, last, lastCopy, count)
}

const isFib = (num, last = [1], secondLast = [1]) => {
  let lastNum = Number(secondLast.slice().reverse().join('')), lastCopy = last.slice(), over = 0
  if (num === 1 || num === lastNum) return true
  if (lastNum > num) return false
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
  return isFib(num, last, lastCopy)
}

module.exports = {
  fibNthTerm,
  isFib

}