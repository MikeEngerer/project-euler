const { runtime } = require('project-euler-helpers')

Array.prototype.last = function() {
  return this[this.length - 1]
}
// range(1, num)
const range = (num) => {
  numArr = []
  for (let i = 1; i <= num; i++) {
    numArr.push(i)
  }
  return numArr
}

const partitionsFromMultiples = (num) => {
  let nums = [], x
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      x = Array(num / i).fill(i)
      nums.push(x)
    }
  }
  return nums
}

const partitionsFromSingles = (num) => {
  if (num === 1) return [1]
  if (num === 2) return [1, 1]
  let nums = [], max = num % 2 === 0 ? num / 2 - 1 : Math.floor(num / 2), extra, current
  for (let i = 1; i <= max; i++) {
    nums.push([i, num - i])
  }
  nums = nums.map(e => e.sort((a, b) => b - a))
  extra = nums.map(e => {
    current = partitionsFromSingles(e[0])
    if (e[1] >= 2) current.pop()
    return [e[1], ...current]
  })
  return [...nums, ...extra]
}

const partitions = (num) => [...partitionsFromMultiples(num), ...partitionsFromSingles(num)]

const allPartitions = (num) => {
  let count = 0
  for (let i = 1; i <= num; i++) {
    count += partitions(num)
  }
  return count
}

console.log(partitions(6)[5][3])
// console.log(totalCount(5))
// console.log(allPartitions(5))