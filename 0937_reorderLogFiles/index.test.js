import { reorderLogFiles } from '../0937_reorderLogFiles/index'

test('0937_reorderLogFiles', () => {
  expect(
    reorderLogFiles([
      'a1 9 2 3 1',
      'g1 act car',
      'zo4 4 7',
      'ab1 off key dog',
      'a8 act zoo'
    ])
  ).toEqual([
    'g1 act car',
    'a8 act zoo',
    'ab1 off key dog',
    'a1 9 2 3 1',
    'zo4 4 7'
  ]),
    expect(
      reorderLogFiles(['7 96', 'd 0 5', 'r 439', '1 bw', '6 dkf'])
    ).toEqual(['1 bw', '6 dkf', '7 96', 'd 0 5', 'r 439'])
})
