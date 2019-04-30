const { runtime } = require('../modules/runtime')
const { genAlphaObj } = require('../modules/alphabet')
const path = require('path')
const fs = require('fs')
// import and format data into arr, then sort alphabetically
let data = fs.readFileSync(path.join(__dirname, '../project_euler/names.txt'), 'utf-8').split('"').join('').split(',').sort()
// generate obj containing letter scores
const alphaScores = genAlphaObj('A', 'Z')
// returns sum of one name
const getNameSum = (name) => name.split('').reduce((a, e) => a += alphaScores[e], 0)
// reduce and return total sum
const findTotal = (data) => data.reduce((a, e, i) => a += (getNameSum(e) * (i + 1)), 0)

runtime(findTotal, data)
// runtime: 0.004s