(function (module) {
  "use strict";
  var getTask = function getTaskF(gulp, ngdocs, dest, files) {
    return function () {
      var options = {
        html5Mode:    false,
        title:        "Loyalcraft API",
        scripts:      [
          'build/assets/js/vendor.js',
          'build/assets/js/app.js'
        ],
        loadDefaults: {
          angular:        false,
          angularAnimate: false
        }
      };
      return gulp.src(files.jsFiles)
                 .pipe(ngdocs.process(options))
                 .pipe(gulp.dest(dest));
    };
  };
  module.exports.getTask = getTask;
}(module));
