/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
function wordBreak(s, wordDict) {
  const cache = {}

  function process(s) {
    if (s === '') return [[]]
    if (cache[s]) return cache[s]

    cache[s] = []
    for (let i = 0; i <= s.length; i++) {
      const left = s.substring(0, i)
      if (wordDict.includes(left)) {
        const rest = process(s.substring(i))
        // console.log(left, rest)

        for (let j = 0; j < rest.length; j++) {
          cache[s].push([left, ...rest[j]])
        }
      }
    }

    return cache[s]
  }

  process(s)
  // console.log(cache)

  return cache[s].map((arr) => arr.join(' '))
}

console.log(wordBreak('catsanddog', ['cat', 'cats', 'and', 'sand', 'dog']))

// dog [ [] ]
// sand [ [ 'dog' ] ]
// cat [ [ 'sand', 'dog' ] ]
// and [ [ 'dog' ] ]
// cats [ [ 'and', 'dog' ] ]

// {
//   catsanddog: [ [ 'cat', 'sand', 'dog' ], [ 'cats', 'and', 'dog' ] ],
//   sanddog: [ [ 'sand', 'dog' ] ],
//   dog: [ [ 'dog' ] ],
//   anddog: [ [ 'and', 'dog' ] ]
// }
