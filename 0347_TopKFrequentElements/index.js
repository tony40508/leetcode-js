/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
  // key: freq
  const keyMap = {}
  nums.forEach(num => {
    if (!keyMap[num]) {
      keyMap[num] = 1
    } else {
      keyMap[num]++
    }
  })
  // freq: keys[]
  const freqMap = {}
  for (const [key, freq] of Object.entries(keyMap)) {
    if (!freqMap[freq]) {
      freqMap[freq] = []
    }
    freqMap[freq].push(key)
  }

  let result = []
  // descending sort
  const sortedFreqs = Object.keys(freqMap).sort((a, b) => b - a)
  console.log('sortedFreqs', sortedFreqs)

  let ptrK = 0
  for (const freq of sortedFreqs) {
    const keys = freqMap[freq]
    console.log(`===freq: ${freq}===`)
    console.log('keys: ', keys)
    for (let i = 0; i < keys.length && ptrK < k; i++) {
      console.log(`===${i}===`)
      console.log('ptrK', ptrK)
      result.push(keys[i])
      ptrK++
    }
  }

  return result
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))

// sortedFreqs['3', '2', '1']
//
// ===freq: 3===
// keys:  ['1']
// ===0===
// ptrK 0
//
// ===freq: 2===
// keys:  ['2']
// ===0===
// ptrK 1
//
// ===freq: 1===
// keys:  ['3']
//
// [ '1', '2' ]
