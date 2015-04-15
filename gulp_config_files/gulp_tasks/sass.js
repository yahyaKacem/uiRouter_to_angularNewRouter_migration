(function (module) {
  "use strict";
  /*jslint nomen: true, maxlen: 105*/
  module.exports.getTask = function (gulp, sass, dest, files) {
    var path, sassConfigObj;
    path          = require('path');
    sassConfigObj = {
      paths:   [path.join(__dirname, '../../src/sass')]
    };
    return function () {
      return gulp.src(files)
                 .pipe(sass(sassConfigObj))
                 .pipe(gulp.dest(dest));
    };
  };
}(module));
