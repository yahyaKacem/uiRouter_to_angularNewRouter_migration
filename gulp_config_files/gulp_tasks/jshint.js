(function (module) {
  "use strict";
  module.exports.getTask = function (gulp, jshint, filesToLint) {
    return function () {
      return gulp.src(filesToLint)
                 .pipe(jshint('.jshintrc'))
                 .pipe(jshint.reporter('jshint-stylish'));
    };
  };
}(module));
