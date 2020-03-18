/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

function getTargetCopy(original, cloned, target) {
  function DFS(orig, clone) {
    if (!orig) return
    if (orig === target) return clone

    const hit = DFS(orig.left, clone.left)
    if (hit) return hit

    return DFS(orig.right, clone.right)
  }

  return DFS(original, cloned)
}
