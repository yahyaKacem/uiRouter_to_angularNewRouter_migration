(function (module) {
  "use strict";
  module.exports.getTask = function (gulp, jslint, filesToLint) {
    var jslintConfig = {
      indent: 2,
      white: false,
      vars: false,
      stupid: false,
      sloppy: false,
      unparam: false,
      plusplus: false,
      maxlen: 75,
      evil: false,
      eqeq: false,
      predef: [
        "jQuery",
        "module",
        "window",
        "console",
        "angular",
        "require",
        "document"
      ]
    };
    return function () {
      return gulp.src(filesToLint)
                 .pipe(jslint(jslintConfig));
    };
  };
}(module));
