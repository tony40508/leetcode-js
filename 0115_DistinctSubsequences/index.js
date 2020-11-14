/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
function numDistinct(s, t) {
  const iLength = s.length
  const jLength = t.length
  const dp = []

  for (let i = 0; i <= iLength; i++) {
    dp.push(createArray({ length: jLength + 1, value: 0 }))
    dp[i][0] = 1
  }

  for (let i = 1; i <= iLength; i++) {
    for (let j = 1; j <= jLength; j++) {
      // if last one match
      if (s[i - 1] === t[j - 1]) {
        // dp[i - 1][j - 1]: remain last one
        // dp[i - 1][j]:     delete last one in s
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
      } else {
        // if not match, only delete
        dp[i][j] = dp[i - 1][j]
      }
    }
  }

  return dp[iLength][jLength]
}

const createArray = ({ length, value }) => Array.from({ length }, () => value)
