/**
 * IndexController
 *
 * @description :: Server-side logic for managing admins
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

export default {

	layout: 'layout',

	index: async function(req, res) {

		var podcasts = await Podcast.find()

		return res.view('index', {
			locals: {
				podcasts: podcasts
			}
		})
	}

};
