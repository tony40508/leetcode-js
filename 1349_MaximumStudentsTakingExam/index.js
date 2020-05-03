/**
 * @param {character[][]} seats
 * @return {number}
 */
function maxStudents(seats) {
  const row = seats.length
  const col = seats[0].length
  const memo = {}

  function DFS(seats, cur) {
    const key = seats.join('')
    if (memo[key]) return memo[key]

    let max = 0
    for (let pos = cur; pos < row * col; pos++) {
      const i = Math.floor(pos / col)
      const j = pos % col

      if (seats[pos] === '.') {
        seats[pos] = 'x'
        // choose to don't sit
        max = Math.max(max, DFS([...seats], pos + 1))
        // choose to sit
        if (j + 1 < col) {
          // right
          if (seats[i * col + j + 1] === '.') seats[i * col + j + 1] = 'x'
          // lower right
          if (i + 1 < row && seats[(i + 1) * col + j + 1] === '.')
            seats[(i + 1) * col + j + 1] = 'x'
        }
        if (j - 1 >= 0) {
          // left
          if (seats[i * col + j - 1] === '.') seats[i * col + j - 1] = 'x'
          // lower left
          if (i + 1 < row && seats[(i + 1) * col + j - 1] === '.')
            seats[(i + 1) * col + j - 1] = 'x'
        }

        max = Math.max(max, 1 + DFS([...seats], pos + 1))
      }
    }

    memo[key] = max
    return max
  }

  // convert to one dimension array
  // seats.flat()
  const flattenSeats = [].concat(...seats)
  return DFS(flattenSeats, 0)
}

console.log(
  maxStudents([
    ['.', '#', '#', '.'],
    ['.', '.', '.', '#'],
    ['.', '.', '.', '.'],
    ['#', '.', '#', '#'],
  ])
)
