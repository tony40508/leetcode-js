/**
 * @param {number[]} nums
 * @return {number[]}
 */

// map
function findDisappearedNumbers(nums) {
  const length = nums.length
  if (!length) return []

  const result = []
  const map = new Map()

  nums.forEach((num) => {
    map.set(num, true)
  })

  for (let i = 1; i <= length; i++) {
    if (!map.has(i)) {
      result.push(i)
    }
  }

  return result
}

// cyclic sort
function findDisappearedNumbers(nums) {
  const length = nums.length
  if (!length) return []

  nums.forEach((num) => {
    const NUM = Math.abs(num)
    if (nums[NUM - 1] > 0) {
      nums[NUM - 1] *= -1
    }
  })
  let result = []
  for (let i = 1; i <= length; i++) {
    if (nums[i - 1] > 0) {
      result = [...result, i]
    }
  }
  return result
}
// input: [4,3,2,7,8,2,3,1]
// nums: [ -4, -3, -2, -7, 8, 2, -3, -1 ]
// result: [5,6]
