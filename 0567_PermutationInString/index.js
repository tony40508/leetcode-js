/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function checkInclusion(s1, s2) {
  const s1Length = s1.length
  const s2Length = s2.length
  const s1Map = new Map()

  for (const s of s1) {
    s1Map.set(s, (s1Map.get(s) || 0) + 1)
  }

  let start = 0
  let end = 0
  const slidingWindows = new Map()

  while (end < s2Length) {
    // length > s1Length start moving slidingWindows
    if (end - start + 1 > s1Length) {
      // move left element
      slidingWindows.set(s2[start], slidingWindows.get(s2[start]) - 1)
      start++
    }
    slidingWindows.set(s2[end], (slidingWindows.get(s2[end]) || 0) + 1)
    if (end - start + 1 === s1Length && isEqual(s1Map, slidingWindows)) {
      // subString(slidingWindows) is equal to s1(s1Map)
      return true
    }
    end++
  }
  return false
}

function isEqual(map1, map2) {
  for (const [key, value] of map1) {
    if (map2.get(key) !== value) {
      return false
    }
  }
  return true
}
