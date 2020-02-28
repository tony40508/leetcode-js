function hasCycle(head) {
  let fast = head
  let slow = head

  while (fast) {
    if (!fast.next) return false
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) return true
  }
  return false
}
