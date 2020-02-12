/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  const length = intervals.length
  let result = []
  let index = 0
  while (index < length) {
    const startInterval = intervals[index][0]
    let endInterval = intervals[index][1]
    index++
    while (index < length && intervals[index][0] <= endInterval) {
      // remember add `index < length` in while loop or intervals[index] will be undefined
      // because index will equal to length last time
      endInterval = Math.max(endInterval, intervals[index][1])
      index++
    }
    result = [...result, [startInterval, endInterval]]
  }
  return result
}
