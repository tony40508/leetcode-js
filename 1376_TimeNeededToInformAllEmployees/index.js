/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} managers
 * @param {number[]} informTime
 * @return {number}
 *
 * manager[headID] = -1
 */
function numOfMinutes(n, headID, managers, informTime) {
  // build tree
  const tree = {}
  managers.forEach((manager, index) => {
    const employee = index
    if (headID === employee) return
    if (!tree[manager]) {
      tree[manager] = []
    }
    tree[manager].push(employee)
  })
  console.log(tree)

  // BFS
  let result = 0
  const queue = [[headID, 0]] // [[employee, required time]]
  while (queue.length > 0) {
    console.log('=================')
    console.log(queue)
    const [employee, currentTime] = queue.shift()
    const children = tree[employee] || []

    children.forEach(child => {
      console.log('-----------------')
      console.log('manager', employee)
      console.log('currentTime', currentTime) // required time of current employee informed
      console.log('children', children)
      console.log('child', child)
      console.log('informTime', informTime[employee]) // required time of informing children
      result = Math.max(result, currentTime + informTime[employee])
      queue.push([child, currentTime + informTime[employee]])
    })
  }

  return result
}

console.log(
  numOfMinutes(
    15,
    0,
    [-1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6],
    [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]
  )
)

// { '0': [ 1, 2 ],
//   '1': [ 3, 4 ],
//   '2': [ 5, 6 ],
//   '3': [ 7, 8 ],
//   '4': [ 9, 10 ],
//   '5': [ 11, 12 ],
//   '6': [ 13, 14 ] }
//
// =================
// [ [ 0, 0 ] ]
// -----------------
// manager 0
// currentTime 0
// children [ 1, 2 ]
// child 1
// informTime 1
// -----------------
// manager 0
// currentTime 0
// children [ 1, 2 ]
// child 2
// informTime 1
// =================
// [ [ 1, 1 ], [ 2, 1 ] ]
// -----------------
// manager 1
// currentTime 1
// children [ 3, 4 ]
// child 3
// informTime 1
// -----------------
// manager 1
// currentTime 1
// children [ 3, 4 ]
// child 4
// informTime 1
// =================
// [ [ 2, 1 ], [ 3, 2 ], [ 4, 2 ] ]
// -----------------
// manager 2
// currentTime 1
// children [ 5, 6 ]
// child 5
// informTime 1
// -----------------
// manager 2
// currentTime 1
// children [ 5, 6 ]
// child 6
// informTime 1
// =================
// [ [ 3, 2 ], [ 4, 2 ], [ 5, 2 ], [ 6, 2 ] ]
// -----------------
// manager 3
// currentTime 2
// children [ 7, 8 ]
// child 7
// informTime 1
// -----------------
// manager 3
// currentTime 2
// children [ 7, 8 ]
// child 8
// informTime 1
// =================
// [ [ 4, 2 ], [ 5, 2 ], [ 6, 2 ], [ 7, 3 ], [ 8, 3 ] ]
// -----------------
// manager 4
// currentTime 2
// children [ 9, 10 ]
// child 9
// informTime 1
// -----------------
// manager 4
// currentTime 2
// children [ 9, 10 ]
// child 10
// informTime 1
// =================
// [ [ 5, 2 ], [ 6, 2 ], [ 7, 3 ], [ 8, 3 ], [ 9, 3 ], [ 10, 3 ] ]
// -----------------
// manager 5
// currentTime 2
// children [ 11, 12 ]
// child 11
// informTime 1
// -----------------
// manager 5
// currentTime 2
// children [ 11, 12 ]
// child 12
// informTime 1
// =================
// [ [ 6, 2 ],
//   [ 7, 3 ],
//   [ 8, 3 ],
//   [ 9, 3 ],
//   [ 10, 3 ],
//   [ 11, 3 ],
//   [ 12, 3 ] ]
// -----------------
// manager 6
// currentTime 2
// children [ 13, 14 ]
// child 13
// informTime 1
// -----------------
// manager 6
// currentTime 2
// children [ 13, 14 ]
// child 14
// informTime 1
// =================
// [ [ 7, 3 ],
//   [ 8, 3 ],
//   [ 9, 3 ],
//   [ 10, 3 ],
//   [ 11, 3 ],
//   [ 12, 3 ],
//   [ 13, 3 ],
//   [ 14, 3 ] ]
// =================
// [ [ 8, 3 ],
//   [ 9, 3 ],
//   [ 10, 3 ],
//   [ 11, 3 ],
//   [ 12, 3 ],
//   [ 13, 3 ],
//   [ 14, 3 ] ]
// =================
// [ [ 9, 3 ], [ 10, 3 ], [ 11, 3 ], [ 12, 3 ], [ 13, 3 ], [ 14, 3 ] ]
// =================
// [ [ 10, 3 ], [ 11, 3 ], [ 12, 3 ], [ 13, 3 ], [ 14, 3 ] ]
// =================
// [ [ 11, 3 ], [ 12, 3 ], [ 13, 3 ], [ 14, 3 ] ]
// =================
// [ [ 12, 3 ], [ 13, 3 ], [ 14, 3 ] ]
// =================
// [ [ 13, 3 ], [ 14, 3 ] ]
// =================
// [ [ 14, 3 ] ]
//
// 3
