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
function subtreeWithAllDeepest(root) {
  if (!root) return null

  function dfs(node) {
    if (!node) return [0, null]

    const [leftDepth, leftNode] = dfs(node.left)
    const [rightDepth, rightNode] = dfs(node.right)

    if (leftDepth > rightDepth) {
      return [leftDepth + 1, leftNode]
    }
    if (leftDepth < rightDepth) {
      return [rightDepth + 1, rightNode]
    }
    if (leftDepth === rightDepth) {
      return [leftDepth + 1, node]
    }
  }

  const [_, deepestNode] = dfs(root)
  return deepestNode
}

// https://imgur.com/YJ3i0HP
