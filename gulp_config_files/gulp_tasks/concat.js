(function (module) {
  "use strict";
  /*jslint maxlen: 95*/
  var getTask = function getTaskF(gulp, plugins, dest, files) {
    return function () {
      var oldUtilsPath, newUtilsPath;
      oldUtilsPath = 'bower_components/intl-tel-input/lib/libphonenumber/build/utils.js';
      newUtilsPath = 'assets/js/utils.js';
      return gulp.src(files.libs)
                 .pipe(plugins.concat(files.targetVendorFile))
                 .pipe(plugins.replace(oldUtilsPath, newUtilsPath))
                 .pipe(gulp.dest(dest));
    };
  };
  module.exports.getTask = getTask;
}(module));
