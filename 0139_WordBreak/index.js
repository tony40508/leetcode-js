/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
function wordBreak(s, wordDict) {
  const map = wordDict.reduce((acc, cur) => {
    acc[cur] = true
    return acc
  }, {})

  // dp[0] = true
  const dp = Array.from({ length: s.length + 1 }, (_, i) =>
    i === 0 ? true : false
  )

  // 0 <= j < i
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j <= i - 1; j++) {
      // dp[j] (left) && map[s.substring(j, i) (right)
      if (dp[j] && map[s.substring(j, i)]) {
        dp[i] = true
        break
      }
    }
  }

  return dp[s.length]
}
