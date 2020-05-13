/**
 * @param {number[]} nums
 * @return {number}
 */
function jump(nums) {
  if (nums.length < 2) return 0

  // max index can reach from current index
  let maxIndex = 0 + nums[0]
  let step = 1
  let maxIndexWithSteps = maxIndex

  // Greed: left to right
  for (const i of nums.keys()) {
    if (maxIndexWithSteps < i) {
      // need one more step, so step++
      step++
      // previous index can reach represents current index also can reach
      maxIndexWithSteps = maxIndex
    }

    maxIndex = Math.max(maxIndex, i + nums[i])
  }

  return step
}
