function searchRange(nums, target) {
  const length = nums.length
  function binarySearch(isFirst) {
    let left = 0
    let right = length
    while (left < right) {
      let middle = Math.floor((left + right) / 2)

      if (nums[middle] > target || (isFirst && nums[middle] === target)) {
        // making right pointer to be left(first) index
        // when two pointers are at the same value
        right = middle
      } else {
        left = middle + 1
      }
    }
    // left and right at the same index
    return left
  }
  const first = binarySearch(true)
  if (first === length || nums[first] !== target) return [-1, -1]
  const last = binarySearch(false)
  // remember to minus one because line 14 plus one
  return [first, last - 1]
}
