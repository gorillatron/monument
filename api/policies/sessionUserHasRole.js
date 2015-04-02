/**
 * sessionUserHasRole
 *
 * @module      :: Policy Factory
 * @description :: Checks the session user to see if hes a current role
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */
module.exports = function(role) {
  return function(req, res, next) {

    if(req.session.user.role !== role) {
      return res.forbidden({ error: {code: 'roleexception', message: 'This route requires role: ' + role + ' but session user has role ' + req.session.user.role} })
    }
    else {
      next()
    }

  }

}
