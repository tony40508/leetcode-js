/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isValidBST(root) {
  function isValid(root, min, max) {
    if (!root) return true

    const val = root.val
    const left = root.left
    const right = root.right
    if (val <= min || val >= max) return false
    // left should be smaller than val(parent), so put val to max
    // right should be bigger than val(parent), so put val to min
    return isValid(left, min, val) && isValid(right, val, max)
  }

  return isValid(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
}
