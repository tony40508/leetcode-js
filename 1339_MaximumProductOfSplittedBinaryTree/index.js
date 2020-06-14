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
 * @return {number}
 */
const modulo = 10 ** 9 + 7
let sum = 0
let result = 0

function maxProduct(root) {
  // reset result every time
  result = 0
  sum = getSum(root)
  cutEdge(root)

  return result % modulo
}

function getSum(node) {
  if (!node) return 0

  const left = getSum(node.left)
  const right = getSum(node.right)

  return (left + right + node.val) % modulo
}

function cutEdge(node) {
  if (!node) return 0

  const left = cutEdge(node.left)
  const right = cutEdge(node.right)

  result = Math.max(result, left * (sum - left))
  result = Math.max(result, right * (sum - right))

  return (left + right + node.val) % modulo
}
