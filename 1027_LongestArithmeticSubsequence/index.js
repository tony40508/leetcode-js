/**
 * @param {number[]} A
 * @return {number}
 */
function longestArithSeqLength(A) {
  const dp = {}
  /**
   * { [diff]: [] }
   */

  /** left to right */
  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      const diff = A[j] - A[i]
      if (!dp[diff]) dp[diff] = Array.from({ length: A.length }, () => 1)
      /** j will be i in sebsequent iteration */
      dp[diff][j] = dp[diff][i] + 1
    }
  }

  const longestLengthInEachArray = Object.values(dp).map((arr) =>
    Math.max(...arr)
  )

  return Math.max(...longestLengthInEachArray)
}
