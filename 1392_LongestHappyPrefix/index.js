/**
 * @param {string} s
 * @return {string}
 */
// KMP-table
function longestPrefix(s) {
  let prefixLen = 0
  let i = 1
  const longestHappyPrefix = [0]

  while (i < s.length) {
    if (s[prefixLen] === s[i]) {
      prefixLen++ // first
      longestHappyPrefix[i] = prefixLen // update new prefixLen
      i++ // last
    } else if (prefixLen > 0) {
      prefixLen = longestHappyPrefix[prefixLen - 1]
      // backforward and try again, so don't need i++
    } else {
      longestHappyPrefix[i] = 0
      i++
    }
  }

  return s.slice(0, prefixLen)
}

// string    a b a x a b a b a x
// LHP       0 0 1 0 1 2 3 2 3 4
// prefixLen              1 2

// function longestPrefix(s) {
//   let prefixLen = 0
//   let sLen = s.length
//   for (let i = 1; i < sLen; i++) {
//     if (s.slice(0, i) === s.slice(sLen - i)) {
//       prefixLen = i
//     }
//   }
//   return s.slice(0, prefixLen)
// }
