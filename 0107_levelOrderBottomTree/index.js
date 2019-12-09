function levelOrderBottom(root) {
  let result = []
  let level = 0
  function levelOrder(root, level) {
    if (root === null) return

    if (result[level]) {
      result[level].push(root.val)
    } else {
      result[level] = [root.val]
    }
    levelOrder(root.left, level + 1)
    levelOrder(root.right, level + 1)
  }
  levelOrder(root, level)
  return result.reverse()
}
