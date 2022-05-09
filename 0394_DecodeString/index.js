/**
 * @param {string} s
 * @return {string}
 */
function decodeString(s) {
  const stack = []

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ']') {
      stack.push(s[i])
    } else {
      let str = ''
      while (stack[stack.length - 1] !== '[') {
        str = stack.pop() + str
      }

      stack.pop() // '['

      let num = ''
      while (!Number.isNaN(+stack[stack.length - 1])) {
        num = stack.pop() + num
      }

      stack.push(...str.repeat(+num)) // nested case: "3[a2[c]]"
    }
  }

  return stack.join('')
}
