/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
function minSteps(s, t) {
  if (s.length < 1) return 0

  const cache = {}
  let i = 0

  while (i < s.length) {
    const charS = s[i]
    const charT = t[i]

    if (!cache[charS]) cache[charS] = 0
    if (!cache[charT]) cache[charT] = 0

    cache[charS]++
    cache[charT]--

    i++
  }

  let result = 0
  for (const c of Object.values(cache)) {
    result += Math.abs(c)
  }

  return result / 2
}
