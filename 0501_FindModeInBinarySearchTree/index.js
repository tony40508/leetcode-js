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
 * @return {number[]}
 */
function findMode(root) {
  if (!root) return []

  let count = 0
  let maxCount = 0
  let prevNodeVal = null
  let result = []

  function inOrderTraversal(node) {
    if (!node) return

    inOrderTraversal(node.left)

    if (prevNodeVal !== node.val) {
      prevNodeVal = node.val
      count = 1
    } else if (prevNodeVal === node.val) {
      count++
    }

    if (count > maxCount) {
      maxCount = count
      result = [node.val]
    } else if (count === maxCount) {
      result.push(node.val)
    }

    inOrderTraversal(node.right)
  }

  inOrderTraversal(root)

  return result
}
