export const myAtoi = str => {
  const min = -Math.pow(2, 31)
  const max = Math.pow(2, 31) - 1
  let i = 0
  let sign = 1
  let ans = 0

  while (str.charAt(i) === ' ') {
    i++
  }
  if (str.charAt(i) === '+') {
    i++
  } else if (str.charAt(i) === '-') {
    sign = -1
    i++
  }
  while (str.charAt(i) >= '0' && str.charAt(i) <= '9') {
    ans = ans * 10 + parseInt(str.charAt(i), 10)
    if (ans * sign >= max) {
      return max
    } else if (ans * sign <= min) {
      return min
    }
    i++
  }
  return ans * sign
}
