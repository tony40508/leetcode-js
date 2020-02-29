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
  console.log('s1Map', s1Map)

  let start = 0
  let end = 0
  const slidingWindows = new Map()

  while (end < s2Length) {
    console.log('============')
    // length > s1Length start moving slidingWindows
    if (end - start + 1 > s1Length) {
      // move left element
      slidingWindows.set(s2[start], slidingWindows.get(s2[start]) - 1)
      start++
    }
    slidingWindows.set(s2[end], (slidingWindows.get(s2[end]) || 0) + 1)
    console.log(slidingWindows)
    console.log('end', end)
    console.log('start', start)
    if (end - start + 1 === s1Length && isEqual(s1Map, slidingWindows)) {
      // subString(slidingWindows) is equal to s1(s1Map)
      return true
    }
    end++
    console.log('============')
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

// "ab"
// "eidbaooo"

// s1Map Map { 'a' => 1, 'b' => 1 }
// ============
// Map { 'e' => 1 }
// end 0
// start 0
// ============
// ============
// Map { 'e' => 1, 'i' => 1 }
// end 1
// start 0
// ============
// ============
// Map { 'e' => 0, 'i' => 1, 'd' => 1 }
// end 2
// start 1
// ============
// ============
// Map { 'e' => 0, 'i' => 0, 'd' => 1, 'b' => 1 }
// end 3
// start 2
// ============
// ============
// Map { 'e' => 0, 'i' => 0, 'd' => 0, 'b' => 1, 'a' => 1 }
// end 4
// start 3
