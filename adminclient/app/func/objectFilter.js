
export default (obj, filter) => {
  return Object.keys(obj).reduce((out, key) => {

    var val = obj[key]

    if(filter(val, key)) {
      out[key] = val
    }

    return out
  }, {})
}
