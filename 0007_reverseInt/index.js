export const reverseInt = x => {
  const min = -Math.pow(2, 31)
  const max = Math.pow(2, 31) - 1
  const sign = x > 0 ? 1 : -1

  const reverseNum =
    Math.abs(x)
      .toString()
      .split('')
      .reverse()
      .join('') * sign
  if (reverseNum < min || reverseNum > max) {
    return 0
  }
  return reverseNum
}
