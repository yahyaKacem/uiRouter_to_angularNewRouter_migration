(function (module) {
  "use strict";
  /*jslint maxlen: 145*/
  var getTasks            = function getTasksF(gulp, plugins, directories, files, taskRunners) {
    var
      merge2, frameTask, frameBuildJsTask, frameLessBuildTask, lodash,
      libsTplsStream, frameFtpTask;
    merge2             = require('merge2');
    lodash             = require('lodash');
    frameFtpTask       = taskRunners.ftp.getTask(gulp, plugins, directories.remotePath, files.allFrameFiles);
    frameLessBuildTask = taskRunners.less.getTask(gulp, plugins, directories.frame.build.cssDir, files.frameLessFiles, true);
    frameBuildJsTask   = function frameBuildJsTaskF() {
      var configs, jsStream, tplsStream, mergedStream;
      configs        = {
        htmlifyOptions: {customPrefixes: [ "lc-"]},
        ngAnnotateOptions: {
          add:           true,
          remove:        true,
          single_quotes: true
        },
        angularTemplatecacheOptions: {
          standalone: true,
          root:       'tpls/',
          module:     'frameTemplates',
          filename:   'frame_templates.js'
        },
        angularLibsTemplatecacheOptions: {
          standalone: false,
          module:     'frameTemplates',
          root:       'template/modal/',
          filename:   'frame_libs_modal_templates.js'
        },
        wrapperOptions: {
          footer: "\n}(angular));\n",
          header: "(function (angular) {\n  \"use strict\";\n  "
        },
        htmlminOptions: {
          removeComments:            true,
          collapseWhitespace:        true,
          removeEmptyAttributes:     true,
          collapseBooleanAttributes: true
        }
      };
      jsStream       = gulp.src(files.frameJsFiles)
                           .pipe(plugins.concat('frame.js'));
      tplsStream     = gulp.src(files.frameTplsFiles)
                           .pipe(plugins.angularHtmlify(configs.htmlifyOptions))
                           .pipe(plugins.htmlmin(configs.htmlminOptions))
                           .pipe(plugins.angularTemplatecache(configs.angularTemplatecacheOptions))
                           .pipe(plugins.wrapper(configs.wrapperOptions));
      libsTplsStream = gulp.src(files.modalOverrideTpls)
                           .pipe(plugins.angularHtmlify(configs.htmlifyOptions))
                           .pipe(plugins.htmlmin(configs.htmlminOptions))
                           .pipe(plugins.angularTemplatecache(configs.angularLibsTemplatecacheOptions))
                           .pipe(plugins.wrapper(configs.wrapperOptions));
      mergedStream   = merge2(tplsStream, libsTplsStream, jsStream);
      return mergedStream.pipe(plugins.concat('frame.js'))
                         .pipe(plugins.ngAnnotate(configs.ngAnnotateConfigs))
                         .pipe(gulp.dest(directories.frame.build.jsDir));
    };
    frameTask          = [
      "frame.buildJs",
      "frame.lessBuild"
    ];
    return [
      {taskName: "frame",                  taskFunc: frameTask         },
      {taskName: "frame.ftp",              taskFunc: frameFtpTask      },
      {taskName: "frame.buildJs",          taskFunc: frameBuildJsTask  },
      {taskName: "frame.lessBuild",        taskFunc: frameLessBuildTask}
    ];
  };
  module.exports.getTasks = getTasks;
}(module));
