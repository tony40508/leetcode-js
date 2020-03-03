/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
function flipEquiv(root1, root2) {
  return DFS(root1, root2)
}

function DFS(root1, root2) {
  if (!root1 && !root2) {
    return true
  } else if (!root1 || !root2) {
    return false
  } else if (root1.val !== root2.val) {
    return false
  }
  return (
    (DFS(root1.left, root2.left) && DFS(root1.right, root2.right)) ||
    (DFS(root1.left, root2.right) && DFS(root1.right, root2.left))
    // 1. do not flip
    // 2. flip
  )
}
