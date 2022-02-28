/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  let uniqueNum
  let lastIndex = 0
  for (const num of nums) {
    if (num !== uniqueNum) {
      uniqueNum = num
      nums[lastIndex] = num
      lastIndex++
    }
  }
  return lastIndex
}

// To avoid reorder the array, we should splice the array from last item
const removeDuplicates = (nums) => {
  let lastIndex = nums.length - 1
  for (let i = lastIndex; i >= 0; i--) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1)
    }
  }
  return nums.length
}

// const removeDuplicates = nums => {
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i] === nums[i + 1]) {
//       nums.splice(i, 1)
//       removeDuplicates(nums)
//     }
//   }
// }
