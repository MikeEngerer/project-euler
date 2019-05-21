const { runtime, genGrid } = require('project-euler-helpers')
const fs = require('fs')
const path = require('path')

/* Starting and ending nums are flexible (start/end anywhere in first/last cols) 
* but fixed (once you start/end, no point in moving anymore within first/last cols)
* Moving right, down, up allows rows ^ (cols - 2) possible paths, so 80 ^ 78 = 2.76 * e ^ 148 = O(n ^ n)...
* Instead of checking all paths, we can start at second last col and find each cell's best relative path sum
* and set its value to that sum 
* This means we visit each cell once (80 rows * 78 cols) and check each of its relative paths (80)
* This reduces our total operations to rows * rows * (cols - 2) = 80 * 80 * 78 = 499200 = O(n ^ 3)
*/

// import and format data into 2d arr
let data = fs.readFileSync(path.join(__dirname, '../project_euler/matrix.txt'), 'utf-8')
           .split('\r\n').map(e => e.split(',').map(el => Number(el)))
data.pop()

// problem's example for testing
let data2 = [[131, 673, 234, 103, 18],
            [201, 96,  342, 965, 150],
            [630, 803, 746, 422, 111],
            [537, 699, 497, 121, 956],
            [805, 732, 524, 37,  331]]

// returns min path sum
const minimumGridPath = (data) => {
  let bestSum, colSums, currentCell, currentSum, minimum = 10000000 // big num for first comparison
  for (let col = data.length - 2; col > 0; col--) { // second last to second col (78)
    colSums = Array(data.length - 1) // temp arr to hold current col's bests
    for (let row = 0; row < data.length; row++) { // first to last row (80)
      currentCell = data[row][col]
      bestSum = 100000000 // big num for first comparison
      for (let i = 0; i < data.length; i++) { // i = rows above/below current cell's row (80)
        if (i === row) { // can only move right
          currentSum = currentCell + data[row][col + 1]
        } else if (i > row) { // move down
          currentSum = currentCell + data[i][col + 1]
          for (let j = i; j > row; j--) { // sum total between current cell row and i
            currentSum += data[j][col]
          }
        } else if (i < row) { // move up
          currentSum = currentCell + data[i][col + 1]
          for (let j = i; j < row; j++) { // sum total between current cell row and i
            currentSum += data[j][col]
          }
        }
        if (currentSum < bestSum) { // find lowest sum for current cell
          bestSum = currentSum
        }
      }
      colSums[row] = bestSum // store current cell's best while we compute rest of col
      if (row === data.length - 1) {
        for (let i = 0; i < data.length; i++) { 
          data[i][col] = colSums[i] // set each cell's best in OG data
        }
      }
    }
  }
  // at this point, all but last col has minimum path computed
  for (let i = 0; i < data.length - 1; i++) {
    // simply add row vals since there is only one option at col 0
    if (data[i][0] + data[i][1] < minimum) {
      minimum = data[i][0] + data[i][1] // set min
    }
  }
  return minimum
}

runtime(minimumGridPath, data)
// runtime: 0.037s