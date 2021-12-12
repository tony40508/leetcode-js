/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
  const rowSet = new Set()
  const colSet = new Set()
  const boxSet = new Set()

  // board[row][col]
  for (let i = 0; i < board.length; i++) {
    const row = board[i]
    for (let j = 0; j < row.length; j++) {
      const rowNumber = board[i][j]
      if (rowNumber !== '.') {
        if (rowSet.has(rowNumber)) return false
        rowSet.add(rowNumber)
      }

      const colNumber = board[j][i]
      if (colNumber !== '.') {
        if (colSet.has(colNumber)) return false
        colSet.add(colNumber)
      }

      // https://youtu.be/qPLYKr7HdKU?t=239
      const boxNumber =
        board[Math.floor(i / 3) * 3 + Math.floor(j / 3)][
          ((i * 3) % 9) + (j % 3)
        ]
      if (boxNumber !== '.') {
        if (boxSet.has(boxNumber)) return false
        boxSet.add(boxNumber)
      }
    }

    rowSet.clear()
    colSet.clear()
    boxSet.clear()
  }

  return true
}
