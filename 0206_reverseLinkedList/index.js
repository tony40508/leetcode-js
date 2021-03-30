function ListNode(val) {
  this.val = val
  this.next = null
}

function reverseList(head) {
  let prev = null

  while (head) {
    const next = head.next
    head.next = prev
    prev = head
    head = next
  }

  return prev
}

// function reverseList(head) {
//   let curHead = head
//   let newHead = null
//   let tempNext = null

//   while (curHead) {
//     tempNext = curHead.next
//     curHead.next = newHead
//     newHead = curHead
//     curHead = tempNext
//   }

//   return newHead
// }

// const reverseList = head => {
//   if (!head) return null
//   if (!head.next) return head

//   let prev = null
//   let curr = head
//   let temp

//   while (curr !== null) {
//     temp = curr
//     curr = curr.next
//     temp.next = prev
//     prev = temp
//   }
//   return prev
// }
