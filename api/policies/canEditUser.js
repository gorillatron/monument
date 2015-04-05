
export default function(req, res, next) {

  if(!req.session.user) {
    console.warn('policy:canEditUser run without any user on session')
    return res.forbidden('You have to be logged in to edit a user')
  }

  if(req.session.user.role === 'admin') {
    return next()
  }

  if(req.session.user.id === req.param('id')) {
    return next()
  }

  return res.forbidden('You cannot edit that user')
}
