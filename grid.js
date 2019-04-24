let genGrid = (rows, cols, val) => {
  let grid = []
  for (let i = 0; i < rows; i++) {
    grid.push([])
    for (let j = 0; j < cols; j++) {
      grid[i].push(val)
    }
  }
  return grid
}

module.exports = {
  genGrid
}