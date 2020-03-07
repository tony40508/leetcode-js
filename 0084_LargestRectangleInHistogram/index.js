/**
 * @param {number[]} heights
 * @return {number}
 */

// heights[stack[top]] * (i - stack[peak] - 1)
function largestRectangleArea(heights) {
  const length = heights.length
  if (length === 0) return 0

  let largest = -1
  const stack = [-1]
  // record indices of heights
  // top of stack: stack[stack.length - 1]
  // second of stack: stack[stack.length - 2]

  // initial loop
  console.log('===init loop===')
  for (const i of heights.keys()) {
    if (heights[i] > heights[stack[stack.length - 1]]) {
      stack.push(i)
      console.log(`===${i}===`)
      console.log('stack', stack)
    } else {
      console.log(`===${i}===`)
      // down hill (less than before one)
      while (heights[stack[stack.length - 1]] >= heights[i]) {
        console.log('stack', stack)
        const rectangle =
          heights[stack[stack.length - 1]] * (i - stack[stack.length - 2] - 1)
        console.log('rectangle', rectangle)
        largest = Math.max(largest, rectangle)
        // pop stack
        pop(stack)
      }
      stack.push(i)
    }
  }
  // process remaining work
  console.log('===remaining work===')
  while (stack[stack.length - 1] !== -1) {
    console.log('==========')
    console.log('stack', stack)
    const rectangle =
      heights[stack[stack.length - 1]] * (length - stack[stack.length - 2] - 1)
    console.log('rectangle', rectangle)
    pop(stack)
    largest = Math.max(largest, rectangle)
  }

  return largest
}

function pop(stack) {
  stack.splice(stack.length - 1, 1)
}

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]))

// ===init loop===
//
// ===0===
// ===1===
// stack [ -1, 0 ]
// rectangle 2
// ===2===
// stack [ -1, 1, 2 ]
// ===3===
// stack [ -1, 1, 2, 3 ]
// ===4===
// stack [ -1, 1, 2, 3 ]
// rectangle 6
// stack [ -1, 1, 2 ]
// rectangle 10
// ===5===
// stack [ -1, 1, 4, 5 ]
//
// ===remaining work===
// ==========
// stack [ -1, 1, 4, 5 ]
// rectangle 3
// ==========
// stack [ -1, 1, 4 ]
// rectangle 8
// ==========
// stack [ -1, 1 ]
// rectangle 6
//
// 10
