/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canJump(nums) {
  const l = nums.length
  const lastIndex = l - 1

  if (l < 2) return true

  const a = Array.from({ length: l }, () => false)
  a[lastIndex] = true

  // right to left (reduce complexity)
  for (let i = lastIndex - 1; i >= 0; i--) {
    if (i + nums[i] >= lastIndex) {
      a[i] = true
      continue
    }
    // if can't reach the last index, it should depend on right element (within max jump length it can reach)
    for (let j = nums[i]; j >= 1; j--) {
      if (a[i + j]) {
        a[i] = true
        break
      }
    }
  }

  return a[0]
}
