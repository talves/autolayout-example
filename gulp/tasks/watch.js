/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
*/

var gulp     = require('gulp');
var paths   = require('../config').paths;
var wildcards = paths.wildcards;

gulp.task('watch', ['watchify', 'browserSync'], function() {
  gulp.watch(wildcards.images, ['images']);
  gulp.watch(paths.ico, ['ico']);
  gulp.watch(wildcards.markup, ['markup']);
  gulp.watch(wildcards.styles, ['styles']);
  // Watchify will watch and recompile our JS, so no need to gulp.watch it
});
