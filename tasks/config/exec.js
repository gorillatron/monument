/**
 * Clean files and folders.
 *
 * ---------------------------------------------------------------
 *
 * This grunt task is configured to clean out the contents in the .tmp/public of your
 * sails project.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-clean
 */

var path = require('path')

module.exports = function(grunt) {

	// var srcPath = path.join(__dirname, '../../adminclient')
	// var dstPath = path.join(__dirname, '../../.tmp/public/js/adminclient/')
	//
	// console.log(srcPath, dstPath)
	//
	// grunt.config.set('exec', {
  //   'buildAdminClient': {
  //     command: 'cd ' +srcPath+ ' && npm install && node_modules/bower/bin/bower install && ./node_modules/ember-cli/bin/ember build --output-path=' +dstPath+ ' && cd ../'
  //   }
  // });

  grunt.loadNpmTasks('grunt-exec');
};
