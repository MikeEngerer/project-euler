const { runtime } = require('project-euler-helpers')
const path = require('path')
const fs = require('fs')

let data = fs.readFileSync(path.join(__dirname, '../project_euler/triangle.txt'), 'utf-8')

data = data.split('\n').map(e => e.trim()).map(e => e.split(' ').map(el => Number(el)))
// ? extra ele [0]...
data.pop()
// same sol as 18
const findMax = (data) => {
  let current, left, right
  for (let i = data.length - 1; i > 0; i--) {
    for (let j = 0; j < data[i - 1].length; j++) {
      current = data[i - 1][j]
      left = data[i][j]
      right = data[i][j + 1]
      left > right ? current += left : current += right
      data[i - 1][j] = current
    }
  }
  // starting num is now max route summed
  return data[0][0]
}

runtime(findMax, data)
// runtime: 0.002s
