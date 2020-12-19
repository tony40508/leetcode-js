/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
function validateStackSequences(pushed, popped) {
  const stack = []
  let popIndex = 0

  for (const push of pushed) {
    stack.push(push)
    while (stack.length > 0 && stack[stack.length - 1] === popped[popIndex]) {
      stack.pop()
      popIndex++
    }
  }

  return stack.length === 0
}

/* stack      popped
 * 1          4
 * 12         4
 * 123        4
 * 1234       4   stack.pop() popIndex++
 * 123        5
 * 1235       5   stack.pop() popIndex++
 * 123        3   stack.pop() popIndex++
 * 12         2   stack.pop() popIndex++
 * 1          1   stack.pop() popIndex++
 */
