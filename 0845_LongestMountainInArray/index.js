/**
 * @param {number[]} A
 * @return {number}
 *
 * 1. B.length >= 3
 * 2. There exists some 0 < i < B.length - 1 such that B[0] < B[1] < ... B[i-1] < B[i] > B[i+1] > ... > B[B.length - 1]
 */
// time: O(n)
// space: O(1)
function longestMountain(arr) {
  let result = 0

  for (let i = 0; i < arr.length; i++) {
    const isPeak = arr[i - 1] < arr[i] && arr[i + 1] < arr[i]
    if (!isPeak) continue

    let left = i - 2
    while (arr[left] < arr[left + 1]) {
      left--
    }

    let right = i + 2
    while (arr[right] < arr[right - 1]) {
      right++
    }

    const currentLength = right - left - 1 // (-2 + 1)
    result = Math.max(result, currentLength)
  }

  return result
}

// function longestMountain(A) {
//   const ALength = A.length
//   let result = 0
//   let start = 0
//   let end = 1
//   let up = false
//   let down = false

//   while (end < ALength) {
//     let curA = A[end]
//     let preA = A[end - 1]
//     console.log('==========')
//     console.log('pre', preA)
//     console.log('cur', curA)
//     if (curA === preA) {
//       up = false
//       down = false
//       // not uphill, reset start
//       start = end
//     } else if (curA > preA) {
//       up = true
//       if (down) {
//         // encounter another uphill, so move left ptr to reset start
//         start = end - 1
//         down = false
//       }
//     } else {
//       if (up && !down) {
//         down = true
//       }
//       if (!up) {
//         // not uphill, reset start
//         start = end
//       }
//     }
//     console.log('up', up)
//     console.log('down', down)
//     console.log('start', start)
//     console.log('end', end)
//     if (up && down) {
//       result = Math.max(result, end - start + 1)
//     }
//     end++
//   }

//   return result
// }

// O(n)

// console.log(longestMountain([2, 1, 4, 7, 3, 2, 5]))

// ==========
// pre 2
// cur 1
// up false
// down false
// start 1
// end 1
// ==========
// pre 1
// cur 4
// up true
// down false
// start 1
// end 2
// ==========
// pre 4
// cur 7
// up true
// down false
// start 1
// end 3
// ==========
// pre 7
// cur 3
// up true
// down true
// start 1
// end 4
// ==========
// pre 3
// cur 2
// up true
// down true
// start 1
// end 5
// ==========
// pre 2
// cur 5
// up true
// down false
// start 5
// end 6
//
// 5
