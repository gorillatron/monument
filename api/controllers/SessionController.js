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

var bcrypt 		= require('bcrypt')
var uuid   		= require('node-uuid')
var constants = require('../constants')

var FORBIDDEN = constants.errorcodes.FORBIDDEN

module.exports = {

	_resetSession: function(req) {
		delete req.session.authenticated
		delete req.session.token
		delete req.session.user
	},

	getToken: function(req, res) {
		if(req.session.authenticated) {
			return res.jsonx({ token: req.session.token, user: req.session.user })
		}
		else {
			return res.forbidden({error: {code: FORBIDDEN, msg: 'no current token'}})
		}
	},

	generate: function(req, res) {
		var _this = this

		User.findOne({
			or: [
				{email: req.param('useridentification')},
				{phoneNumber: req.param('useridentification')}
			]
		}, function foundUser(err, user) {
			if(err) {
				return next(err)
			}

			if(!user) {
				return res.forbidden({error: {code: FORBIDDEN, msg: 'forbidden'}})
			}

			if(!user.encryptedPassword) {
				return res.forbidden({error: {code: FORBIDDEN, msg: 'forbidden'}})
			}

			bcrypt.compare(req.param('password'), user.encryptedPassword, function(err, compares) {
				if(err) {
					return next(err)
				}

				if(!compares) {
					_this._resetSession(req)
					return res.forbidden({error: {code: FORBIDDEN, msg: ''}})
				}

				req.session.authenticated = true
				req.session.token = uuid.v4()
				req.session.user = user

				res.jsonx({ token: req.session.token, user: req.session.user })
			})
		})
	},

	destroy: function(req, res) {
		this._resetSession(req)
		res.ok({})
	}

};
