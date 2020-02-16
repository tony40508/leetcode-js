/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 * 'M' represents an unrevealed mine
 * 'E' represents an unrevealed empty square
 * 'B' represents a revealed blank square that has no adjacent
 * 'X' represents a revealed mine
 */
function updateBoard(board, click) {
  const directions = [
    [1, 0],
    [0, -1],
    [-1, 0],
    [0, 1],
    [1, 1],
    [1, -1],
    [-1, -1],
    [-1, 1]
  ]
  const rowLength = board.length
  const colLength = board[0].length

  let result = []
  board.forEach(row => {
    const cloneRow = row.slice()
    result = [...result, cloneRow]
  })
  const x = click[0]
  const y = click[1]

  if (board[x][y] === 'M') {
    result[x][y] = 'X'
  } else if (board[x][y] === 'E') {
    visit(x, y, {})
  }

  function isInsideBoard(x, y) {
    return x >= 0 && x < rowLength && y >= 0 && y < colLength
  }
  function visit(x, y, map) {
    if (map[`${x},${y}`]) return
    map[`${x},${y}`] = true
    let mines = 0
    for (const [dirX, dirY] of directions) {
      const nextX = x + dirX
      const nextY = y + dirY
      if (isInsideBoard(nextX, nextY) && board[nextX][nextY] === 'M') {
        mines++
      }
    }
    if (mines === 0) {
      result[x][y] = 'B'
      for (const [dirX, dirY] of directions) {
        const nextX = x + dirX
        const nextY = y + dirY
        if (isInsideBoard(nextX, nextY) && board[nextX][nextY] === 'E') {
          visit(nextX, nextY, map)
        }
      }
    } else {
      result[x][y] = `${mines}`
    }
  }

  return result
}
