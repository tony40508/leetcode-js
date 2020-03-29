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
function maxSumBST(root) {
  let result = 0

  function postOrder(node) {
    // [min, max, sum]
    if (!node) return [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, 0]

    const left = postOrder(node.left)
    const right = postOrder(node.right)

    if (left && right && node.val > left[1] && node.val < right[0]) {
      const sumVal = node.val + left[2] + right[2]
      result = Math.max(result, sumVal)
      return [
        Math.min(left[0], node.val), // make sure leaf nodes can get their own val (node.val)
        Math.max(right[1], node.val),
        sumVal,
      ]
    }

    return null
  }
  postOrder(root)
  return result
}

console.log(
  maxSumBST([
    4,
    2,
    -3,
    -2,
    9,
    9,
    null,
    -5,
    2,
    7,
    1,
    null,
    null,
    null,
    -3,
    0,
    3,
    null,
    6,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    8,
  ])
)
