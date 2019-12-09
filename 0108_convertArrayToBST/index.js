function sortedArrayToBST(nums) {
  if (nums.length === 0) return null
  let middle = Math.floor(nums.length / 2)
  let root = new TreeNode(nums[middle])
  // left: 0 to middle - 1
  // root: middle
  // right: middle + 1
  root.left = sortedArrayToBST(nums.slice(0, middle))
  root.right = sortedArrayToBST(nums.slice(middle + 1))
  return root
}
