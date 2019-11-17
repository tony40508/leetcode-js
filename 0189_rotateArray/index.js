function rotate(nums, k) {
  let res = []
  for (let i of nums.keys()) {
    res[(i + k) % nums.length] = nums[i]
  }
  for (let i of nums.keys()) {
    nums[i] = res[i]
  }
}
