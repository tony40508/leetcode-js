function findDisappearedNumbers(nums) {
  const length = nums.length
  if (!length) return []

  const map = {}
  nums.forEach(num => (map[num] = true))
  let result = []
  for (let i = 1; i <= length; i++) {
    if (!map[i]) result = [...result, i]
  }
  return result
}
