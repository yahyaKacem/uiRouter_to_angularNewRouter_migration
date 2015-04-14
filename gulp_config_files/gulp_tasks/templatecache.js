(function (module, require) {
  "use strict";
  /*jslint maxlen: 200*/
  var templateCacheTask = function templateCacheTaskF(gulp, plugins, dest, files, standalone, templatesModuleName, root, filename) {
    return function () {
      var rename, stream, configs;
      templatesModuleName = templatesModuleName || "templates";
      root                = root || "assets/tpls/";
      filename            = filename || "templates.js";
      rename              = require('./copy_task_helper.js').renameFunc;
      configs = {
        htmlifyOptions: {customPrefixes: [ "lc-"]},
        htmlminOptions: {
          removeComments: true,
          collapseWhitespace: true,
          removeEmptyAttributes: true,
          collapseBooleanAttributes: true
        },
        angularTemplatecacheOptions: {
          root:         root,
          filename:     filename,
          standalone:   standalone,
          module:       templatesModuleName
        },
        wrapperOptions: {
          header: "(function (angular) {\n",
          footer: "\n}(angular));\n"
          // footer: "\n  module.exports = '" + templatesModuleName + "';\n}(angular));\n"
        },
        ngAnnotateOptions: {
          add: true,
          remove: true,
          single_quotes: true
        },
        uglifyjsOptions: {
          outSourceMap: true
        }
      };
      if (standalone) {
        stream = gulp.src(files).pipe(plugins.rename(rename));
      } else {
        stream = gulp.src(files);
      }
      if (files[0] !== './src/app/modules/libraries_override_module/tpls/rating.html') {
        stream = stream.pipe(plugins.htmlmin(configs.htmlminOptions));
      }
      // return stream.pipe(plugins.angularHtmlify(configs.htmlifyOptions))
      return stream
                   .pipe(plugins.angularTemplatecache(configs.angularTemplatecacheOptions))
                   .pipe(plugins.wrapper(configs.wrapperOptions))
                   // .pipe(plugins.ngAnnotate(configs.ngAnnotateOptions))
                   // .pipe(plugins.uglifyjs(configs.angularTemplatecacheOptions.filename, configs.uglifyjsOptions))
                   // .pipe(plugins.uglifyjs())
                   .pipe(gulp.dest(dest));
    };
  };
  module.exports.getTask = templateCacheTask;
}(module, require));
