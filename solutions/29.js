let count = 0
let arr = []
let current
let found = false
for (let i = 2; i < 6; i++) {
  for (let j = 2; j < 6; j++) {
    found = false
    current = Math.pow(i, j)
    for (let k = 0; k < arr.length; k++) {
      if (arr[k] === current) {
        found = true
        break
      }
    }
    if (!found) {
      count++
      arr.push(current)
    }
  }
}
console.log(count)