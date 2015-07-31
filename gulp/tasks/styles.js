var gulp      = require('gulp');
var changed    = require('gulp-changed');
var paths    = require('../config').paths;
var browserSync  = require('browser-sync');

gulp.task('styles', function() {
  return gulp.src(paths.wildcards.styles)
    .pipe(changed(paths.dest + paths.styles)) // Ignore unchanged files
    .pipe(gulp.dest(paths.dest + paths.styles))
    .pipe(browserSync.reload({stream:true}));
})
