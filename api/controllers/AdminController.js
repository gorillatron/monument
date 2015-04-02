/**
 * AdminController
 *
 * @description :: Server-side logic for managing admins
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	layout: 'admin/layout',

	index: function(req, res) {
		res.locals.layout = 'admin/layout'
		res.locals.emberconfig = require('../../adminclient/config/environment')('development')
		res.view()
	}

};
