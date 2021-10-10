/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArray(nums) {
  return quickSortInPlace(nums)
  // return quickSort(nums)
  // return bubbleSort(nums)
}

function bubbleSort(nums) {
  const array = nums.slice()
  let swapped = true

  while (swapped) {
    swapped = false
    for (let i = 0; i < array.length - 1; i++) {
      const j = i + 1
      if (array[i] > array[j]) {
        const tmp = array[j]
        array[j] = array[i]
        array[i] = tmp
        swapped = true
      }
    }
  }

  return array
}

// heap out of memory
function quickSort(nums) {
  if (nums.length < 2) return nums

  const array = nums.slice()
  const pivotIndex = array.length - 1
  const pivot = array[pivotIndex]
  const left = []
  const right = []

  for (let i = 0; i < pivotIndex; i++) {
    if (array[i] < pivot) {
      left.push(array[i])
    } else {
      right.push(nums[i])
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}

// In-Place
function quickSortInPlace(nums) {
  function quickSort(left, right) {
    if (left < right) {
      const pivotIndex = partition(left, right)
      quickSort(left, pivotIndex - 1)
      quickSort(pivotIndex + 1, right)
    }
  }

  // https://shubo.io/quick-sort/
  function partition(left, right) {
    let pivotIndex = left
    const pivot = nums[right]

    for (let i = left; i < right; i++) {
      if (nums[i] < pivot) {
        ;[nums[i], nums[pivotIndex]] = [nums[pivotIndex], nums[i]]
        pivotIndex++
      }
    }
    // move pivot(nums[right]) to the middle
    ;[nums[pivotIndex], nums[right]] = [nums[right], nums[pivotIndex]]

    return pivotIndex
  }

  quickSort(0, nums.length - 1)

  return nums
}
