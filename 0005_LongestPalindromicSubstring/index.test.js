import longestPalindrome from './index'

describe('longestPalindrome', () => {
  it('should pass single string', () => {
    expect(longestPalindrome('a')).toBe('a')
  })

  it('should pass double string', () => {
    expect(longestPalindrome('bb')).toBe('bb')
  })
})
