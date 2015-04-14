(function (module) {
  "use strict";
  /*jslint maxlen: 160, unparam: true*/
  var getTasks = function getTasksF(gulp, plugins, directories, files, taskRunners) {
    var
      backEndTask, backEndJsTask, backEndLessTask, backEndCopyAllTask,
      backEndIndexFileTask, backEndCopyFontsTask, backEndConcatLibsTask,
      backEndCopyImagesTask, backEndCopyJsonFilesTask,
      backEndCopyLibrariesImagesTask, backEndLibraryFilesToCopyTask;
    backEndConcatLibsTask          = taskRunners.concat.getTask(gulp, plugins, directories.backEnd.jsDir, files);
    backEndLessTask                = taskRunners.less.getTask(gulp, plugins, directories.backEnd.cssDir, files.lessFiles);
    backEndJsTask                  = taskRunners.handleJS.getTask(gulp, plugins, directories.backEnd.jsDir, files, "prod");
    backEndCopyFontsTask           = taskRunners.copy.getTask(gulp, plugins, directories.backEnd.fontsDir, files.fontsFiles);
    backEndCopyJsonFilesTask       = taskRunners.copy.getTask(gulp, plugins, directories.backEnd.jsonFilesDir, files.jsonFiles);
    backEndLibraryFilesToCopyTask  = taskRunners.copy.getTask(gulp, plugins, directories.backEnd.jsDir, files.libraryFilesToCopy, false, true);
    backEndCopyLibrariesImagesTask = taskRunners.copy.getTask(gulp, plugins, directories.backEnd.cssDir, files.librariesImagesFiles, false, true);
    backEndCopyImagesTask          = taskRunners.copy.getTask(gulp, plugins, directories.backEnd.imagesDir, files.imagesFiles, directories.src.imagesDir);
    backEndIndexFileTask           = taskRunners.jade.getTask(gulp, plugins, directories.backEnd.viewsDir, files.backEndIndexFile, files.backEndDestIndexFile);
    backEndCopyAllTask             = [
      'backEndConcatLibs',
      'backEndCopyFonts',
      'backEndCopyImages',
      'backEndCopyJsonFiles',
      'backEndLibraryFilesToCopy',
      'backEndCopyLibrariesImages'
    ];
    backEndTask                    = [
      'backEnd.backEndJs',
      'backEnd.copyAll',
      'backEnd.lessBuild',
      'backEnd.indexFile'
    ];
    return [
      {taskName: "backEnd",                    taskFunc: backEndTask                   },
      {taskName: "backEnd.backEndJs",          taskFunc: backEndJsTask                 },
      {taskName: "backEnd.lessBuild",          taskFunc: backEndLessTask               },
      {taskName: "backEnd.copyAll",            taskFunc: backEndCopyAllTask            },
      {taskName: "backEnd.indexFile",          taskFunc: backEndIndexFileTask          },
      {taskName: "backEndCopyFonts",           taskFunc: backEndCopyFontsTask          },
      {taskName: "backEndConcatLibs",          taskFunc: backEndConcatLibsTask         },
      {taskName: "backEndCopyImages",          taskFunc: backEndCopyImagesTask         },
      {taskName: "backEndCopyJsonFiles",       taskFunc: backEndCopyJsonFilesTask      },
      {taskName: "backEndLibraryFilesToCopy",  taskFunc: backEndLibraryFilesToCopyTask },
      {taskName: "backEndCopyLibrariesImages", taskFunc: backEndCopyLibrariesImagesTask}
    ];
  };
  module.exports.getTasks = getTasks;
}(module));
