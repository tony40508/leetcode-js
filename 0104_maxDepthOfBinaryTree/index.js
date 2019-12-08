function maxDepth(root) {
  if (root === null) return 0

  let left = maxDepth(root.left)
  let right = maxDepth(root.right)
  return maxDepth(left, right) + 1
}
