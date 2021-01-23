/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
// 1 <= K <= 10 ^ 9
function shortestSubarray(A, K) {
  // sums.length = A.length + 1
  // const sums = A.reduce((acc, cur, idx) => [...acc, acc[idx] + cur], [0])
  const sums = [0]
  A.forEach((a, idx) => sums.push(sums[idx] + a))

  // store index
  const startPointCandidates = []
  let result = sums.length

  for (let j = 0; j < sums.length; j++) {
    // narrow candidates for reducing potential computation
    // 1. right to left in startPointCandidates for negative cases
    // e.g. A = [84,-37,32,40,95] K = 167
    while (
      startPointCandidates.length > 0 &&
      sums[j] - sums[startPointCandidates[startPointCandidates.length - 1]] < 1
    ) {
      // remove/pop needless candidate for shortestSubarray since K at least 1
      startPointCandidates.pop()
    }
    // 2. left to right in startPointCandidates
    while (
      startPointCandidates.length > 0 &&
      sums[j] - sums[startPointCandidates[0]] >= K
    ) {
      const firstCandidate = startPointCandidates.shift()
      result = Math.min(result, j - firstCandidate)
    }

    startPointCandidates.push(j)
  }

  return result < sums.length ? result : -1
}
