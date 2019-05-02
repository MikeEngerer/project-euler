const { runtime } = require('project-euler-helpers')

let data = `                          75
                                     95 64
                                    17 47 82
                                  18 35 87 10
                                 20 04 82 47 65
                               19 01 23 75 03 34
                              88 02 77 73 07 63 67
                            99 65 04 28 06 16 70 92
                           41 41 26 56 83 40 80 70 33
                         41 48 72 33 47 32 37 16 94 29
                        53 71 44 65 25 43 91 52 97 51 14
                      70 11 33 28 77 73 17 78 39 68 17 57
                     91 71 52 38 17 14 91 43 58 50 27 29 48
                   63 66 04 68 89 53 67 30 73 16 69 87 40 31
                  04 62 98 27 23 09 70 98 73 93 38 53 60 04 23`

// format data into 2d arr
data = data.split('\n').map(e => e.trim()).map(e => e.split(' ').map(el => Number(el)))

// starts at second last row, each el += larger of its two route options below: sum persists
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


// initial approach below with rankings didnt pan out
// // map rank of nums in each row (sorted index)
// const mapRanks = (arr) => {
//   let sorted = arr.slice().sort((a, b) => a - b)
//   return arr.map(e => sorted.indexOf(e))
// }

// // full data set mapped by rank
// let rankedData = data.map(e => mapRanks(e))

// console.log(rankedData)
