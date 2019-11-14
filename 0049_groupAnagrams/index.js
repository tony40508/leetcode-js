function groupAnagrams(strs) {
  const map = new Map()
  for (str of strs) {
    const key = str
      .split('')
      .sort()
      .join('')
    if (!map.has(key)) {
      map.set(key, [])
      // have to create empty array first
    }
    map.get(key).push(str)
  }
  return [...map.values()]
}
