function exist(board, word) {
  if (word === '') return true
  const length = board.length

  for (let row = 0; row < length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (dfsSearch(0, row, col)) return true
    }
  }
  return false

  function dfsSearch(index, row, col) {
    // match exact word (end of recursion)
    if (index === word.length) return true
    if (!board[row] || !board[row][col]) return false

    if (board[row][col] === word[index] && board[row][col] !== 'x') {
      const char = board[row][col]
      // marker
      board[row][col] = 'x'
      if (
        dfsSearch(index + 1, row - 1, col) ||
        dfsSearch(index + 1, row + 1, col) ||
        dfsSearch(index + 1, row, col - 1) ||
        dfsSearch(index + 1, row, col + 1)
      )
        return true
      // backtracking
      board[row][col] = char
    }
    return false
  }
}
