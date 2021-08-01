/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// function rotate(nums, k) {
//   // Time Limit Exceeded
//   while (k--) {
//     const num = nums.pop()
//     nums.unshift(num)
//   }
// }

function rotate(nums, k) {
  let result = []

  for (let i = 0; i < nums.length; i++) {
    const offsetIndex = (i + k) % nums.length
    result[offsetIndex] = nums[i]
  }

  // overwrite nums
  for (let i = 0; i < nums.length; i++) {
    nums[i] = result[i]
  }
}
