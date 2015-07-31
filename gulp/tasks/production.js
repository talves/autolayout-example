var gulp = require('gulp');
var runSequence = require('run-sequence'); // only until gulp 4.0

// Run this to compress all the things!
gulp.task('production', ['clean'], function(callback){
  return runSequence(
    ['images', 'ico', 'markup', 'minifyCss', 'lint'],
    ['uglifyJs'],
    callback
  );
});
