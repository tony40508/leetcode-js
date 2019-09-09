export const longestCommonPrefix = strs => {
  if (!strs.length) return ''
  const sortedStrs = strs.sort()
  let i = 0
  let firstStr = sortedStrs[0]
  let lastStr = sortedStrs[sortedStrs.length - 1]

  while (i < firstStr.length && firstStr.charAt(i) === lastStr.charAt(i)) {
    i++
  }
  return firstStr.slice(0, i)
}
