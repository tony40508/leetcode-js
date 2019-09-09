export const romanToInt = s => {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let result = 0

  for (let i = 0; i < s.length; i++) {
    let v1 = map[s.charAt(i)]
    let v2 = map[s.charAt(i + 1)]

    if (v2 > v1) {
      result = result + v2 - v1
      // for skipping next digit
      i++
    } else {
      result = result + v1
    }
  }
  return result
}
