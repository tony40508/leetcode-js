/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
function relativeSortArray(arr1, arr2) {
  const map = arr1.reduce((acc, cur) => {
    acc[cur] ? acc[cur]++ : (acc[cur] = 1)
    return acc
  }, {})

  const result = []

  arr2.forEach((num) => {
    while (map[num] !== 0) {
      result.push(num)
      map[num]--
    }
  })

  Object.keys(map).forEach((num) => {
    while (map[num] !== 0) {
      result.push(num)
      map[num]--
    }
  })

  return result
}
