/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 *
 * 1. 0 < nums.length <= 50000
 * 2. 0 < nums[i] < 1000
 * 2. 0 <= k < 10^6
 */
function numSubarrayProductLessThanK(nums, k) {
  if (k <= 1) return 0
  let result = 0
  let start = 0
  let end = 0
  let product = 1
  const length = nums.length

  while (end < length) {
    const num = nums[end]
    product *= num
    console.log('==========')
    console.log('product', product)
    console.log('start', start)
    console.log('end', end)
    while (product >= k) {
      // move slide window
      product /= nums[start]
      start++
      console.log('inner product', product)
    }
    console.log('round result', end - start + 1)
    result += end - start + 1
    end++
  }

  return result
}

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100))

// ==========
// product 10
// start 0
// end 0
// round result 1
// ==========
// product 50
// start 0
// end 1
// round result 2
// ==========
// product 100
// start 0
// end 2
// inner product 10
// round result 2
// ==========
// product 60
// start 1
// end 3
// round result 3
//
// 8
