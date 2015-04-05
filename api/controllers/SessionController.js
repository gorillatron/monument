/**
* SessionController
*
* Basic session and token based authentication.
* Generate creates a session, sets it to authenticated and populates it
* with the current user and a generated uuid v4 token. The token is used to
* authorize requests to protected routes.
*
* @description :: Server-side logic for managing sessions and token authentication
* @help        :: See http://links.sailsjs.org/docs/controllers
*/

import bcrypt from 'bcrypt';
import uuid from 'node-uuid';
import constants from '../constants';

var FORBIDDEN = constants.errorcodes.FORBIDDEN

function invalidateSession(session) {
	delete session.authenticated
	delete session.token
	delete session.user
}

function authenticateSession(session, user) {
	session.authenticated = true
	session.token = uuid.v4()
	session.user = user
}

export default {

	getToken: function(req, res) {
		if(req.session.authenticated) {
			return res.jsonx({ token: req.session.token, user: req.session.user })
		}
		else {
			return res.forbidden({ error: {code: FORBIDDEN, message: 'no current token'} })
		}
	},

	generate: function(req, res) {
		User.findOne({
			or: [
				{email: req.param('useridentification')},
				{phoneNumber: req.param('useridentification')}
			]
		}, function foundUser(err, authenticatingUser) {
			if(err) {
				return next(err)
			}

			if(!authenticatingUser) {
				return res.forbidden({ error: {code: FORBIDDEN, message: 'Unable to authenticate'} })
			}

			if(!authenticatingUser.encryptedPassword) {
				return res.forbidden({ error: {code: FORBIDDEN, message: 'Unable to authenticate'} })
			}

			bcrypt.compare(req.param('password'), authenticatingUser.encryptedPassword, function(err, compares) {
				if(err) {
					return next(err)
				}

				if(!compares) {
					invalidateSession(req.session)
					return res.forbidden({ error: {code: FORBIDDEN, message: 'Unable to authenticate'} })
				}

				authenticateSession(req.session, authenticatingUser)

				res.jsonx({ token: req.session.token, user: req.session.user })
			})
		})
	},

	destroy: function(req, res) {
		invalidateSession(req.session)
		res.ok({})
	}

};
