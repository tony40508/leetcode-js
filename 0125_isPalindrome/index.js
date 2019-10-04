const isPalindrome = s => {
  if (s.length < 0) return
  const validStr = s.toLowerCase().replace(/[^\w]/g, '')
  const reversedStr = validStr
    .split('')
    .reverse()
    .join('')
  return validStr === reversedStr
}
