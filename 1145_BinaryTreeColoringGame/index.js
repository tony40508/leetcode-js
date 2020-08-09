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
 * @param {number} n
 * @param {number} red
 * @return {boolean}
 */
function btreeGameWinningMove(root, n, red) {
  // red node's left and right children
  let left
  let right

  function DFSTraverseTree(node) {
    if (!node) return 0
    const l = DFSTraverseTree(node.left)
    const r = DFSTraverseTree(node.right)
    if (node.val === red) {
      left = l
      right = r
    }
    return l + r + 1
  }

  DFSTraverseTree(root)

  // red's parent = total - red's left - red's right - red (itself)
  // red can only color its parent, left or right nodes
  // Therefore, we (blue) need to choose one of them to block red
  return Math.max(Math.max(left, right), n - left - right - 1) > n / 2
}
