(function (require) {
  "use strict";
  /*jslint maxlen: 90*/
  var len, gulp, tasks, plugins, gulpLoadPlugins, loadPluginsOptions;
  gulp               = require('gulp');
  gulpLoadPlugins    = require("gulp-load-plugins");
  loadPluginsOptions = {scope: ["devDependencies"], pattern: "g*"};
  plugins            = gulpLoadPlugins(loadPluginsOptions);
  tasks              = require("./gulp_config_files/tasks.js").getTasks(gulp, plugins);
  len                = tasks.length - 1;
  for (len; len >= 0; len -= 1) {
    if (tasks[len].taskDeps !== undefined) {
      gulp.task(tasks[len].taskName, tasks[len].taskDeps, tasks[len].taskFunc);
    } else {
      gulp.task(tasks[len].taskName, tasks[len].taskFunc);
    }
  }
  // gulp.task('default', function () {
  //   return gulp.src(['./src/libs/angular-smilies/dist/angular-smilies.png'])
  //              .pipe(gulp.dest('./dist/css'));
  // });
}(require));
