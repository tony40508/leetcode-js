function countNodes(root) {
  if (!root) return 0
  let leftRoot = root
  let rightRoot = root
  let leftDepth = 0
  let rightDepth = 0

  while (leftRoot) {
    leftDepth++
    leftRoot = leftRoot.left
  }
  while (rightRoot) {
    rightDepth++
    rightRoot = rightRoot.right
  }

  // full complete tree
  if (leftDepth === rightDepth) return Math.pow(2, leftDepth) - 1

  return countNodes(root.left) + countNodes(root.right) + 1
}
