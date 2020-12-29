/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
function findAndReplacePattern(words, pattern) {
  const patternMap = new Map()
  let patternMapping = ''
  const patternArray = [...pattern]

  patternArray.forEach((p, i) => {
    if (patternMap.get(p) === undefined) {
      patternMap.set(p, i)
    }
    patternMapping = patternMapping + patternMap.get(p)
  })

  const result = []

  words.forEach((word) => {
    const wordMap = new Map()
    let wordMapping = ''
    const wordArray = [...word]

    wordArray.forEach((w, i) => {
      if (wordMap.get(w) === undefined) {
        wordMap.set(w, i)
      }
      wordMapping = wordMapping + wordMap.get(w)
    })

    if (wordMapping === patternMapping) {
      result.push(word)
    }
  })

  return result
}
