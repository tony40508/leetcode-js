/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
function convert(s, numRows) {
  if (numRows === 1) return s

  let result = ''

  for (let row = 0; row < numRows; row++) {
    const gap = numRows + numRows - 2
    for (let i = row; i < s.length; i += gap) {
      // main column
      result += s[i]

      // skip row of top/bottom
      if (row > 0 && row < numRows - 1) {
        let midIndex = i + gap - row * 2
        if (s[midIndex]) {
          result += s[midIndex]
        }
      }
    }
  }

  return result
}

// numRows = 5
// P       H
// A     S
// Y   I
// P L
// A
