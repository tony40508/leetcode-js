/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
  let front = head
  let back = head
  let step = 0

  while (step < n) {
    back = back.next
    step++
  }

  if (back === null) {
    if (head.next) {
      head.val = head.next.val
      head.next = head.next.next
    } else {
      head = null // head = [1], n = 1
    }

    return head
  }

  while (back.next) {
    back = back.next
    front = front.next
  }

  front.next = front.next.next // when back.next === null, move front manually

  return head
}
