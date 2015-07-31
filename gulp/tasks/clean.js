var gulp = require('gulp');
var del = require('del');
var config = require('../config').paths;

// Not all tasks need to use streams
// A gulpfile is just another node program and you can use all packages available on npm
gulp.task('clean', function(cb) {
  // You can use multiple globbing patterns as you would with `gulp.src`
  del([config.dest], cb);
});
