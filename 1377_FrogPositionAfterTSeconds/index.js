/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} t
 * @param {number} target
 * @return {number}
 */
function frogPosition(n, edges, t, target) {
  if (edges.length === 0) {
    return n === target ? 1 : 0
  }
  // build tree (undirected graph: all the edges are bidirectional)
  const tree = {}
  edges.forEach(edge => {
    const [from, to] = edge
    if (!tree[from]) {
      tree[from] = []
    }
    tree[from].push(to)
    if (!tree[to]) {
      tree[to] = []
    }
    tree[to].push(from)
  })
  console.log(tree)

  function DFS(node, curTime, visited) {
    // if not root since root must be unvisited
    if ((node !== 1 && tree[node].length === 1) || curTime === 0) {
      if (node === target) {
        return 1
      } else {
        return 0
      }
    }

    let result = 0
    visited[node] = true
    const children = tree[node]
    console.log('================')
    console.log('current node', node)
    console.log('visited', visited)
    console.log('children', children)

    for (const child of children) {
      if (visited[child]) continue // skip visited node
      result += DFS(child, curTime - 1, visited)
    }
    console.log('----------------')
    console.log('acc result', result)

    if (node !== 1) {
      result /= children.length - 1 // minus parant
    } else {
      result /= children.length // root
    }
    return result
  }

  return DFS(1, t, {})
}

console.log(
  frogPosition(
    7,
    [
      [1, 2],
      [1, 3],
      [1, 7],
      [2, 4],
      [2, 6],
      [3, 5]
    ],
    20,
    6
  )
)

// { '1': [ 2, 3, 7 ],
//   '2': [ 1, 4, 6 ],
//   '3': [ 1, 5 ],
//   '4': [ 2 ],
//   '5': [ 3 ],
//   '6': [ 2 ],
//   '7': [ 1 ] }
//
// ================
// current node 1
// visited { '1': true }
// children [ 2, 3, 7 ]
// ================
// current node 2
// visited { '1': true, '2': true }
// children [ 1, 4, 6 ]
// ----------------
// acc result 1
// ================
// current node 3
// visited { '1': true, '2': true, '3': true }
// children [ 1, 5 ]
// ----------------
// acc result 0
// ----------------
// acc result 0.5
//
// 0.16666666666666666
