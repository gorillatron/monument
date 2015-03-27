/**
 * SessionController
 *
 * @description :: Server-side logic for managing sessions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var bcrypt = require('bcrypt')

module.exports = {

	new: function(req,res) {
		res.view()
	},

	create: function(req, res, next) {
		User.findOne({email: req.param('email')}, function foundUser(err, user) {
			if(err) {
				return next(err)
			}

			bcrypt.compare(req.param('password'), user.encryptedPassword, function(err, compares) {
				if(err) {
					return next(err)
				}
				if(!compares) {
					return next(new Error('wrong password'))
				}

				req.session.authenticated = true
				req.session.user = user

				res.redirect('/')
			})
		})
	}

};
