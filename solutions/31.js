const { runtime } = require('project-euler-helpers')

//
const findCombos = (max) => {
  let count = 0;
  for (let q = max; q >= 0; q -= 200) {
    for (let w = q; w >= 0; w -= 100) {
      for (let e = w; e >= 0; e -= 50) {
        for (let r = e; r >= 0; r -= 20) {
          for (let t = r; t >= 0; t -= 10) {
            for (let y = t;  y>= 0; y -= 5) {
              for (let u = y; u >= 0; u -= 2) {
                count++;
              }
            }
          }
        }
      }
    }
  }
  return count
} 


console.log(findCombos(200))