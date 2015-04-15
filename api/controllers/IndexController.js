/**
 * IndexController
 *
 * @description :: Server-side logic for managing admins
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

export default {

	layout: 'layout',

	index: function(req, res) {
		res.view('index')
	}

};
