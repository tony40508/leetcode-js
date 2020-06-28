/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
function kWeakestRows(mat, k) {
  const soldiersMap = mat.reduce((acc, row, i) => {
    for (const r of row) {
      if (r === 1) {
        acc[i] ? acc[i]++ : (acc[i] = 1)
      } else {
        acc[i] = acc[i] || 0
      }
    }
    return acc
  }, {})

  // console.log(soldiersMap)

  const indexOfRowsBySoldiers = Object.keys(soldiersMap).sort(
    (aKey, bKey) => soldiersMap[aKey] - soldiersMap[bKey]
  )

  return indexOfRowsBySoldiers.slice(0, k)
}

// console.log(
//   kWeakestRows(
//     [
//       [1, 1, 0, 0, 0],
//       [1, 1, 1, 1, 0],
//       [1, 0, 0, 0, 0],
//       [1, 1, 0, 0, 0],
//       [1, 1, 1, 1, 1],
//     ],
//     3
//   )
// )

// console.log(
//   kWeakestRows(
//     [
//       [1, 0],
//       [0, 0],
//       [1, 0],
//     ],
//     2
//   )
// )

// console.log(
//   kWeakestRows(
//     [
//       [1, 1, 0, 0, 0],
//       [1, 1, 1, 1, 0],
//       [1, 0, 0, 0, 0],
//       [1, 1, 0, 0, 0],
//       [1, 1, 1, 1, 1],
//     ],
//     3
//   )
// )
