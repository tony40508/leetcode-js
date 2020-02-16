/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
  const rowLength = grid.length
  const colLength = grid[0] ? grid[0].length : 0

  function DFS(row, col) {
    if (
      row < 0 ||
      row >= rowLength ||
      col < 0 ||
      col >= colLength ||
      grid[row][col] == 0
      // can't use strict squality since outer params are number (test inputs are string)
    ) {
      return
    }
    grid[row][col] = 0 // 1 -> 0 (found)
    DFS(row - 1, col)
    DFS(row, col - 1)
    DFS(row + 1, col)
    DFS(row, col + 1)
  }
  let result = 0
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      // can't use strict squality since outer params are number (test inputs are string)
      if (grid[row][col] == 1) {
        result++
        DFS(row, col)
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
