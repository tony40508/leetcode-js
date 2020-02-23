/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
function combine(n, k) {
  function backTrack(set, path) {
    const length = path.length
    if (path.length === k) {
      set.add([...path])
      return
    }
    // start counting from last number plus one
    let start = length === 0 ? 1 : path[length - 1] + 1
    for (let i = start; i <= n; i++) {
      path.push(i)
      backTrack(set, path)
      console.log('=======start========')
      console.log(path)
      path.splice(path.length - 1, 1) // can't pass length because path has been mutated
      console.log(path)
      console.log('========end=========')
    }
    return set
  }
  return [...backTrack(new Set(), [])]
}

// =======start========
// [ 1, 2 ]
// [ 1 ]
// ========end=========
// =======start========
// [ 1, 3 ]
// [ 1 ]
// ========end=========
// =======start========
// [ 1, 4 ]
// [ 1 ]
// ========end=========
// =======start========
// [ 1 ]
// []
// ========end=========
// =======start========
// [ 2, 3 ]
// [ 2 ]
// ========end=========
// =======start========
// [ 2, 4 ]
// [ 2 ]
// ========end=========
// =======start========
// [ 2 ]
// []
// ========end=========
// =======start========
// [ 3, 4 ]
// [ 3 ]
// ========end=========
// =======start========
// [ 3 ]
// []
// ========end=========
// =======start========
// [ 4 ]
// []
// ========end=========
