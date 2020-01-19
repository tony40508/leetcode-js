function longestConsecutive(nums) {
  const length = nums.length
  if (!nums || length < 1) return 0

  nums.sort((a, b) => a - b)

  let i = 0
  let result = 1
  // pre === i
  // cur === i + 1
  while (i < length - 1) {
    let pre = i
    let cur = i + 1
    let repeat = 0
    while (nums[pre] === nums[cur] || nums[pre] + 1 === nums[cur]) {
      if (nums[pre] === nums[cur]) {
        repeat++
      }
      pre = cur
      cur++
    }
    result = Math.max(result, pre - i + 1 - repeat)
    // make sure pre won't go behind i at beginning of next loop
    // next loop start with pre + 1
    if (pre > i) i = pre
    i++
  }
  return result
}
