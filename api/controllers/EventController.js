/**
 * EventController
 *
 * @description :: Server-side logic for managing events
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

function slugalize(string) {
	return string.toLowerCase().replace(/\s/g, '')
}

function validateEmail(email) {
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
  return re.test(email)
}

module.exports = {

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

	partake: function(req, res) {
		var phoneNumber = req.param('phoneNumber')
		var email = req.param('email')

		if(!validateEmail(email) && !validatePhoneNumber(phoneNumber)) {
			return res.badRequest('')
		}

		User.find({
			or: [


			]
		})
	}

}
