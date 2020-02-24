/**
 * @param {number[]} height
 * @return {number}
 */
function trap(height) {
  const length = height.length
  let left = []
  let right = []
  let water = 0
  // left to right
  for (let i = 0; i < length; i++) {
    if (i === 0) {
      left[i] = height[i]
    } else {
      left[i] = Math.max(left[i - 1], height[i])
    }
  }
  // right to left
  for (let i = length - 1; i >= 0; i--) {
    if (i === length - 1) {
      right[i] = height[i]
    } else {
      right[i] = Math.max(right[i + 1], height[i])
    }
  }
  for (let i = 0; i < length; i++) {
    water += Math.min(left[i], right[i]) - height[i]
  }

  return water
}
