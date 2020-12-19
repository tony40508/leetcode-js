/**
 * @param {string} S
 * @return {number}
 */
function minAddToMakeValid(S) {
  const stack = []

  for (const s of S) {
    if (s === ')' && stack[stack.length - 1] === '(') {
      stack.pop()
    } else {
      stack.push(s)
    }
  }

  return stack.length
}
