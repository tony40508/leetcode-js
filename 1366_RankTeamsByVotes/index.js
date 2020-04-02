/**
 * @param {string[]} votes
 * @return {string}
 */
function rankTeams(votes) {
  // ranks: { char: [votes]}
  const ranks = votes.reduce((acc, cur) => {
    for (const i in cur) {
      const char = cur[i]
      if (!acc[char]) {
        acc[char] = Array.from({ length: cur.length }, (_) => 0)
      }
      acc[char][i]++
    }
    return acc
  }, {})

  const result = Object.entries(ranks)
    .sort((a, b) => {
      const [charA, aVotesArr] = a
      const [charB, bVotesArr] = b

      for (const i in aVotesArr) {
        if (aVotesArr[i] !== bVotesArr[i]) {
          return bVotesArr[i] - aVotesArr[i] // descending
        }
      }
      return charA > charB ? 1 : -1 // votes value are same, compare to char
    })
    .map(([char]) => char) // only return key (char)

  return result.join('')
}

console.log(rankTeams(['ABC', 'ACB', 'ABC', 'ACB', 'ACB']))
