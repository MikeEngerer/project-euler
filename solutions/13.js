const { data } = require('../project_euler/13')
const { runtime } = require('../modules/runtime')
 
// format nums into arr
const dataArr = data.split('\n').map(e => e.trim())

/*
Breakdown of shorthand used below:
    -sum arr of nums with reduce -> returns sum in sci notation
    -convert to str
    -remove unneeded chars
        -split on decimal, join back together
        -split on e, join back together
        -slice the first 10 chars, join
    -returns first 10 digits as a str
*/
const firstTenDigits = (data) => data.reduce((a, e) => a + parseInt(e), 0).toString().split('.').join('').split('').slice(0, 10).join('')

runtime(firstTenDigits, dataArr)
// runtime: 0.001s
