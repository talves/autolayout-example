var gulp      = require('gulp');
var paths    = require('../config').paths;
var minifyCSS = require('gulp-minify-css');
var size      = require('gulp-filesize');

gulp.task('minifyCss', function() {
  return gulp.src(paths.wildcards.styles)
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest(paths.dest + paths.styles))
    .pipe(size());
})
