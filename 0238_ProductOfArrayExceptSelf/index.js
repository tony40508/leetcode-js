function productExceptSelf(nums) {
  const length = nums.length
  let result = new Array(length)
  result[0] = 1

  // left to right, from index 1
  for (let i = 1; i < length; i++) {
    result[i] = result[i - 1] * nums[i - 1]
  }
  // right to left, last index (length - 1)
  let right = 1
  for (let i = length - 1; i >= 0; i--) {
    result[i] = result[i] * right
    right = right * nums[i]
  }
  return result
}
