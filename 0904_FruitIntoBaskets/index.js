/**
 * @param {number[]} tree
 * @return {number}
 *
 * 1. 1 <= tree.length <= 40000
 * 2. 0 <= tree[i] < tree.length
 */
function totalFruit(tree) {
  const length = tree.length
  const slidingWindows = new Map()

  let end = 0 // current index
  let result = 0
  let count = 0
  const LIMIT = 2

  while (end < length) {
    console.log('==========')
    const fruit = tree[end]
    if (!slidingWindows.has(fruit) && slidingWindows.size === LIMIT) {
      const [fruit1, fruit2] = slidingWindows.entries()
      if (fruit1[1] > fruit2[1]) {
        slidingWindows.delete(fruit2[0])
        count = end - fruit2[1]
      } else {
        slidingWindows.delete(fruit1[0])
        count = end - fruit1[1]
      }
    } else {
      count++
    }

    slidingWindows.set(fruit, end)
    end++
    result = Math.max(count, result)
    console.log(slidingWindows)
    console.log('end', end)
    console.log('count', count)
  }
  return result
}

console.log(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]))

// ==========
// Map { 3 => 0 }
// end 1
// count 1
// ==========
// Map { 3 => 1 }
// end 2
// count 2
// ==========
// Map { 3 => 2 }
// end 3
// count 3
// ==========
// Map { 3 => 2, 1 => 3 }
// end 4
// count 4
// ==========
// Map { 1 => 3, 2 => 4 }
// end 5
// count 2
// ==========
// Map { 1 => 5, 2 => 4 }
// end 6
// count 3
// ==========
// Map { 1 => 6, 2 => 4 }
// end 7
// count 4
// ==========
// Map { 1 => 6, 2 => 7 }
// end 8
// count 5
// ==========
// Map { 2 => 7, 3 => 8 }
// end 9
// count 2
// ==========
// Map { 2 => 7, 3 => 9 }
// end 10
// count 3
// ==========
// Map { 3 => 9, 4 => 10 }
// end 11
// count 3
//
// result 5
