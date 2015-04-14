/*jslint nomen: true*/
(function (module, require) {
  "use strict";
  module.exports.getTask = function (configFile) {
    var karma = require('karma').server;
    return function (done) {
      karma.start({
        singleRun: true,
        configFile: configFile
      }, done);
    };
  };
}(module, require));
