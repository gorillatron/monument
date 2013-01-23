
module.exports = function( ctor ) {
  return function( a, b, c, d, e, f, g ) {
    return new ctor( a, b, c, d, e, f, g )
  }
}