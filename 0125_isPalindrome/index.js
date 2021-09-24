/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
  const str = s.toLowerCase().replace(/[^0-9a-zA-Z]/g, '') // [\W] === [^A-Za-z0-9_]

  let start = 0
  let end = str.length - 1

  while (start < end) {
    if (str[start] !== str[end]) return false
    start++
    end--
  }

  return true
}

export default isPalindrome

// const isPalindrome = (s) => {
//   if (s.length < 0) return
//   const validStr = s.toLowerCase().replace(/[^\w]/g, '')
//   const reversedStr = validStr.split('').reverse().join('')
//   return validStr === reversedStr
// }
