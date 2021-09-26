/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// time: Ｏ(2^n * n)
// space: Ｏ(2^n * n)
function subsets(nums) {
  const subsets = [[]]

  for (const num of nums) {
    const length = subsets.length // 1, 1, 2, 4, 8...
    for (let i = 0; i < length; i++) {
      const subset = [...subsets[i], num]
      subsets.push(subset)
    }
  }

  return subsets
}
