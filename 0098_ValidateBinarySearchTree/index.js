function isValidBST(root) {
  function isValid(root, min, max) {
    // must at first line to prevent null
    if (!root) return true
    const val = root.val
    const left = root.left
    const right = root.right
    if (val <= min || val >= max) return false
    // left should be smaller than val(parent), so put val to max
    // right should be bigger than val(parent), so put val to min
    if (!isValid(left, min, val)) return false
    if (!isValid(right, val, max)) return false
    return true
  }
  // return isValid(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
  return isValid(root)
}
