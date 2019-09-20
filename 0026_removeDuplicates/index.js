// const removeDuplicates = nums => {
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i] === nums[i + 1]) {
//       nums.splice(i, 1)
//       removeDuplicates(nums)
//     }
//   }
// }

// To avoid reorder the array, we should splice the array from last item
const removeDuplicates = nums => {
  for (let i = nums.length; i > 0; i--) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1)
    }
  }
}
