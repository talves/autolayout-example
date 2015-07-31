var gulp = require('gulp');
var changed    = require('gulp-changed');
var paths = require('../config').paths;
var browserSync  = require('browser-sync');

gulp.task('markup', function() {
  return gulp.src(paths.wildcards.markup)
    .pipe(changed(paths.dest)) // Ignore unchanged files
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.reload({stream:true}));
});
