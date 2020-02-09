function minAreaRect(points) {
  const gridMap = {}
  for (const point of points) {
    const key = `${point[0]},${point[1]}`
    gridMap[key] = true
  }
  let result = Number.MAX_SAFE_INTEGER
  for (const point1 of points) {
    for (const point2 of points) {
      const x1 = point1[0]
      const y1 = point1[1]
      const x2 = point2[0]
      const y2 = point2[1]
      if (x1 !== x2 && y1 !== y2) {
        if (gridMap[`${x1},${y2}`] && gridMap[`${x2},${y1}`]) {
          const area = Math.abs(y1 - y2) * Math.abs(x2 - x1)
          result = Math.min(area, result)
        }
      }
    }
  }
  return result === Number.MAX_SAFE_INTEGER ? 0 : result
}
