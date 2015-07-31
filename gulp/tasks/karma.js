/* karmaTask
   ------------
   Setup Later and install in workflow, ['karma'] prior to production build
*/
var gulp = require('gulp');
var karma = require('karma');

var karmaTask = function(done) {
  karma.server.start({
    configFile: process.cwd() + '/karma.conf.js',
    singleRun: true
  }, done);
};

gulp.task('karma', karmaTask);

module.exports = karmaTask;
