const { runtime } = require('project-euler-helpers')
const fs = require('fs')
const path = require('path')

// import and format data
const data = fs.readFileSync(path.join(__dirname, '../project_euler/keylog.txt'), 'utf-8')
             .split('\r\n').map(e => e.split('').map(el => Number(el)))

// remove last arr (empty)
data.pop()

/* construct data structure in the form:
*  obj = {
*    0: {
*      before: [],
*      after: []
*    },
*    ...,
*    9: {
*      before: [],
*      after: []
*    }
*  }
* where each set of inner arrays is the set of nums occurring before or after the outer obj's value
* eg. the set [3, 2, 1] for val 2:
*  obj = {
*    ...,
*    2: {
*      before: [3],
*      after: [1]
*    },
*    ...
*  }
*/
const constructBeforeAfter = (data) => {
  let current, obj = {}
  // construct data structure
  for (let i = 0; i < 10; i++) {
    obj[i] = {
      before: [],
      after: []
    }
  }
  // loop through each val in each arr in data: data[i][j][k]
  // push each val to the before/after arr of current
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < 3; j++) {
      current = data[i][j]
      for (let k = 0; k < 3; k++) {
        compare = data[i][k]
        if (j > k) {
          obj[current].before.push(compare)
        } else if (j < k) {
          obj[current].after.push(compare)
        } else {
          continue
        }
      }
    }
  }
  // reduce each sub array to unqiue values, remove any nums not seen
  for (i in obj) {
    obj[i].before = obj[i].before.unique()
    obj[i].after = obj[i].after.unique()
    if (obj[i].after.length === 0 && obj[i].before.length === 0) {
      delete obj[i]
    }
  }
  // logging out our obj reveals the sequence (also that only before or after would have sufficed)
  return obj
}

// sort vals in obj by length of subarray [before] (could also use [after]), return sequence
const decode = () => {
  let keys = constructBeforeAfter(data)
  return Object.keys(keys).sort((a, b) => keys[a].before.length > keys[b].before.length).join('')
}

runtime(decode)
// runtime: 0.001s