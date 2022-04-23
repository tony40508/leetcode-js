/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 */
function maxSideLength(mat, threshold) {
  const m = mat.length
  const n = mat[0].length

  const dp = [] // (m+1)x(n+1)
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1).fill(0)
  }

  // calc sum and reuse in dp
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] =
        dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1] + mat[i - 1][j - 1] // minus overlap of dp
    }
  }

  const getSum = (i, j, length) =>
    dp[i][j] -
    dp[i - length][j] -
    dp[i][j - length] +
    dp[i - length][j - length]

  let maxSideLength = 0
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      let curSideLength = maxSideLength
      while (i - curSideLength >= 0 && j - curSideLength >= 0) {
        if (getSum(i, j, curSideLength) > threshold) break
        maxSideLength = Math.max(maxSideLength, curSideLength)
        curSideLength++
      }
    }
  }

  return maxSideLength
}
