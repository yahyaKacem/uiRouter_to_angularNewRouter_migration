(function (module, require) {
  "use strict";
  /*jslint maxlen: 90*/
  var getTask = function getTaskF(gulp, plugins, dest, filesToCopy, recursive, simple) {
    var copyRenameFunc = require('./copy_task_helper.js').copyRenameFunc;
    return function () {
      var stream;
      if (recursive) {
        stream = gulp.src("**/*", {cwd: recursive});
      } else if (simple) {
        stream = gulp.src(filesToCopy);
      } else {
        stream = gulp.src(filesToCopy).pipe(plugins.rename(copyRenameFunc));
      }
      return stream.pipe(gulp.dest(dest));
    };
  };
  module.exports.getTask = getTask;
}(module, require));
