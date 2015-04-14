(function (module) {
  "use strict";
  /*jslint maxlen: 160, unparam: true*/
  var getTasks = function getTasksF(gulp, plugins, directories, files, taskRunners) {
    var
      buildTask, buildJsTask, buildLessTask, buildCopyAllTasks, buildDocsTask,
      buildCopyFontsTask, buildIndexFileTask, buildConcatLibsTask,
      buildCopyImagesTask, buildCopyJsonFilesTask, buildCopyResourcesTask,
      buildCopyLibrariesImagesTask, buildLibraryFilesToCopyTask;
    buildConcatLibsTask          = taskRunners.concat.getTask(gulp, plugins, directories.build.jsDir, files);
    buildDocsTask                = taskRunners.ngdocs.getTask(gulp, plugins.ngdocs, directories.docsDir, files);
    buildJsTask                  = taskRunners.handleJS.getTask(gulp, plugins, directories.build.jsDir, files, "dev");
    buildLessTask                = taskRunners.less.getTask(gulp, plugins, directories.build.cssDir, files.lessFiles);
    buildCopyFontsTask           = taskRunners.copy.getTask(gulp, plugins, directories.build.fontsDir, files.fontsFiles);
    buildCopyJsonFilesTask       = taskRunners.copy.getTask(gulp, plugins, directories.build.jsonFilesDir, files.jsonFiles);
    buildIndexFileTask           = taskRunners.htmlmin.getTask(gulp, plugins, directories.buildDir, files.indexFile, files.destIndexFile);
    buildLibraryFilesToCopyTask  = taskRunners.copy.getTask(gulp, plugins, directories.build.jsDir, files.libraryFilesToCopy, false, true);
    buildCopyLibrariesImagesTask = taskRunners.copy.getTask(gulp, plugins, directories.build.cssDir, files.librariesImagesFiles, false, true);
    buildCopyImagesTask          = taskRunners.copy.getTask(gulp, plugins, directories.build.imagesDir, files.imagesFiles, directories.src.imagesDir);
    buildCopyResourcesTask       = taskRunners.copy.getTask(gulp, plugins, directories.build.resourcesDir, files.resourcesFiles, directories.src.resourcesDir);
    buildCopyAllTasks            = [
      "buildConcatLibs",
      "buildCopyFonts",
      "buildCopyImages",
      "buildCopyJsonFiles",
      "buildCopyResources",
      "buildLibraryFilesToCopy",
      "buildCopyLibrariesImages"
    ];
    buildTask                    = [
      "build.buildJs",
      "build.copyAll",
      "build.lessBuild",
      "build.indexFile"
    ];
    return [
      {taskName: "build",                    taskFunc: buildTask                   },
      {taskName: "buildDocs",                taskFunc: buildDocsTask               },
      {taskName: "build.buildJs",            taskFunc: buildJsTask                 },
      {taskName: "build.lessBuild",          taskFunc: buildLessTask               },
      {taskName: "build.copyAll",            taskFunc: buildCopyAllTasks           },
      {taskName: "build.indexFile",          taskFunc: buildIndexFileTask          },
      {taskName: "buildCopyFonts",           taskFunc: buildCopyFontsTask          },
      {taskName: "buildConcatLibs",          taskFunc: buildConcatLibsTask         },
      {taskName: "buildCopyImages",          taskFunc: buildCopyImagesTask         },
      {taskName: "buildCopyJsonFiles",       taskFunc: buildCopyJsonFilesTask      },
      {taskName: "buildCopyResources",       taskFunc: buildCopyResourcesTask      },
      {taskName: "buildLibraryFilesToCopy",  taskFunc: buildLibraryFilesToCopyTask },
      {taskName: "buildCopyLibrariesImages", taskFunc: buildCopyLibrariesImagesTask}
    ];
  };
  module.exports.getTasks = getTasks;
}(module));
