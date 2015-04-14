(function (module, require) {
  "use strict";
  /*jslint maxlen: 130*/
  var templateCacheStream = function templateCacheStreamF(gulp, plugins, files, standalone, templatesModuleName, root, filename) {
    var rename, stream, configs;
    root                = root || "assets/tpls/";
    filename            = filename || "templates.js";
    templatesModuleName = templatesModuleName || "templates";
    rename              = require('./copy_task_helper.js').renameFunc;
    configs             = {
      htmlifyOptions: {customPrefixes: [ "lc-"]},
      angularTemplatecacheOptions: {
        root:         root,
        filename:     filename,
        standalone:   standalone,
        module:       templatesModuleName
      },
      wrapperOptions: {
        footer: "\n}(angular));\n",
        header: "(function (angular) {\n  \"use strict\";\n  "
      },
      htmlminOptions: {
        removeComments: true,
        collapseWhitespace: true,
        removeEmptyAttributes: true,
        collapseBooleanAttributes: true
      }
    };
    if (standalone) {
      stream = gulp.src(files)
                   .pipe(plugins.rename(rename));
    } else {
      stream = gulp.src(files);
    }
    stream = stream.pipe(plugins.angularHtmlify(configs.htmlifyOptions));
    if (files[0] !== './src/app/modules/libraries_override_module/tpls/rating.html') {
      stream = stream.pipe(plugins.htmlmin(configs.htmlminOptions));
    }
    return stream.pipe(plugins.angularTemplatecache(configs.angularTemplatecacheOptions))
                 .pipe(plugins.wrapper(configs.wrapperOptions));
  };
  module.exports.getTemplateCacheStream = templateCacheStream;
}(module, require));
