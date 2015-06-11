/**
 * AdminController
 *
 * @description :: Server-side logic for managing admins
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

export default {

	layout: 'admin/layout',

	index: function(req, res) {
		res.locals.layout = 'admin/layout'
		res.locals.emberconfig = require('../../adminclient/config/environment')('development')
		res.view()
	},

	forbidden: function(req, res) {
		res.locals.layout = 'admin/forbidden_layout'
		res.view()
	}

};
