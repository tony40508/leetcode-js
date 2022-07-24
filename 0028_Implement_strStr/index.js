/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
  if (needle === '') return 0

  let hIndex = 0
  let nIndex = 0
  const longestHappyPrefix = createLHP(needle)

  while (hIndex < haystack.length) {
    if (haystack[hIndex] === needle[nIndex]) {
      hIndex++
      nIndex++
    } else if (nIndex > 0) {
      nIndex = longestHappyPrefix[nIndex - 1]
    } else {
      hIndex++
    }
    // must after hIndex, nIndex updated
    if (nIndex === needle.length) {
      return hIndex - nIndex
    }
  }

  return -1
}

// haystack  a b a b a x
// needle    a b a x
// nIndex        3 1 2 3 4
//                 ?
// LHP       0 0 1 0
// (prefix is equivalent to suffix)

// https://github.com/tony40508/leetcode-js/blob/e5efecf0f9d7136fc44fe1dbdf179863206a260b/1392_LongestHappyPrefix/index.js
function createLHP(needle) {
  const longestHappyPrefix = [0]
  let prefixLen = 0
  let i = 1

  while (i < needle.length) {
    if (needle[prefixLen] === needle[i]) {
      prefixLen++
      longestHappyPrefix[i] = prefixLen
      i++
    } else if (prefixLen > 0) {
      prefixLen = longestHappyPrefix[prefixLen - 1]
    } else {
      longestHappyPrefix[i] = 0
      i++
    }
  }

  return longestHappyPrefix
}

// function strStr(haystack, needle) {
//   return haystack.indexOf(needle)
// }
