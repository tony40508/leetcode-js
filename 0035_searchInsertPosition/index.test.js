import searchInsert from './index'

test('0035_searchInsertPosition', () => {
  expect(searchInsert([1, 3, 5, 6], 2)).toBe(1)
  expect(searchInsert([1, 3, 5, 6], 0)).toBe(0)
  expect(searchInsert([1, 3, 5, 6], 7)).toBe(4)
})
