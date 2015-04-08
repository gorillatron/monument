/**
 * SubscriptionController
 *
 * @description :: Server-side logic for managing subscriptions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

import slugalize from '../helpers/slugalize';
import WLValidationError from 'sails/node_modules/waterline/lib/waterline/error/WLValidationError';
import norwegianNumberRegexp from '../regexp/norwegianNumber';


export default {

	signup: function(req, res) {
		var formdata =  req.session.formdata
		var validationErrors =  req.session.validationErrors

		delete req.session.validationErrors
		delete req.session.formdata

		res.view('subscription/index', {formdata, validationErrors, layout: 'subscription/layout'})
	},

	subscribe: function(req, res, next) {
		var phoneNumber = req.param('phoneNumber')
		var email = req.param('email')
		var name = req.param('name')

		var phoneNumberParts = norwegianNumberRegexp.exec(phoneNumber)

		if(phoneNumberParts) {
			phoneNumber = phoneNumberParts[5]
		}

		var userData = {
			name,
			email,
			phoneNumber,
			subscribesToNews: true
		}

		User.findOrCreateOne(userData)
			.then((user) => {
				req.session.flash = { messages: ['Takk for din påmelding!'] }
				res.redirect('/subscription')
			})
			.catch(WLValidationError, (validationErrors) => {
				req.session.formdata = {email, phoneNumber, name}
				req.session.flash = {
					error: true,
					messages: [validationErrors.message]
				}
				res.redirect('subscription')
			})
			.catch((error) => {
				res.serverError(error)
			})
	}

}
