/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
  let start = 0
  let end = nums.length // target > nums[nums.length - 1]

  while (start < end) {
    let mid = Math.floor((start + end) / 2)

    if (target === nums[mid]) {
      return mid
    } else if (target > nums[mid]) {
      start = mid + 1
    } else if (target < nums[mid]) {
      end = mid
    }
  }

  return end
}

export default searchInsert

// const searchInsert = (nums, target) => {
//   let numsLen = nums.length
//   if (target > nums[numsLen - 1]) return numsLen
//   for (let i = 0; i < numsLen; i++) {
//     if (target <= nums[i]) {
//       return i
//     }
//   }
// }
