/**
 * sessionUserHasRole
 *
 * @module      :: Policy Factory
 * @description :: Checks the session user to see if hes a current role
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */

import PolicyException from './PolicyException';


export default function(role) {
  return function(req, res, next) {

    // return res.forbidden(new PolicyException({ message:
    //   `Invalid user role, required role is ${role}, requesting user is ${req.session.user.role}`}))

    if(req.session.user.role !== role) {
      return res.forbidden(new PolicyException({ message:
        `Invalid user role, required role is ${role}, requesting user is ${req.session.user.role}`}))
    }

    next()
  }
}
