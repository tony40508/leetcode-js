/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
function backspaceCompare(S, T) {
  const stackS = []
  for (const s of S) {
    if (s !== '#') {
      stackS.push(s)
    } else {
      stackS.pop()
    }
  }

  const stackT = []
  for (const t of T) {
    if (t !== '#') {
      stackT.push(t)
    } else {
      stackT.pop()
    }
  }

  if (stackS.length !== stackT.length) return false

  for (const i of stackS.keys()) {
    if (stackS[i] !== stackT[i]) return false
  }

  return true
}
