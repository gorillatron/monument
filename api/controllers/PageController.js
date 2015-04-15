/**
 * PageController
 *
 * @description :: Server-side logic for managing Pages
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

import {markdown} from 'markdown';

module.exports = {

	showPage: async function(req, res, next) {

		var page = null
		var html = null

		var pageName = req.param('page_name')

		try {
			page = await Page.find({name: pageName})
		}
		catch(error) {
			return res.serverError(error)
		}

		if(!page) {
			return res.notFound('These are not the droids you are looking for.')
		}

		html = markdown.toHTML(page.content)

		return res.view('page', {
			locals: {html}
		})
	}

}

