/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let currentSubstring = ''
  let longestLength = 0

  for (const char of s) {
    const index = currentSubstring.indexOf(char)

    if (index > -1) {
      currentSubstring = currentSubstring.slice(index + 1) // remove repetitive char so beginIndex is index + 1
    }
    currentSubstring += char

    longestLength = Math.max(longestLength, currentSubstring.length)
  }

  return longestLength
}

// function lengthOfLongestSubstring(s) {
//   const slideWindow = new Map()
//   let start = 0
//   let end = 0
//   let result = 0

//   while (end < s.length) {
//     const currentStr = s[end]
//     if (slideWindow.has(currentStr)) {
//       const repeatedIndex = slideWindow.get(currentStr)
//       // reset start index
//       // make sure repeatedIndex < start
//       start = repeatedIndex < start ? start : repeatedIndex + 1
//     }
//     slideWindow.set(currentStr, end)
//     result = Math.max(result, end - start + 1)
//     // calcutate result first then end++
//     end++
//   }

//   return result
// }
