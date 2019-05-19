const { runtime } = require('project-euler-helpers')
const fs = require('fs')
const path = require('path')

// import and format data into 2d arr
let data = fs.readFileSync(path.join(__dirname, '../project_euler/matrix.txt'), 'utf-8')
           .split('\r\n').map(e => e.split(',').map(el => Number(el)))
data.pop()

// visit every cell, starting from bottom right, moving left and up
// add lower val from right or down (or just one if at bounds) return min sum (grid[0][0])
const minimumGridPath = (data) => {
  let len = data.length - 1
  for (let i = len; i >= 0; i--) {
    for (let j = len; j >= 0; j--) {
      if (i === len && j === len) { // were at bottom right... do nothing
        continue
      } else if (i === len) { // were at last row
        data[i][j] += data[i][j + 1] // add val to the right
      } else if (j === len) { // were at last col
        data[i][j] += data[i + 1][j] // add val below
      } else {
        // current cell += lesser of vals to right and down
        data[i][j] += data[i][j + 1] > data[i + 1][j] ? data[i + 1][j] : data[i][j + 1]
      }
    }
  }
  // min sum computed and positioned at origin
  return data[0][0]
}

runtime(minimumGridPath, data)
// runtime: 0.004s