/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
  const colLength = grid.length
  const rowLength = grid[0] ? grid[0].length : 0

  function DFS(col, row) {
    if (
      col < 0 ||
      col >= colLength ||
      row < 0 ||
      row >= rowLength ||
      grid[col][row] == 0
      // can't use strict squality since outer params are number (test inputs are string)
    ) {
      return
    }
    grid[col][row] = 0 // 1 -> 0 (found)
    DFS(col - 1, row)
    DFS(col, row - 1)
    DFS(col + 1, row)
    DFS(col, row + 1)
  }
  let result = 0
  for (let col = 0; col < colLength; col++) {
    for (let row = 0; row < rowLength; row++) {
      // can't use strict squality since outer params are number (test inputs are string)
      if (grid[col][row] == 1) {
        result++
        DFS(col, row)
      }
    }
  }
  return result
}

console.log(
  numIslands([
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0']
  ])
)
