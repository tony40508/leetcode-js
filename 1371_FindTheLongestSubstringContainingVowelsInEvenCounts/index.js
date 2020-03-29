/**
 * @param {string} string
 * @return {number}
 */
function findTheLongestSubstring(string) {
  let result = 0
  let state = 0
  const vowels = { a: 1, e: 2, i: 4, o: 8, u: 16 }
  const map = { 0: -1 } // { state: first appear index }

  for (const i in string) {
    const s = string[i]
    const vowel = vowels[s]
    if (vowel) {
      state ^= vowel // XOR
      if (!map[state]) {
        map[state] = i
      }
    }
    result = Math.max(result, i - map[state])
  }
  return result
}
