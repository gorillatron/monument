/**
 * tokenAuthenticate
 *
 * @module      :: Policy
 * @description :: Checks if the token in the header 'Authorization' matched the same as in the session
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */
 export default function(req, res, next) {

  var authorizationHeader = req.get('Authorization') || ''
  var token = authorizationHeader.replace('Token:', '')

  if( token === req.session.token ) {
    return next()
  }

  res.forbidden({ error: {code: 'tokenerror', message: 'Invalid or no "Token:" in Authorization header'} })
};
