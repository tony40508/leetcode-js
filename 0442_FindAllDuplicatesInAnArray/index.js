function findDuplicates(nums) {
  let result = []
  for (const num of nums) {
    const NUM = Math.abs(num)
    if (nums[NUM - 1] < 0) {
      result = [...result, NUM] // not appear
    } else {
      nums[NUM - 1] = nums[NUM - 1] * -1 // have appeared
    }
  }
  return result
}

// space complexity: O(1)
// time complexity: O(N)
