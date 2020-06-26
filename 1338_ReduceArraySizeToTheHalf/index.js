/**
 * @param {number[]} arr
 * @return {number}
 */
function minSetSize(arr) {
  const countMap = arr.reduce((acc, cur) => {
    acc[cur] ? acc[cur]++ : (acc[cur] = 1)
    return acc
  }, {})

  let result = 0
  let arrLength = arr.length

  const sortedValuesByCount = Object.keys(countMap).sort(
    (aKey, bKey) => countMap[bKey] - countMap[aKey]
  )

  sortedValuesByCount.every((value) => {
    const count = countMap[value]
    arrLength -= count
    result++
    if (arrLength <= arr.length / 2) return false
    return true
  })

  return result
}

console.log(minSetSize([3, 3, 3, 3, 5, 5, 5, 2, 2, 7]))
