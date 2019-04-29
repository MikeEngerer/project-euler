const { runtime } = require('../modules/runtime')

const findNumRoutes = (size) => {
  /* 
  construct obj of coordinates eg. for 2x2:
    coordinates = { 
      '0': { '0': 0, '1': 0, '2': 0 },
      '1': { '0': 0, '1': 0, '2': 0 },
      '2': { '0': 0, '1': 0, '2': 0 } 
    }
  */
  let coordinates = {}
  for (let i = size; i >= 0; i--) {
    coordinates[i] = {}
    for (let j = size; j >= 0; j--) {
      coordinates[i][j] = 0
    }
  }
  // sum routes starting from finish and working back to start
  for (let i = size; i >= 0; i--) {
    for (let j = size; j >= 0; j--) {
      // finish point; already 0
      if (i === size && j === size) {
        continue
      }
      // at boundary, there is only ever 1 possible route
      if (i === size || j === size) {
        coordinates[i][j] = 1
      } else {
        // any internal coordinates have x routes where x = sum of already calculated routes of its neighbours down and right
        coordinates[i][j] = coordinates[i][j + 1] + coordinates[i + 1][j]
      }
    }
  } 
  // final count will be at start point
  return coordinates[0][0]
}

runtime(findNumRoutes, 20)
