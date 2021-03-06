function twoSum(numbers, target) {
  const length = numbers.length
  let start = 0
  let end = length - 1

  while (start < end) {
    const sum = numbers[start] + numbers[end]
    if (sum === target) {
      return [start + 1, end + 1]
    }
    if (sum > target) {
      end--
      continue
    }
    if (sum < target) {
      start++
      continue
    }
  }
}
