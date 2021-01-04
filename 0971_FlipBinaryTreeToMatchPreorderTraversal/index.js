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
 * @param {number[]} voyage
 * @return {number[]}
 */
function flipMatchVoyage(root, voyage) {
  const result = []
  let index = 0

  const dfs = (node) => {
    if (node.val !== voyage[index]) return
    index++

    if (node.left && node.left.val === voyage[index]) {
      dfs(node.left)
    }
    if (node.right && node.right.val === voyage[index]) {
      dfs(node.right)
      // through dfs(node.right). if matched, index++
      // then if node.left also matched, representing node can flip
      if (node.left && node.left.val === voyage[index]) {
        result.push(node.val)
        // keep trace left tree
        dfs(node.left)
      }
    }
  }
  dfs(root)

  if (index !== voyage.length) return [-1]
  return result
}

