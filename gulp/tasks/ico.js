var gulp       = require('gulp');
var changed    = require('gulp-changed');
var config     = require('../config').paths;
var browserSync  = require('browser-sync');

gulp.task('ico', function() {
  return gulp.src(config.ico)
    .pipe(changed(config.dest)) // Ignore unchanged files
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
