/**
 * @param {number[]} nums
 * @return {number}
 */
// time: O(n)
// space: O(1)
function maxSubArray(nums) {
  let max = nums[0]
  let pre = nums[0] // previous accumulation

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i]
    pre = Math.max(num, pre + num)
    max = Math.max(max, pre)
  }

  return max
}

export default maxSubArray
