/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
function numOfSubarrays(arr, k, threshold) {
  let slidingWindow = arr.reduce((acc, cur, i) => {
    if (i >= k) return acc
    return acc + cur
  }, 0)

  let i = k
  let count = 0

  while (i < arr.length) {
    if (slidingWindow / k >= threshold) count++
    slidingWindow += arr[i]
    slidingWindow -= arr[i - k]
    i++
  }

  if (slidingWindow / k >= threshold) count++

  return count
}
