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
 * @return {TreeNode}
 */

/** DFS */
function invertTree(root) {
  if (!root) return null
  ;[root.left, root.right] = [root.right, root.left]

  invertTree(root.left)
  invertTree(root.right)

  return root
}

/** BFS */
function invertTree(root) {
  if (!root) return null

  const queue = []
  queue.push(root)

  while (queue.length > 0) {
    const node = queue.shift()
    ;[node.left, node.right] = [node.right, node.left]
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }

  return root
}
