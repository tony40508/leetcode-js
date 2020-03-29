/**
 * @param {number[][]} grid
 * @return {number}
 */
function minCost(grid) {
  const rowLen = grid.length
  const colLen = grid[0].length

  // 0: right, 1: left, 2: down, 3: up
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]
  const result = {}
  const queue = [] // [position, cost]

  function DFS(x, y, cost) {
    const key = `${x},${y}`
    if (result[key] !== undefined) return

    result[key] = cost
    queue.push([x, y, cost])

    const nextDir = dirs[grid[x][y] - 1]
    const nextX = x + nextDir[0]
    const nextY = y + nextDir[1]

    if (nextX >= 0 && nextX < rowLen && nextY >= 0 && nextY < colLen) {
      DFS(nextX, nextY, cost)
    }
  }

  DFS(0, 0, 0)

  while (queue.length > 0) {
    const [x, y, cost] = queue.shift()

    // try 4 directions
    for (const dir of dirs) {
      const nextX = x + dir[0]
      const nextY = y + dir[1]

      if (
        nextX >= 0 &&
        nextX < rowLen &&
        nextY >= 0 &&
        nextY < colLen &&
        !result[`${nextX},${nextY}`]
      ) {
        // mark as cost + 1
        DFS(nextX, nextY, cost + 1)
      }
    }
  }

  return result[`${rowLen - 1},${colLen - 1}`]
}

console.log(
  minCost([
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [1, 1, 1, 1],
    [2, 2, 2, 2],
  ])
)
