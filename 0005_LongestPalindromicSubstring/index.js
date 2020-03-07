/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
  if (s.length < 2) return s

  let result = ''
  for (let i = 0; i < s.length; i++) {
    console.log(`===${i}===`)
    const str1 = process(i, i)
    const str2 = process(i, i + 1)
    const longest = str1.length > str2.length ? str1 : str2
    result = longest.length > result.length ? longest : result
  }

  function process(left, right) {
    while (left >= 0 && right < s.length) {
      console.log(`==left: ${left}, right: ${right}===`)
      console.log('left str: ', s[left])
      console.log('right str: ', s[right])
      if (s[left] !== s[right]) break
      left-- // left ptr move to left
      right++ // right ptr move to right
    }
    if (left + 1 > right - 1) return ''
    console.log('return', s.substring(left + 1, right))
    return s.substring(left + 1, right)
  }

  return result
}

console.log(longestPalindrome('babad'))

// O(n)

// ===0===
// ==left: 0, right: 0===
// left str:  b
// right str:  b
// return b
// ==left: 0, right: 1===
// left str:  b
// right str:  a
//
// ===1===
// ==left: 1, right: 1===
// left str:  a
// right str:  a
// ==left: 0, right: 2===
// left str:  b
// right str:  b
// return bab
// ==left: 1, right: 2===
// left str:  a
// right str:  b
//
// ===2===
// ==left: 2, right: 2===
// left str:  b
// right str:  b
// ==left: 1, right: 3===
// left str:  a
// right str:  a
// ==left: 0, right: 4===
// left str:  b
// right str:  d
// return aba
// ==left: 2, right: 3===
// left str:  b
// right str:  a
//
// ===3===
// ==left: 3, right: 3===
// left str:  a
// right str:  a
// ==left: 2, right: 4===
// left str:  b
// right str:  d
// return a
// ==left: 3, right: 4===
// left str:  a
// right str:  d
//
// ===4===
// ==left: 4, right: 4===
// left str:  d
// right str:  d
// return d
//
// bab
