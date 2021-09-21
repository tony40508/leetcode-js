/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  nums.sort((a, b) => a - b)
  const result = []

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break
    if (nums[i] === nums[i - 1]) continue // skip already handled value

    let start = i + 1
    let end = nums.length - 1

    while (start < end) {
      const sum = nums[i] + nums[start] + nums[end]
      if (sum === 0) {
        result.push([nums[i], nums[start], nums[end]])

        // skip same value first
        while (start < end && nums[start] === nums[start + 1]) {
          start++
        }
        while (start < end && nums[end] === nums[end - 1]) {
          end--
        }
        start++
        end--
      } else if (sum < 1) {
        start++
      } else {
        // sum > 0
        end--
      }
    }
  }

  return result
}

export default threeSum
