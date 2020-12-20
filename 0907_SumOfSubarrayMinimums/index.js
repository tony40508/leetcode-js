/**
 * @param {number[]} arr
 * @return {number}
 */
const mod = 10 ** 9 + 7
function sumSubarrayMins(arr) {
  let stack = []
  const left = []
  arr.forEach((a, i) => {
    while (stack.length > 0 && arr[stack[stack.length - 1]] >= a) {
      stack.pop()
    }
    // if stack is empty, it means left side is bigger than a
    left[i] = stack.length === 0 ? i + 1 : i - stack[stack.length - 1]
    stack.push(i)
  })

  stack = []
  const right = []
  const reversedArr = [...arr].reverse()
  reversedArr.forEach((a, index) => {
    const i = arr.length - 1 - index
    while (stack.length > 0 && arr[stack[stack.length - 1]] > a) {
      stack.pop()
    }
    // if stack is empty, it means right side is bigger than a
    right[i] = stack.length === 0 ? arr.length - i : stack[stack.length - 1] - i
    stack.push(i)
  })

  let result = 0
  arr.forEach((a, i) => {
    result += left[i] * right[i] * a
    result %= mod
  })

  return result
}
