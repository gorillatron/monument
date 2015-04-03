export default (a, b) => {
  var a = a.toLowerCase()
  var b = b.toLowerCase()
  var n = -1
  for (let i = 0, len = b.length; i < len; i++) {
    let l = b[i];
    if (!~(n = a.indexOf(l, n + 1))) {
      return false
    }
  }
  return true
}
