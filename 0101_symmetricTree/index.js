// Depth-First search
function isSymmetric(root) {
  if (!root) return true

  function isSym(rootLeft, rootRight) {
    if (rootLeft === null && rootRight === null) return true
    if (rootLeft === undefined && rootRight === undefined) return true
    if (rootLeft === null || rootRight === null) return false
    if (rootLeft.val !== rootRight.val) return false
    return (
      // rootLeft.val === rootRight.val
      isSym(rootLeft.left, rootRight.right) &&
      isSym(rootLeft.right, rootRight.left)
    )
  }
  return isSym(root.left, root.right)
}
