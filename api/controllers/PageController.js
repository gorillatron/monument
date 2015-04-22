/**
 * PageController
 *
 * @description :: Server-side logic for managing Pages
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

import Promise from 'bluebird';
import {markdown} from 'markdown';


module.exports = {

	layout: 'layout',

	showPage: async function(req, res, next) {

		var pages = null
		var page = null
		var html = null

		var pageName = req.param('page_name')

		if(!pageName) {
			return res.noDroids()
		}

		try {

			pages = await Page.find()
			page = pages.filter((page) => page.name === pageName)[0]

			if(!page) {
				return res.noDroids()
			}

			html = markdown.toHTML(page.content)

			return res.view('page', {
				locals: {html, pages, pageName}
			})

		}
		catch(error) {
			return res.serverError(error)
		}
	}

}

