/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
function expressiveWords(S, word) {
  let result = 0
  const SLength = S.length
  function isStretchy(W) {
    const WLength = W.length
    let pointerS = 0
    let pointerW = 0

    while (pointerS < SLength && pointerW < WLength) {
      let charS = S[pointerS++]
      let charW = W[pointerW++]
      if (charS !== charW) return false

      let countS = 1
      while (pointerS < SLength && S[pointerS] === charS) {
        pointerS++
        countS++
      }
      let countW = 1
      while (pointerW < WLength && W[pointerW] === charW) {
        pointerW++
        countW++
      }

      if (countS < countW || (countS > countW && countS < 3)) {
        return false
      }
    }
    console.log('S', W, charS, pointerS, countS)
    console.log('W', W, charW, pointerW, countW)
    if (pointerS !== SLength || pointerW !== WLength) return false
    // both of pointers go through from beginning to end
    return true
  }
  for (const w of word) {
    if (isStretchy(w)) result++
  }
  return result
}

// "heeellooo"
// ["hello", "hi", "helo"]

// S hello h 1 1
// W hello h 1 1
// S hello e 4 3
// W hello e 2 1
// S hello l 6 2
// W hello l 4 2
// S hello o 9 3
// W hello o 5 1
// S hi h 1 1
// W hi h 1 1
// S helo h 1 1
// W helo h 1 1
// S helo e 4 3
// W helo e 2 1
// S helo l 6 2
// W helo l 3 1
