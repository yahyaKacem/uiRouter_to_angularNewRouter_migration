(function (module) {
  "use strict";
  module.exports = function karmaConfigF(config) {
    var configDefinitionObject = {
      exclude:       [],
      basePath:      "",
      preprocessors: {},
      port:          9876,
      colors:        true,
      autoWatch:     true,
      singleRun:     false,
      browsers:      ["Chrome"],
      frameworks:    ["jasmine"],
      reporters:     ["progress"],
      browserify:    {debug: true},
      logLevel:      config.LOG_INFO,
      files:         [
        "libs/jquery/dist/jquery.js",
        "libs/angular/angular.js",
        "libs/angular-cookies/angular-cookies.js",
        "libs/angular-sanitize/angular-sanitize.js",
        "libs/angular-animate/angular-animate.js",
        "libs/angular-new-router/dist/router.es5.js",
        "libs/angular-ui-router/release/angular-ui-router.js",
        "libs/angular-ui-router-styles/ui-router-styles.js",
        "libs/satellizer/satellizer.js",
        "libs/angular-mocks/angular-mocks.js",
        "js/**/*.js",
        "tests/**/*.spec.js"
      ]
    };
    config.set(configDefinitionObject);
  };
}(module));
