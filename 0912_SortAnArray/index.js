function sortArray(nums) {
  const length = nums.length
  if (length < 2) {
    return nums
  }
  const pivotIndex = length - 1
  const pivot = nums[pivotIndex]
  let left = []
  let right = []

  for (let i = 0; i < pivotIndex; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i])
    } else {
      right.push(nums[i])
    }
  }
  return [...sortArray(left), pivot, ...sortArray(right)]
}

console.log(sortArray([5, 2, 3, 1]))
