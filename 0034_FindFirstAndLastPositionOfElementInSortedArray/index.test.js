import searchRange from './index'

test('0034_FindFirstAndLastPositionOfElementInSortedArray', () => {
  expect(searchRange([5, 7, 7, 8, 8, 10], 8)).toEqual([3, 4])
  expect(searchRange([5, 7, 7, 8, 8, 10], 6)).toEqual([-1, -1])
  expect(searchRange([1], 1)).toEqual([0, 0])
  expect(searchRange([], 0)).toEqual([-1, -1])
})
