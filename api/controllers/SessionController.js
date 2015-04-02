/**
* SessionController
*
* @description :: Server-side logic for managing sessions
* @help        :: See http://links.sailsjs.org/docs/controllers
*/

var bcrypt = require('bcrypt')
var uuid   = require('node-uuid')

module.exports = {

	getToken: function(req, res) {
		if(req.session.authenticated) {
			res.jsonx({ token: req.session.token, user: req.session.user })
		}
		else {
			res.forbidden({error: {code: 'unauthorized', msg: 'no current token'}})
		}
	},

	generate: function(req, res) {
		User.findOne({email: req.param('email')}, function foundUser(err, user) {
			if(err) {
				return next(err)
			}

			if(!user) {
				return res.forbidden({error: {code: 'unauthorized', msg: ''}})
			}

			bcrypt.compare(req.param('password'), user.encryptedPassword, function(err, compares) {

				if(err) {
					return next(err)
				}
				if(!compares) {
					return res.forbidden({error: {code: 'unauthorized', msg: ''}})
				}

				req.session.authenticated = true
				req.session.token = uuid.v4()
				req.session.user = user

				res.jsonx({ token: req.session.token, user: req.session.user })
			})
		})
	},

	destroy: function(req, res) {
		delete req.session.authenticated
		delete req.session.token
		delete req.session.user
		res.ok({})
	}

};
