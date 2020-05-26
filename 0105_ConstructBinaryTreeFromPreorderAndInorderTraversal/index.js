/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function buildTree(preorder, inorder) {
  function traverse(rootPreIndex, start, end) {
    if (start > end) return null

    const rootValue = preorder[rootPreIndex]
    const rooInIndex = inorder.indexOf(rootValue)

    const left = traverse(rootPreIndex + 1, start, rooInIndex - 1)
    const leftCount = rooInIndex - start + 1
    const right = traverse(rootPreIndex + leftCount, rooInIndex + 1, end)

    return new TreeNode(rootValue, left, right)
  }

  return traverse(0, 0, inorder.length - 1)
}
