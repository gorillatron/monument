module.exports = function(grunt) {

  grunt.config.set('browserify', {
    js: {
      src : '.tmp/public/js/app.js',
      dest: '.tmp/public/js/build.js'
    },
    options: {
      transform: [require('grunt-react').browserify]
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
};
