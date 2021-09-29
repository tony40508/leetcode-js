/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// time: O(n)
// space: O(1)
const deleteDuplicates = (head) => {
  let currentHead = head
  while (currentHead && currentHead.next) {
    if (currentHead.val === currentHead.next.val) {
      currentHead.next = currentHead.next.next
    } else {
      currentHead = currentHead.next // update currentHead only when different val on next to handle consecutive duplicate val case (e.g. [1, 1, 1])
    }
  }
  return head
}
