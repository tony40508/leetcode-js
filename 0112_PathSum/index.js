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
 * @param {number} targetSum
 * @return {boolean}
 */
function hasPathSum(root, targetSum) {
  // preOrder
  function getPathSum(node, tempSum) {
    if (!node) return false

    if (!node.left && !node.right) {
      return node.val + tempSum === targetSum
    }

    return (
      getPathSum(node.left, tempSum + node.val) ||
      getPathSum(node.right, tempSum + node.val)
    )
  }

  return getPathSum(root, 0)
}
