/**
 * EventController
 *
 * @description :: Server-side logic for managing events
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

function slugalize(string) {
	return string.toLowerCase().replace(/\s/g, '')
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

			res.view({
				event: events[0]
			})
		})
	}

}
