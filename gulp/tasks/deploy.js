var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var paths = require('../config').paths;

// this task runs the build-sfx
// then runs deploy-gh-pages which publishes the ./dist folder to gh-pages branch
gulp.task('deploy-pages', ['deploy-gh-pages']);

// then runs deploy-gh-pages which publishes the ./dist folder to gh-pages branch
gulp.task('deploy-gh-pages', ['production'], function() {
  return gulp.src(paths.dest+'/**/*')
    .pipe(ghPages());
});
