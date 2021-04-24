/**
 * @param {string} S
 * @param {number[]} indexes
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
function findReplaceString(S, indexes, sources, targets) {
  const matches = {}

  for (let i = 0; i < indexes.length; i++) {
    const index = indexes[i]
    const source = sources[i]

    if (S.substring(index, index + source.length) === source) {
      matches[index] = i
    }
  }

  let result = ''
  let i = 0

  while (i < S.length) {
    const matchedIndex = matches[i]
    if (Number.isInteger(matchedIndex)) {
      result += targets[matchedIndex]
      i += sources[matchedIndex].length
    } else {
      result += S[i]
      i++
    }
  }

  return result
}
