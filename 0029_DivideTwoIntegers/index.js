function divide(dividend, divisor) {
  const MAX_SAFE_INTEGER = 2147483647
  const MIN_SAFE_INTEGER = -2147483648
  if (divisor === 0) {
    return 0
  } else if (divisor === 1) {
    return dividend
  } else if (divisor === -1) {
    if (dividend === MIN_SAFE_INTEGER) return MAX_SAFE_INTEGER
    return -dividend
  }
  const minus =
    (dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)
      ? true
      : false
  let DIVIDEND = Math.abs(dividend)
  let DIVISOR = Math.abs(divisor)
  let result = 0
  let count
  let temp
  while (DIVIDEND >= DIVISOR) {
    count = 1
    temp = DIVISOR
    while (temp <= DIVIDEND >> 1) {
      // >> 1 (divide 2) << 1 (multiple 2)
      // try (temp * 2) to close to (DIVIDEND / 2)
      temp = temp << 1
      count = count << 1
    }
    DIVIDEND = DIVIDEND - temp
    result += count
  }
  if (minus) result = -result
  return Math.min(MAX_SAFE_INTEGER, Math.max(result, MIN_SAFE_INTEGER))
}
