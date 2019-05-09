const { runtime } = require('project-euler-helpers')

const countSundays = () => {
  let months = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], year = 1901, sunday = 5, month, count = 0
  while (year <= 2000) {
    // check if leap year, set feb
    months[1] = year % 4 === 0 && year % 100 !== 0 ? 29 : year % 400 === 0 ? 29 : 28
    month = 0
    while (month < 12) {
      // sunday on day 1 of month
      if (sunday === 1) {
        count++
      }
      // find first sunday of next month
      sunday = sunday + 28 < months[month] ? sunday + 35 - months[month] : sunday + 28 - months[month]
      month++
    }
    year++
  }
  return count
}

runtime(countSundays)
// runtime: 0.001s