
exports.index = function( req, res ) {
  res.render( 'index', {
    meta: {
      title: 'Monument',
      description: "norwegian techno, monument"
    },
    bootstrapJSON: JSON.stringify({
      podcasts: req.podcasts
    })
  })
}