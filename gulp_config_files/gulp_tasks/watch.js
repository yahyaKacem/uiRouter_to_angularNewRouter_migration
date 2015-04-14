/*jslint maxlen: 90*/
(function (module) {
  "use strict";
  module.exports.getTask = function (gulp, files) {
    return function watchTaskF() {
      var file, task, filesToWatch, tasksToRun;
      for (file in files.filesToWatch) {
        if (files.filesToWatch.hasOwnProperty(file) && files.hasOwnProperty(file)) {
          filesToWatch = files[file];
          tasksToRun   = files.filesToWatch[file];
          gulp.watch(filesToWatch, {interval: 1000}, tasksToRun);
        }
      }
    };
  };
}(module));
