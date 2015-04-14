(function (module) {
  "use strict";
  module.exports.getTask = function (gulp, plugins, dest, files, rename) {
    if (!rename) {
      rename = require('./copy_task_helper.js').renameFunc;
    }
    return function () {
      var jadeConfigObject = {pretty: true};
      return gulp.src(files)
                 .pipe(plugins.jade(jadeConfigObject))
                 .pipe(plugins.rename(rename))
                 .pipe(gulp.dest(dest));
    };
  };
}(module));
