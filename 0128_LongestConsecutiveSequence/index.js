/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums) {
  const length = nums.length
  if (!nums || length < 1) return 0

  nums.sort((a, b) => a - b)
  console.log('sorted nums', nums)

  let end = 1
  let result = 1

  while (end < length) {
    // cur is a cursor for consecutive elements
    let pre = end - 1
    let cur = end
    let repeat = 0
    console.log('=========')
    console.log('pre', pre)
    console.log('end', end)
    console.log('pre num', nums[pre])
    console.log('cur num', nums[cur])

    while (nums[pre] === nums[cur] || nums[pre] + 1 === nums[cur]) {
      if (nums[pre] === nums[cur]) {
        repeat++
      }
      pre = cur
      cur++
      console.log('---------')
      console.log('cur', cur)
      console.log('inner end', end)
      console.log('---------')
    }
    console.log('round result', cur - end + 1 - repeat)
    result = Math.max(result, cur - end + 1 - repeat)
    // make sure pre won't go behind end at beginning of next loop
    // next loop start with end + 1
    if (pre > end) end = pre
    end++
  }
  return result
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))

// sorted nums [ 1, 2, 3, 4, 100, 200 ]
//
// =========
// pre 0
// end 1
// pre num 1
// cur num 2
// ---------
// cur 2
// inner end 1
// ---------
// ---------
// cur 3
// inner end 1
// ---------
// ---------
// cur 4
// inner end 1
// ---------
// round result 4
// =========
// pre 3
// end 4
// pre num 4
// cur num 100
// round result 1
// =========
// pre 4
// end 5
// pre num 100
// cur num 200
// round result 1
//
// 4
