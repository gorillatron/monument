var path        = require( 'path' )
var fs          = require( 'fs' )
var gulp        = require( 'gulp' )
var browserify  = require( 'gulp-browserify' )
var reactify    = require( 'reactify' )
var less        = require( 'gulp-less' )
var uglify      = require( 'gulp-uglify' )
var mkdirp      = require( 'mkdirp' )
var rimraf      = require( 'rimraf' )
var rename      = require( 'gulp-rename' )
var insert      = require( 'gulp-insert' )


var paths = {
  client: {
    mainless:   path.join(__dirname, 'client/src/less/main.less'),
    mainjs:     path.join(__dirname, 'client/src/main.js'),
    assets:     path.join(__dirname, 'client/assets/**'),
    indexhtml:  path.join(__dirname, 'client/index.html')
  },
  build: {
    www:        path.join(__dirname, 'client/build/www/')
  }
}


gulp.task('build-www-js', function() {
  gulp.src( paths.client.mainjs )
    .pipe(browserify({
      transform: [reactify],
      extensions: ['.jsx']
    }))
    .pipe( uglify() )
    .pipe( insert.prepend(fs.readFileSync( path.join(__dirname, './com.txt') )) )
    .pipe( rename('app.js') )
    .pipe( gulp.dest(paths.build.www) )
})


gulp.task('build-www-css', function() {
  gulp.src( paths.client.mainless )
    .pipe(less() )
    .pipe( rename('styles.css') )
    .pipe( gulp.dest(paths.build.www) )
})


gulp.task('build-www-moveassets', function() {
  gulp.src( paths.client.assets )
    .pipe( gulp.dest(paths.build.www) )
})


gulp.task('build-www-movehtml', function() {
  gulp.src( paths.client.indexhtml )
    .pipe( gulp.dest(paths.build.www) )
})


gulp.task('default', ['build-www-js', 'build-www-css', 'build-www-moveassets', 'build-www-movehtml'])
