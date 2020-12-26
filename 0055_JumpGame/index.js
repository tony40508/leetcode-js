/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canJump(nums) {
  if (nums.length < 2) return true

  let max = 0

  for (const [i, num] of nums.entries()) {
    if (i > max) return false
    max = Math.max(max, num + i)
    if (max >= nums.length - 1) return true
  }
}

console.log(canJump([3, 2, 1, 0, 4]))

// function canJump(nums) {
//   const l = nums.length
//   const lastIndex = l - 1

//   if (l < 2) return true

//   const a = Array.from({ length: l }, () => false)
//   a[lastIndex] = true

//   // right to left (reduce complexity)
//   for (let i = lastIndex - 1; i >= 0; i--) {
//     if (i + nums[i] >= lastIndex) {
//       a[i] = true
//       continue
//     }
//     // if can't reach the last index, it should depend on right element (within max jump length it can reach)
//     for (let j = nums[i]; j >= 1; j--) {
//       if (a[i + j]) {
//         a[i] = true
//         break
//       }
//     }
//   }

//   return a[0]
// }
