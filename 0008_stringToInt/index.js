/**
 * @param {string} str
 * @return {number}
 */
function myAtoi(str) {
  const min = -Math.pow(2, 31)
  const max = Math.pow(2, 31) - 1
  let i = 0
  let sign = 1
  let ans = 0

  // should use while rather than if
  while (str[i] === ' ') {
    i++
  }

  if (str[i] === '+') {
    i++
  } else if (str[i] === '-') {
    sign = -1
    i++
  }

  // /[0-9]/.test(s[i])
  while (str[i] >= '0' && str[i] <= '9') {
    ans = ans * 10 + parseInt(str[i], 10)

    if (ans * sign >= max) {
      return max
    } else if (ans * sign <= min) {
      return min
    }

    i++
  }

  return ans * sign
}

export { myAtoi }
