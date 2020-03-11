/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 1. Find first decreasing number
// 2. Find number just bigger than it (nums[i - 1])
// 3. Swap both of them
// 4. Reverse rest numbers
function nextPermutation(nums) {
  for (let i = nums.length - 1; i > 0; i--) {
    // 1
    if (nums[i] > nums[i - 1]) {
      let upNum = nums[i]
      let upIndex = i
      console.log('=========')
      console.log('upNum', upNum)
      console.log('upIndex', upIndex)

      // 2
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] > nums[i - 1] && nums[j] <= upNum) {
          upNum = nums[j]
          upIndex = j
          console.log('---------')
          console.log('upNums j', upNum)
          console.log('upIndex j', upIndex)
        }
      }

      // 3
      nums[upIndex] = nums[i - 1]
      nums[i - 1] = upNum

      // 4
      let rightPtr = nums.length - 1
      while (i < rightPtr) {
        const temp = nums[i]
        nums[i] = nums[rightPtr]
        nums[rightPtr] = temp
        console.log('~~~~~~~~~')
        console.log('i', i, 'nums[i]', nums[i])
        console.log('rightPtr', rightPtr, 'nums[rightPtr]', nums[rightPtr])

        i++
        rightPtr--
      }

      return
    }
  }

  console.log('nums', nums)
  console.log('reversed nums', nums.reverse())
  nums.reverse()
}

// console.log(nextPermutation([1, 2, 3]))
// =========
// upNum 3
// upIndex 2

// console.log(nextPermutation([3, 2, 1]))
// nums [ 3, 2, 1 ]
// reversed nums [ 1, 2, 3 ]

// console.log(nextPermutation([1, 1, 5]))
// =========
// upNum 5
// upIndex 2
