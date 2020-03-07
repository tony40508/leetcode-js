/**
 * @param {string} path
 * @return {string}
 */
function simplifyPath(path) {
  if (path === '/') return path

  const stack = path.split('/')
  const result = []

  while (stack.length !== 0) {
    const current = stack.shift()

    if (
      current !== '..' &&
      current !== '.' &&
      current !== '/' &&
      current !== ''
    ) {
      result.push(current)
    } else if (current === '..') {
      result.pop()
    }
  }
  return `/${result.join('/')}`
}

// Input: "/../"
// Output: "/"
//
// Input: "/home//foo/"
// Output: "/home/foo"
//
// Input: "/a/./b/../../c/"
// Output: "/c"
//
// Input: "/a/../../b/../c//.//"
// Output: "/c"
//
// Input: "/a//b////c/d//././/.."
// Output: "/a/b/c"
