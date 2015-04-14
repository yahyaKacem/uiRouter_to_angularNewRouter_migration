(function (module) {
  "use strict";
  module.exports = function karmaConfigF(config) {
    var configDefinitionObject = {
      exclude:       [],
      basePath:      "",
      port:          9876,
      colors:        true,
      autoWatch:     true,
      singleRun:     false,
      browsers:      ["Chrome"],
      reporters:     ["progress"],
      browserify:    {debug: true},
      logLevel:      config.LOG_INFO,
      frameworks:    ["jasmine", "browserify"],
      preprocessors: {"src/app/**/*.js": ["browserify"]},
      files:         [
        "build/assets/js/vendor.js",
        "src/libs/angular-mocks/angular-mocks.js",
        "build/assets/js/app.js",
        "src/app/**/*.spec.js"
      ]
    };
    config.set(configDefinitionObject);
  };
}(module));
