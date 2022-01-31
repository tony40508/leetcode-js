/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  let result = ''
  if (strs.length < 1) return result

  const sortedStrs = strs.sort()
  const firstStr = sortedStrs[0]
  const lastStr = sortedStrs[sortedStrs.length - 1]

  for (let i = 0; i < firstStr.length; i++) {
    if (firstStr[i] === lastStr[i]) {
      result = result + firstStr[i]
    } else {
      break
    }
  }

  return result
}

export default longestCommonPrefix
