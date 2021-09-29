/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
// time: O(n)
// space: O(n)
// a unicode = 97
// z unicode = 122
function shiftingLetters(s, shifts) {
  const charCodes = []

  for (let i = shifts.length - 2; i >= 0; i--) {
    shifts[i] += shifts[i + 1]
  }

  for (let i = 0; i < s.length; i++) {
    const charCode = ((s.charCodeAt(i) - 97 + shifts[i]) % 26) + 97 // avoid s.charCodeAt(i) + shifts[i] over a-z (e.g. shiftingLetters('ruu', [26,9,17]))
    charCodes.push(charCode)
  }

  return String.fromCharCode(...charCodes)
}
