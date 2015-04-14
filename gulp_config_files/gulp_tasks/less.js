(function (module) {
  "use strict";
  /*jslint nomen: true, maxlen: 105*/
  module.exports.getTask = function (gulp, plugins, dest, files, frame) {
    var path, lessConfigObj, oldFlagsUrl, newFlagsUrl;
    newFlagsUrl   = "flags.png";
    path          = require('path');
    oldFlagsUrl   = /\.\.\/img\/flags\.png/g;
    lessConfigObj = {
      paths:   [path.join(__dirname, '../../src/less')]
    };
    return function () {
      var stream = gulp.src(files)
                       .pipe(plugins.less(lessConfigObj));
      if (!frame) {
        stream = stream.pipe(plugins.replace(oldFlagsUrl, newFlagsUrl));
      }
      return stream.pipe(gulp.dest(dest));
    };
  };
}(module));
