/**
 * @param {number[]} nums
 * @return {number[]}
 */
// time: O(n)
// space: O(n)
function sortedSquares(nums) {
  let start = 0
  let end = nums.length - 1
  const result = []

  while (start <= end) {
    const startPowTwo = Math.pow(nums[start], 2)
    const endPowTwo = Math.pow(nums[end], 2)

    if (startPowTwo < endPowTwo) {
      result.unshift(endPowTwo)
      end--
    } else {
      result.unshift(startPowTwo)
      start++
    }
  }

  return result
}

// time: O(nlogn)
// space: O(n)
// function sortedSquares(nums) {
//   const result = []

//   for (const num of nums) {
//     result.push(num * num)
//   }

//   return result.sort((a, b) => a - b)
// }
