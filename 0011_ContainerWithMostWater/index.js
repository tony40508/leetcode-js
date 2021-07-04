/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
  let start = 0
  let end = height.length - 1
  let resultArea = 0

  while (start < end) {
    const startHeight = height[start]
    const endHeight = height[end]
    const minHeight = Math.min(startHeight, endHeight)
    const currentArea = (end - start) * minHeight
    resultArea = Math.max(resultArea, currentArea)

    if (startHeight < endHeight) {
      start++
    } else {
      end--
    }
  }

  return resultArea
}
