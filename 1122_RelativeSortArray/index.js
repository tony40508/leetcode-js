/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
function relativeSortArray(arr1, arr2) {
  const cache = new Map()

  arr1.sort((a, b) => a - b)

  arr2.forEach((item) => {
    cache.set(item, 0)
  })

  arr1.forEach((item) => {
    if (cache.get(item)) {
      const times = cache.get(item)
      cache.set(item, times + 1)
    } else {
      cache.set(item, 1)
    }
  })

  const result = []

  cache.forEach((val, key) => {
    result.push(...repeat({ item: key, times: val }))
  })

  return result
}

const repeat = ({ item, times }) => new Array(times).fill(item)

// function relativeSortArray(arr1, arr2) {
//   const map = arr1.reduce((acc, cur) => {
//     acc[cur] ? acc[cur]++ : (acc[cur] = 1)
//     return acc
//   }, {})

//   const result = []

//   arr2.forEach((num) => {
//     while (map[num] !== 0) {
//       result.push(num)
//       map[num]--
//     }
//   })

//   Object.keys(map).forEach((num) => {
//     while (map[num] !== 0) {
//       result.push(num)
//       map[num]--
//     }
//   })

//   return result
// }
