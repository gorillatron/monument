var path        = require( 'path' )
var gulp        = require( 'gulp' )
var browserify  = require( 'gulp-browserify' )
var reactify    = require( 'reactify' )
var less        = require( 'gulp-less' )
var mkdirp      = require( 'mkdirp' )
var rimraf      = require( 'rimraf' )
var rename      = require( 'gulp-rename' )



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


function compileJs(path, cb) {
  browserify( path )
    .transform({ extension: 'jsx', harmony: true }, reactify )
    .bundle(function( err, programm ) {
      if( err )
        return cb( err )
      cb( null, programm )
    })
}



gulp.task('build-www-js', function() {
  gulp.src( paths.client.mainjs )
    .pipe(browserify({
      transform: [reactify],
      extensions: ['.jsx']
    }))
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


gulp.task('build-www', ['build-www-js', 'build-www-css', 'build-www-moveassets', 'build-www-movehtml'])
