function ListNode(val) {
  this.val = val
  this.next = null
}
const reverseList = head => {
  if (!head) return null
  if (!head.next) return head

  let prev = null
  let curr = head
  let temp

  while (curr !== null) {
    temp = curr
    curr = curr.next
    temp.next = prev
    prev = temp
  }
  return prev
}
