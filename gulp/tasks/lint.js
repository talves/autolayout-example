var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var paths = require('../config').paths;

// runs jshint on all .js files
gulp.task('lint', function() {
  return gulp.src(paths.wildcards.scripts)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});
