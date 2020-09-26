/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
function intervalIntersection(A, B) {
  let a = 0
  let b = 0
  const result = []

  while (a < A.length && b < B.length) {
    const interval = intersection(A[a], B[b])
    if (interval) result.push(interval)
    const aEnd = A[a][1]
    const bEnd = B[b][1]
    if (aEnd < bEnd) {
      a++
    } else {
      b++
    }
  }

  return result
}

function intersection([aStart, aEnd], [bStart, bEnd]) {
  if (aEnd < bStart || bEnd < aStart) return null
  const start = Math.max(aStart, bStart)
  const end = Math.min(aEnd, bEnd)
  return [start, end]
}
