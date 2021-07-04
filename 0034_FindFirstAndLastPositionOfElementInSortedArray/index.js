/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
  const length = nums.length
  if (length === 0) return [-1, -1]

  function binarySearch(compare) {
    let left = 0
    let right = length - 1

    while (left < right) {
      const middle = Math.floor((left + right) / 2)

      if (compare(nums[middle], target)) {
        right = middle
      } else {
        left = middle + 1
      }
    }

    return left
  }

  const start = binarySearch((middle, target) => middle >= target)

  if (nums[start] !== target) return [-1, -1]

  const end = binarySearch((middle, target) => middle > target)

  // 10 !== 8
  if (nums[end] !== target) return [start, end - 1]

  return [start, end]
}

export default searchRange

// function searchRange(nums, target) {
//   const length = nums.length
//   function binarySearch(isFirst) {
//     let left = 0
//     let right = length
//     while (left < right) {
//       let middle = Math.floor((left + right) / 2)

//       if (nums[middle] > target || (isFirst && nums[middle] === target)) {
//         // making right pointer to be left(first) index
//         // when two pointers are at the same value
//         right = middle
//       } else {
//         left = middle + 1
//       }
//     }
//     // left and right at the same index
//     return left
//   }
//   const first = binarySearch(true)
//   if (first === length || nums[first] !== target) return [-1, -1]
//   const last = binarySearch(false)
//   // remember to minus one because line 14 plus one
//   return [first, last - 1]
// }
