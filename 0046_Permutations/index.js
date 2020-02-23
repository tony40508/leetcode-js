/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
  function backTrack(set, path) {
    // base case: path is full
    if (path.length === nums.length) {
      set.add([...path])
      return set
    }
    // loop to try nums in current depth
    for (const num of nums) {
      // guard to prevent repeating numbers in the path
      if (path.includes(num)) continue
      path.push(num)
      backTrack(set, path)
      console.log('=======start========')
      console.log(path)
      path.splice(path.length - 1, 1)
      console.log(path)
      console.log('========end=========')
      // backTrack: remove last one to search for other possibilities
    }
    return set
  }
  // return an array
  return [...backTrack(new Set(), [])]
}

// =======start========
// [ 1, 2, 3 ]
// [ 1, 2 ]
// ========end=========
// =======start========
// [ 1, 2 ]
// [ 1 ]
// ========end=========
// =======start========
// [ 1, 3, 2 ]
// [ 1, 3 ]
// ========end=========
// =======start========
// [ 1, 3 ]
// [ 1 ]
// ========end=========
// =======start========
// [ 1 ]
// []
// ========end=========
// =======start========
// [ 2, 1, 3 ]
// [ 2, 1 ]
// ========end=========
// =======start========
// [ 2, 1 ]
// [ 2 ]
// ========end=========
// =======start========
// [ 2, 3, 1 ]
// [ 2, 3 ]
// ========end=========
// =======start========
// [ 2, 3 ]
// [ 2 ]
// ========end=========
// =======start========
// [ 2 ]
// []
// ========end=========
// =======start========
// [ 3, 1, 2 ]
// [ 3, 1 ]
// ========end=========
// =======start========
// [ 3, 1 ]
// [ 3 ]
// ========end=========
// =======start========
// [ 3, 2, 1 ]
// [ 3, 2 ]
// ========end=========
// =======start========
// [ 3, 2 ]
// [ 3 ]
// ========end=========
// =======start========
// [ 3 ]
// []
// ========end=========
