/**
 * @param {number[]} arr
 * @return {number}
 */
function minJumps(arr) {
  if (arr.length < 2) return 0

  // { integer: index }
  const map = {}
  arr.forEach((integer, index) => {
    if (!map[integer]) map[integer] = []
    map[integer].push(index)
  })

  // BFS
  const queue = [0]
  const visited = [0]
  let step = 0

  while (queue.length > 0) {
    const queueLen = queue.length
    for (let i = 0; i < queueLen; i++) {
      const index = queue.shift()
      if (index === arr.length - 1) return step

      const set = map[arr[index]] ? new Set(map[arr[index]]) : new Set()
      set.add(index + 1)
      set.add(index - 1)

      // Time Limit Exceeded...
      // for (const idx of set) {
      //   if (idx >= 0 && idx < arr.length && !visited.includes(idx)) {
      //     queue.push(idx)
      //     visited.push(idx)
      //   }
      // }
      set.forEach((idx) => {
        if (idx >= 0 && idx < arr.length && !visited.includes(idx)) {
          queue.push(idx)
          visited.push(idx)
        }
      })

      delete map[arr[index]] // [7, 7, 7,...]
    }

    step++
  }

  return -1
}

console.log(minJumps([7, 6, 9, 6, 9, 6, 9, 7]))
