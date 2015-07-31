var gulp    = require('gulp');
var config  = require('../config').production;
var options  = require('../config').uglifyJs;
var size    = require('gulp-filesize');
var uglify = require('gulp-uglify');

// Uglify the browserify file(s)
gulp.task('uglifyJs', ['browserify'], function() {
  return gulp.src(config.jsSrc)
    .pipe(uglify(options))
    .pipe(gulp.dest(config.jsdest))
    .pipe(size());
});
