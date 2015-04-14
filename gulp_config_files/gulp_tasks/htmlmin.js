(function () {
  "use strict";
  module.exports.getTask = function (gulp, plugins, dest, files, rename) {
    return function () {
      var copyHelper, configs;
      configs = {
        htmlifyOptions: {customPrefixes: [ "lc-"]},
        htmlminOptions: {
          removeComments: true,
          collapseWhitespace: true,
          removeEmptyAttributes: true,
          collapseBooleanAttributes: true
        }
      };
      if (!rename) {
        copyHelper = require('./copy_task_helper.js');
        rename     = copyHelper.renameFunc;
      }
      return gulp.src(files)
                 .pipe(plugins.rename(rename))
                 .pipe(plugins.angularHtmlify(configs.htmlifyOptions))
                 .pipe(plugins.htmlmin(configs.htmlminOptions))
                 .pipe(gulp.dest(dest));
    };
  };
}());
