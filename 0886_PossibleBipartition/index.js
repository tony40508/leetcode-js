/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */
function possibleBipartition(N, dislikes) {
  const graph = Array.from({ length: N + 1 }, () => [])

  for (const dislike of dislikes) {
    graph[dislike[0]].push(dislike[1])
    graph[dislike[1]].push(dislike[0])
  }

  const visitedGroupMap = {}
  const dfs = (node, group) => {
    if (visitedGroupMap[node]) {
      return visitedGroupMap[node] === group
    }
    visitedGroupMap[node] = group

    const neighbors = graph[node]
    for (const neighbor of neighbors) {
      if (!dfs(neighbor, group === 0 ? 1 : 0)) {
        return false
      }
    }
    return true
  }

  for (let i = 1; i <= N; i++) {
    if (!visitedGroupMap[i] && !dfs(i, 0)) {
      // console.log(visitedGroupMap, graph)
      return false
    }
  }
  // console.log(visitedGroupMap, graph)
  return true
}

console.log(
  possibleBipartition(4, [
    [1, 2],
    [1, 3],
    [2, 4],
  ])
)
// { '1': 0, '2': 1, '3': 1, '4': 0 } [ [], [ 2, 3 ], [ 1, 4 ], [ 1 ], [ 2 ] ]
console.log(
  possibleBipartition(3, [
    [1, 2],
    [1, 3],
    [2, 3],
  ])
)
// { '1': 0, '2': 1, '3': 1 } [ [], [ 2, 3 ], [ 1, 3 ], [ 1, 2 ] ]
