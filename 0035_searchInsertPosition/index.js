const searchInsert = (nums, target) => {
  let numsLen = nums.length
  if (target > nums[numsLen - 1]) return numsLen
  for (let i = 0; i < numsLen; i++) {
    if (target <= nums[i]) {
      return i
    }
  }
}
