/**
 * @param {number[]} T
 * @return {number[]}
 */
function dailyTemperatures(T) {
  const stack = []
  const result = new Array(T.length).fill(0)

  T.forEach((t, i) => {
    while (stack.length > 0 && t > T[stack[stack.length - 1]]) {
      const popIndex = stack.pop()
      result[popIndex] = i - popIndex
    }
    stack.push(i)
  })

  return result
}

// [73, 74, 75, 71, 69, 72, 76, 73]
// 73
// 74              74>73 -> 1-0=1 [1, 0, 0, 0, 0, 0, 0, 0]
// 75              75>74 -> 2-1=1 [1, 1, 0, 0, 0, 0, 0, 0]
// 71
// 69
// 72              72>69 -> 5-4=1  72>71 -> 5-3=2 [1, 1, 0, 2, 1, 0, 0, 0]
// 76              76>72 -> 6-5=1  76>75 -> 6-2=4 [1, 1, 4, 2, 1, 1, 0, 0]
// 73
