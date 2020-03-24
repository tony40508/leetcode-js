/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function longestZigZag(root) {
  let result = 0

  // bottom-up
  function postOrder(node) {
    if (!node) return [-1, -1]
    const left = postOrder(node.left)
    const right = postOrder(node.right)

    // ZigZag path
    const childLeft = left[1] + 1 // grandChildRight
    const childRight = right[0] + 1 // grandChildLeft

    result = Math.max(result, childLeft, childRight)
    return [childLeft, childRight]
  }
  postOrder(root)

  return result
}
