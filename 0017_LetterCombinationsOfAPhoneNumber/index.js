function letterCombinations(digits) {
  const length = digits.length
  if (length === 0) return []
  const result = []
  const map = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  }
  function backTrack(path, result) {
    if (length === path.length) {
      result.push(path)
      return
    }
    const digit = digits.substr(path.length, 1) // get next digit number
    for (const char of map[digit]) {
      path = `${path}${char}`
      console.log('======start========')
      console.log(digit)
      console.log(path)
      backTrack(path, result)
      path = path.substr(0, path.length - 1)
      console.log(path)
      console.log('=======end========')
    }
  }
  backTrack('', result)
  return result
}

// ======start========
// 2
// a
// ======start========
// 3
// ad
// a
// =======end=======
// ======start========
// 3
// ae
// a
// =======end=======
// ======start========
// 3
// af
// a
// =======end=======
// =======end=======
// ======start========
// 2
// b
// ======start========
// 3
// bd
// b
// =======end=======
// ======start========
// 3
// be
// b
// =======end=======
// ======start========
// 3
// bf
// b
// =======end=======
// =======end=======
// ======start========
// 2
// c
// ======start========
// 3
// cd
// c
// =======end=======
// ======start========
// 3
// ce
// c
// =======end=======
// ======start========
// 3
// cf
// c
// =======end=======
// =======end=======
