/**
 * @param {string} s
 * @return {string}
 */
// time: O(n)
// space: O(n) for substring
function longestPalindrome(s) {
  let result = ''

  for (let i = 0; i < s.length; i++) {
    // ab|c|ba
    const oddStr = getLongestPalindrome(i - 1, i + 1) // (i, i)
    // ab|ba
    const evenStr = getLongestPalindrome(i, i + 1)

    const longestStr = oddStr.length > evenStr.length ? oddStr : evenStr
    result = longestStr.length > result.length ? longestStr : result
  }

  function getLongestPalindrome(left, right) {
    while (left >= 0 && right < s.length) {
      if (s[left] !== s[right]) break
      left--
      right++
    }
    return s.substring(left + 1, right) // slice()
  }

  return result
}

export default longestPalindrome

// time: O(n^3)
// function longestPalindrome(s) {
//   let result = '';
//   for (let i = 0; i < s.length; i++) {
//     for (let j = i; j < s.length; j++) {
//       const substring = s.substring(i, j + 1);
//       if (substring.length > result.length && isPalindrome(substring)) {
//         result = substring;
//       }
//     }
//   }
//   return result;
// }
