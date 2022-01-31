import longestCommonPrefix from './index'

test('0014_longestCommonPrefix', () => {
  expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toEqual('fl')
  expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toEqual('')
  expect(longestCommonPrefix([''])).not.toBeUndefined()
  expect(longestCommonPrefix(['a'])).not.toBeUndefined()
  expect(longestCommonPrefix(['', ''])).toEqual('')
  expect(longestCommonPrefix(['cir', 'car'])).toEqual('c')
  expect(longestCommonPrefix(['aaa', 'aa', 'aaa'])).toEqual('aa')
})
