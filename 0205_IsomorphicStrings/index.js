/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isIsomorphic(s, t) {
  if (s.length !== t.length) return false

  const sArray = [...s]
  const tArray = [...t]

  const sMap = new Map()
  let sMapping = ''

  sArray.forEach((s, i) => {
    if (!Number.isInteger(sMap.get(s))) {
      sMap.set(s, i)
    }
    sMapping = sMapping + sMap.get(s)
  })

  const tMap = new Map()
  let tMapping = ''

  tArray.forEach((t, i) => {
    if (!Number.isInteger(tMap.get(t))) {
      tMap.set(t, i)
    }
    tMapping = tMapping + tMap.get(t)
  })

  return sMapping === tMapping
}
