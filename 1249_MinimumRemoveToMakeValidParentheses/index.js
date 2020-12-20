/**
 * @param {string} s
 * @return {string}
 */
function minRemoveToMakeValid(s) {
  const stack = []
  const result = [...s]

  result.forEach((r, i) => {
    if (r == '(') {
      stack.push(i)
    } else if (r === ')') {
      stack.length > 0 ? stack.pop() : delete result[i]
    }
  })

  while (stack.length) {
    const popIndex = stack.pop()
    delete result[popIndex]
  }

  return result.join('')
}
