(function (module, require) {
  "use strict";
  /*jslint maxlen: 200, nomen: true*/
  module.exports.getTask = function (gulp, plugins, dest, files, env) {
    return function () {
      var
        configs, merge2, templateCacheStream, browserify, source, buffer,
        envify, mainStream, browserifyStearm, TemplateCacheStream;
      merge2              = require('merge2');
      browserify          = require('browserify');
      buffer              = require('vinyl-buffer');
      envify              = require('envify/custom');
      source              = require('vinyl-source-stream');
      TemplateCacheStream = require('./templatecache_stream.js');
      configs             = {
        ngAnnotateOptions: {
          add: true,
          remove: true,
          single_quotes: true
        },
        envifyConfigs: {
          _: 'purge',
          NODE_ENV: env
        }
      };
      templateCacheStream = merge2(
        TemplateCacheStream.getTemplateCacheStream(gulp, plugins, files.tplsFiles, true),
        TemplateCacheStream.getTemplateCacheStream(gulp, plugins, files.tabsOverrideTpls, false, "templates", "template/tabs", "tabs.js"),
        TemplateCacheStream.getTemplateCacheStream(gulp, plugins, files.modalOverrideTpls, false, "templates", "template/modal", "modal.js"),
        TemplateCacheStream.getTemplateCacheStream(gulp, plugins, files.ratingOverrideTpls, false, "templates", "template/rating", "rating.js"),
        TemplateCacheStream.getTemplateCacheStream(gulp, plugins, files.popoverOverrideTpls, false, "templates", "template/popover", "popover.js"),
        TemplateCacheStream.getTemplateCacheStream(gulp, plugins, files.tooltipOverrideTpls, false, "templates", "template/tooltip", "tooltip.js"),
        TemplateCacheStream.getTemplateCacheStream(gulp, plugins, files.accordionOverrideTpls, false, "templates", "template/accordion", "accordion.js"),
        TemplateCacheStream.getTemplateCacheStream(gulp, plugins, files.datepickerOverrideTpls, false, "templates", "template/datepicker", "datepicker.js")
      );
      browserifyStearm    = browserify(files.appFile).transform(envify(configs.envifyConfigs))
                                                     .bundle()
                                                     .pipe(source('app.js'))
                                                     .pipe(buffer());
      mainStream          = merge2(templateCacheStream, browserifyStearm);
      return mainStream.pipe(plugins.concat('app.js'))
                       .pipe(plugins.ngAnnotate(configs.ngAnnotateConfigs))
                       .pipe(plugins.filesize())
                       .pipe(buffer())
                       .pipe(gulp.dest(dest));
    };
  };
}(module, require));
