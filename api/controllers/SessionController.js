/**
* SessionController
*
* @description :: Server-side logic for managing sessions
* @help        :: See http://links.sailsjs.org/docs/controllers
*/

var bcrypt = require('bcrypt')

module.exports = {

	getToken: function(req, res) {
		if(req.session.authenticated) {
			res.jsonx({
				token: req.session.token
			})
		}
		else {
			res.forbidden({error: {code: 'unauthorized', msg: 'no current token'}})
		}
	},

	generate: function(req, res) {
		console.log('create')
		User.findOne({email: req.param('email')}, function foundUser(err, user) {
			if(err) {
				return next(err)
			}
			console.log('create', user)
			if(!user) {
				return res.forbidden({error: {code: 'unauthorized', msg: ''}})
			}

			bcrypt.compare(req.param('password'), user.encryptedPassword, function(err, compares) {
				console.log('create', err)
				if(err) {
					return next(err)
				}
				if(!compares) {
					return res.forbidden({error: {code: 'unauthorized', msg: ''}})
				}

				req.session.authenticated = true
				req.session.user = user

				res.ok()
			})
		})
	}

};
