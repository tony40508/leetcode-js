import merge from './index'

it('fail case if maitain prevInterval extraly but use it in a immutable way. e.g. result = [[...prevInterval]]', () => {
  expect(
    merge([
      [1, 4],
      [0, 2],
      [3, 5],
    ])
  ).toEqual([[0, 5]])
})
