/**
 * SubscriptionController
 *
 * @description :: Server-side logic for managing subscriptions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

import slugalize from '../helpers/slugalize';


var objectValues = (obj) => {
	return Object.keys(obj).map((key) => obj[key])
}

export default {

	signup: function(req, res) {
		var formdata =  req.session.formdata
		var validationErrors =  req.session.validationErrors

		delete req.session.validationErrors
		delete req.session.formdata

		res.view('subscription', {formdata, validationErrors})
	},

	subscribe: function(req, res, next) {
		var phoneNumber = req.param('phoneNumber')
		var email = req.param('email')
		var name = req.param('name')

		var handleErrors = (validationErrors) => {
			req.session.formdata = {email, phoneNumber, name}
			req.session.flash = {
				error: true,
				messages: [validationErrors.message]
			}
			res.redirect('/subscription')
		}

		var phoneNumberParts = /^((0047)?|(\+47)?|(47)?)(\d{8})$/.exec(phoneNumber)

		if(phoneNumberParts) {
			phoneNumber = phoneNumberParts[5]
		}

		User.findOrCreateOne({email, phoneNumber}).then((user) =>{

			user.name = name
			user.subscribesToNews = true

			user.validate()
				.then(() => {

					user.save()
						.then((err) => {
							req.session.flash = { messages: ['Takk for din påmelding!'] }
							res.redirect('/subscription')
						})
						.catch(next)
				})
				.catch(handleErrors)
		})
		.catch(handleErrors)
	}

}
