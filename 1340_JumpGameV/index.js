/**
 * @param {number[]} arr
 * @param {number} d
 * @return {number}
 */
function maxJumps(arr, d) {
  const cache = Array.from({ length: arr.length }, () => null)

  function reJumps(i) {
    if (cache[i]) return cache[i]

    let res = 1

    // right
    for (let j = i + 1; j < arr.length && j <= i + d && arr[i] > arr[j]; j++) {
      res = Math.max(res, 1 + reJumps(j))
    }
    // left
    for (let j = i - 1; j >= 0 && j >= i - d && arr[i] > arr[j]; j--) {
      res = Math.max(res, 1 + reJumps(j))
    }

    cache[i] = res

    return res
  }

  let result = 1
  arr.forEach((_, i) => {
    result = Math.max(result, reJumps(i))
  })

  return result
}
