/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
  let i = 0
  for (const num of nums) {
    if (num !== val) {
      nums[i] = num
      i++
    }
  }
  return i
}

// splice, unshift, shift need to re-order elements (less effective operations)
// function removeElement(nums, val) {
//   for (let i = nums.length; i > 0; i--) {
//     if (nums[i] === val) {
//       nums.splice(i, 1)
//     }
//   }
// }

// function removeElement(nums, val) {
//   let start = 0
//   let end = nums.length - 1

//   while (start <= end) {
//     if (nums[end] === val) {
//       nums.pop()
//       end--
//       continue
//     }
//     if (nums[start] === val) {
//       // move `end` item to `start` and skip it afterward (start++)
//       // since `end` is checked first (it's safe)
//       // then remove last one to pretend removing `start` (prevent re-ordering)
//       nums[start] = nums[end]
//       nums.pop()
//       start++
//       end--
//       continue
//     }
//     start++
//   }
//   // order is not important since we only need to return length
//   return nums.length
// }
