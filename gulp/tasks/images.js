var gulp       = require('gulp');
var changed    = require('gulp-changed');
var paths     = require('../config').paths;
var browserSync  = require('browser-sync');

gulp.task('images', function() {
  return gulp.src(paths.wildcards.images)
    .pipe(changed(paths.dest + paths.images)) // Ignore unchanged files
    .pipe(gulp.dest(paths.dest + paths.images))
    .pipe(browserSync.reload({stream:true}));
});
