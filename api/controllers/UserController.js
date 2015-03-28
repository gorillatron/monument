/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	new: function(req, res) {
		res.view()
	},

	index: function(req, res, next) {
		User.find(function(err, users) {
			if(err) {
				return next(err)
			}

			res.view({ users: users })
		})
	},

	edit: function(req, res, next) {
		User.findOne(req.param('id'), function foundUser(err, user) {
			if(err) {
				return next(err)
			}

			res.view({
				user: user
			})
		})
	},

	create: function(req, res, next) {
		User.create(req.param('id'), {
			name: req.param('name'),
			email: req.param('email'),
			phoneNumber: req.param('phoneNumber'),
			role: req.param('role'),
			password: req.param('password'),
			passwordConfirmation: req.param('passwordConfirmation')
		},
		function createdUser(err, user) {
			if(err) {
				return next(err)
			}

			req.session.authenticated = true
			req.session.user = user

			res.redirect('/user')
		})
	},

	update: function(req, res, next) {
		User.update(req.param('id'), {
			name: req.param('name'),
			email: req.param('email'),
			role: req.param('role'),
			phoneNumber: req.param('phoneNumber')
		},
		function updatedUser(err, user) {
			if(err) {
				return next(err)
			}

			res.redirect('/user')
		})
	},

	destroy: function(req, res, next) {
		User.destroy(req.param('id'), function userDestroyed(err) {
	    if (err) {
				return next(err)
			}

			res.redirect('/user')
	  })
	}


};
