
module.exports = function canEditUser(req, res, next) {
  
  if(req.session.user.role === 'admin') {
    return next()
  }

  if(req.session.user.id === req.param('id')) {
    return next()
  }

  return res.forbidden('You cannot edit that user')
}
