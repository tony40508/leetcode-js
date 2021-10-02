/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// time: O(logN)
// space: O(1) since it's a constant space solution
function search(nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const midIndex = Math.floor((left + right) / 2)
    const midNum = nums[midIndex]

    if (target > midNum) {
      left = midIndex + 1
    } else if (target < midNum) {
      right = midIndex - 1
    } else {
      return midIndex
    }
  }

  return -1
}
