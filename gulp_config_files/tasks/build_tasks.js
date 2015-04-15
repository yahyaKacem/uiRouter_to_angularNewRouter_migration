(function (module) {
  "use strict";
  /*jslint maxlen: 160, unparam: true*/
  var getTasks = function getTasksF(gulp, plugins, directories, files, taskRunners) {
    var
      buildTask, buildJsTask, buildSassTask, buildCopyAllTasks, buildDocsTask,
      buildCopyFontsTask, buildIndexFileTask, buildConcatLibsTask,
      buildCopyJsonFilesTask;
    buildConcatLibsTask    = taskRunners.concat.getTask(gulp, plugins, directories.build.jsDir, files);
    buildDocsTask          = taskRunners.ngdocs.getTask(gulp, plugins.ngdocs, directories.docsDir, files);
    buildJsTask            = taskRunners.handleJS.getTask(gulp, plugins, directories.build.jsDir, files, "dev");
    buildSassTask          = taskRunners.less.getTask(gulp, plugins, directories.build.cssDir, files.sassFiles);
    buildCopyFontsTask     = taskRunners.copy.getTask(gulp, plugins, directories.build.fontsDir, files.fontsFiles);
    buildCopyJsonFilesTask = taskRunners.copy.getTask(gulp, plugins, directories.build.jsonFilesDir, files.jsonFiles);
    buildIndexFileTask     = taskRunners.htmlmin.getTask(gulp, plugins, directories.buildDir, files.indexFile, files.destIndexFile);
    buildCopyAllTasks      = [
      "buildConcatLibs",
      "buildCopyFonts",
      "buildCopyJsonFiles"
    ];
    buildTask              = [
      "build.buildJs",
      "build.copyAll",
      "build.sassBuild",
      "build.indexFile"
    ];
    return [
      {taskName: "build",              taskFunc: buildTask             },
      {taskName: "buildDocs",          taskFunc: buildDocsTask         },
      {taskName: "build.buildJs",      taskFunc: buildJsTask           },
      {taskName: "build.sassBuild",    taskFunc: buildSassTask         },
      {taskName: "build.copyAll",      taskFunc: buildCopyAllTasks     },
      {taskName: "build.indexFile",    taskFunc: buildIndexFileTask    },
      {taskName: "buildCopyFonts",     taskFunc: buildCopyFontsTask    },
      {taskName: "buildConcatLibs",    taskFunc: buildConcatLibsTask   },
      {taskName: "buildCopyJsonFiles", taskFunc: buildCopyJsonFilesTask}
    ];
  };
  module.exports.getTasks = getTasks;
}(module));
