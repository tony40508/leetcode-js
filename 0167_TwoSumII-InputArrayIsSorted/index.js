/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
function twoSum(numbers, target) {
  const length = numbers.length
  let start = 0
  let end = length - 1

  while (start < end) {
    const sum = numbers[start] + numbers[end]
    if (sum === target) {
      return [start + 1, end + 1]
    } else if (sum < target) {
      start++
    } else {
      end--
    }
  }
}
