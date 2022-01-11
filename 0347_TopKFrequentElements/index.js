/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
  const keyMap = new Map()
  nums.forEach((num) => {
    if (!keyMap.has(num)) {
      keyMap.set(num, 1)
    } else {
      keyMap.set(num, keyMap.get(num) + 1)
    }
  })

  const freqMap = new Map()
  for (const [key, freq] of keyMap) {
    if (!freqMap.has(freq)) {
      freqMap.set(freq, [])
    }
    freqMap.set(freq, [...freqMap.get(freq), key])
  }

  let result = []
  const sortedFreqs = [...freqMap.keys()].sort((a, b) => b - a) // descending sort

  let i = 0
  for (const freq of sortedFreqs) {
    const keys = freqMap.get(freq)

    for (const key of keys) {
      if (i >= k) break
      result.push(key)
      i++
    }
  }

  return result
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))
