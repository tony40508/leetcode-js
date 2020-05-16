/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
function canReach(arr, start) {
  function DFS(index) {
    if (index < 0 || index >= arr.length || arr[index] < 0) {
      return false
    }
    if (arr[index] === 0) return true

    // visited index
    arr[index] = -arr[index]

    return DFS(index + arr[index]) || DFS(index - arr[index])
  }

  return DFS(start)
}
