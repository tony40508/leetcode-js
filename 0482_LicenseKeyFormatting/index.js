/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 *
 * 1. The length of string S will not exceed 12,000, and K is a positive integer.
 * 2. String S consists only of alphanumerical characters (a-z and/or A-Z and/or 0-9) and dashes(-).
 * 3. String S is non-empty.
 */
function licenseKeyFormatting(S, K) {
  S = S.split('-')
    .join('')
    .toUpperCase()
  let result = ''
  let remainder = S.length % K
  console.log('S', S)

  if (remainder) {
    result += S.substring(0, remainder)
    result += '-'
    console.log('result', result)
  }
  while (remainder < S.length) {
    result += S.substring(remainder, remainder + K)
    result += '-'
    remainder += K
    console.log('remainder', remainder)
    console.log('inner result', result)
  }

  return result.slice(0, -1)
}

// console.log(licenseKeyFormatting('5F3Z-2e-9-w', 4))
console.log(licenseKeyFormatting('2-5g-3-J', 2))

// S 25G3J
//
// result 2-
//
// remainder 3
// inner result 2-5G-
//
// remainder 5
// inner result 2-5G-3J-
//
// 2-5G-3J
