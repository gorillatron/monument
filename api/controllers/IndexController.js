/**
 * IndexController
 *
 * @description :: Server-side logic for managing admins
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

import Promise from 'bluebird';

export default {

	layout: 'layout',

	index: async function(req, res) {

		var [pages, podcasts] = await Promise.all([ Page.find(), Podcast.find() ])
		var currentPage = {name: 'podcasts'}

		podcasts = podcasts.sort((prev, next) => {
			let prevNum, nextNum

			try {
				prevNum = parseInt(
					prev.soundcloudTrack.title.match(/\d+/)[0]
				)
				nextNum = parseInt(
					next.soundcloudTrack.title.match(/\d+/)[0]
				)
				if(isNaN(prevNum) || isNaN(nextNum)) {
					return 0
				}
			}
			catch(e) {
				return 0
			}
			
			return nextNum >= prevNum ? 1 : -1
		})

		return res.view('index', {currentPage, pages, podcasts})
	}

};
