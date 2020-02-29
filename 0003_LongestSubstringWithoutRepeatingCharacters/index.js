/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  const slideWindow = new Map()
  let start = 0
  let end = 0
  let result = 0

  while (end < s.length) {
    console.log('==========')
    const currentStr = s[end]
    if (slideWindow.has(currentStr)) {
      const repeatedIndex = slideWindow.get(currentStr)
      // reset start index
      // make sure repeatedIndex < start (line 49)
      start = repeatedIndex < start ? start : repeatedIndex + 1
      console.log('repeatedIndex', repeatedIndex)
    }
    slideWindow.set(currentStr, end)
    result = Math.max(result, end - start + 1)
    // calcutate result first then end++
    end++
    console.log('start', start)
    console.log('end', end)
    console.log(slideWindow)
  }

  return result
}

// console.log(lengthOfLongestSubstring('abba'))

// ==========
// start 0
// end 1
// Map { 'a' => 0 }
// ==========
// start 0
// end 2
// Map { 'a' => 0, 'b' => 1 }
// ==========
// repeatedIndex 1
// start 2
// end 3
// Map { 'a' => 0, 'b' => 2 }
// ==========
// repeatedIndex 0 (repeatedIndex has possibility less than start)
// start 2
// end 4
// Map { 'a' => 3, 'b' => 2 }
//
// 2

console.log(lengthOfLongestSubstring('abcabcbb'))

// ==========
// start 0
// end 1
// Map { 'a' => 0 }
// ==========
// start 0
// end 2
// Map { 'a' => 0, 'b' => 1 }
// ==========
// start 0
// end 3
// Map { 'a' => 0, 'b' => 1, 'c' => 2 }
// ==========
// repeatedIndex 0
// start 1
// end 4
// Map { 'a' => 3, 'b' => 1, 'c' => 2 }
// ==========
// repeatedIndex 1
// start 2
// end 5
// Map { 'a' => 3, 'b' => 4, 'c' => 2 }
// ==========
// repeatedIndex 2
// start 3
// end 6
// Map { 'a' => 3, 'b' => 4, 'c' => 5 }
// ==========
// repeatedIndex 4
// start 5
// end 7
// Map { 'a' => 3, 'b' => 6, 'c' => 5 }
// ==========
// repeatedIndex 6
// start 7
// end 8
// Map { 'a' => 3, 'b' => 7, 'c' => 5 }
//
// 3
