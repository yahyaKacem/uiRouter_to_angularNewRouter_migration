(function (module, require) {
  "use strict";
  module.exports.getTask = function (gulp, plugins, remotePath, files) {
    var ftp = require('vinyl-ftp');
    return function () {
      var srcOptions, connection, ftpDefinitionObject;
      srcOptions          = {
        base:   '.',
        buffer: false
      };
      ftpDefinitionObject = {
        parallel: 10,
        reload:   true,
        user:     'kacem123',
        password: 'YahiaKac1!',
        log:      plugins.util.log,
        host:     'ftp.mohamedfekihromdhane.com'
      };
      connection          = ftp.create(ftpDefinitionObject);
      return gulp.src(files, srcOptions)
                 .pipe(connection.newer(remotePath))
                 .pipe(connection.dest("/"));
    };
  };
}(module, require));
