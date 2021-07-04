/**
 * @param {number[]} nums
 * @return {number[]}
 */

// map
function findDuplicates(nums) {
  const result = []
  const map = new Map()

  for (const num of nums) {
    if (map.has(num)) {
      result.push(num)
    } else {
      map.set(num, true)
    }
  }

  return result
}

// cyclic sort
function findDuplicates(nums) {
  let result = []
  for (const num of nums) {
    const NUM = Math.abs(num)
    if (nums[NUM - 1] < 0) {
      result = [...result, NUM] // duplicates
    } else {
      nums[NUM - 1] = nums[NUM - 1] * -1 // first appeared num * -1
    }
  }
  return result
}
// space complexity: O(1)
// time complexity: O(N)
