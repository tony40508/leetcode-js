function verticalTraversal(root) {
  const map = {}
  function DFS(node, x, y) {
    if (!node) return
    if (map[x] === undefined) {
      map[x] = {}
      map[x][y] = [node.val]
    } else if (map[x][y] === undefined) {
      map[x][y] = [node.val]
    } else {
      map[x][y].push(node.val)
    }
    DFS(node.left, x - 1, y + 1) // left
    DFS(node.right, x + 1, y + 1) // right
  }
  DFS(root, 0, 0)
  const xKeys = Object.keys(map).sort((a, b) => a - b)
  let finalResult = []
  for (const xKey of xKeys) {
    const yMap = map[xKey]
    const yKeys = Object.keys(yMap).sort((a, b) => a - b)
    let xResult = [] // result for x
    for (const yKey of yKeys) {
      yMap[yKey].sort((a, b) => a - b)
      xResult = xResult.concat(yMap[yKey])
      // keep xResult immutable
      // e.g. using push() will be [[1],[5,6]] instead of [1,5,6]
      // concat will merge Array like flat()
    }
    finalResult = [...finalResult, xResult]
  }
  return finalResult
}
