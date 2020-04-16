/**
 * @param {string} s
 * @return {number}
 */
function numberOfSubstrings(s) {
  const slidingWindows = { a: 0, b: 0, c: 0 }
  let result = 0
  let start = 0
  let end = 0

  while (end < s.length) {
    const char = s[end]
    slidingWindows[char]++

    while (
      start < s.length &&
      slidingWindows['a'] > 0 &&
      slidingWindows['b'] > 0 &&
      slidingWindows['c'] > 0
    ) {
      slidingWindows[s[start]]--
      start++
    }

    result += start
    end++
  }
  return result
}
