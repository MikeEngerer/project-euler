const genAlphaObj = (first, last) => {
  let scores = {}
  first = first.charCodeAt(0)
  last = last.charCodeAt(0)
  let size = Math.abs(first - last) + 1
  for (let i = 1; i <= size; i++) {
    scores[String.fromCharCode(first)] = i
    first++
  }
  return scores
}

const genAlphaArr = (first, last) => {
  let scores = []
  first = first.charCodeAt(0)
  last = last.charCodeAt(0)
  while (first <= last) {
    scores.push(String.fromCharCode(first))
    first++
  }
  return scores
}

module.exports = {
  genAlphaArr,
  genAlphaObj
}