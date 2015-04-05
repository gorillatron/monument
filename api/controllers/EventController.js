/**
 * EventController
 *
 * @description :: Server-side logic for managing events
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

import validateEmail from '../validators/validateEmail';
import validatePhonenumber from '../validators/validatePhonenumber';
import slugalize from '../helpers/slugalize';

export default {

	signup: function(req, res) {
		res.view()
	},

	show: function(req,res) {
		Event.find(function(err, events) {
			if(err) {
				return next(err)
			}

			var events = events.filter(function(event) {
				return slugalize(event.name) === slugalize(req.param('slug'))
			})

			if(events.length === 0) {
				return res.notFound()
			}

			if(events.length > 1) {
				console.log('/EventController.show found more than one matching event for slug: ' + slug)
				console.log(events)
			}

			var event = events[0]

			var viewPath = 'event/' + slugalize(event.name)

			res.view(viewPath, {
				event: event
			})
		})
	},

	partake: function(req, res, next) {
		var phoneNumber = req.param('phoneNumber')
		var email = req.param('email')
		var name = req.param('name')

		if(!name || name.length < 4) {
			req.session.flash = { error: true, message: 'Navn må ha minst tre tegn ' }
			return res.redirect('/event/signup')
		}

		if(!validateEmail(email) && !validatePhonenumber(phoneNumber)) {
			req.session.flash = { error: true, message: 'Epost eller mobilnummer ikke gyldig' }
			return res.redirect('/event/signup')
		}

		User.findOne({
			or: [
				{ phoneNumber: phoneNumber },
				{ email: email }
			]
		},
		function existingUser(err, user) {
			if(err) {
				return next(err)
			}

			function ensuredUser(user) {
				if(email) {
					user.email = email
				}
				if(phoneNumber) {
					user.phoneNumber = phoneNumber
				}

				user.name = name

				user.save(function userSaved(err) {
					if(err) {
						return next(err)
					}

					req.session.flash = { message: 'Takk for din påmelding!' }
					res.redirect('/event/signup')
				})
			}

			if(user) {
				ensuredUser(user)
			}
			else {
				User.create({
					email: email,
					phoneNumber: phoneNumber
				},
				function userCreated(err, user) {
					if(err) {
						return next(err)
					}

					ensuredUser(user)
				})
			}
		})
	}

}
