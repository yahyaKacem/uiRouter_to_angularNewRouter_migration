(function (module) {
  "use strict";
  /*jslint maxlen: 160, unparam: true*/
  var getTasks = function getTasksF(gulp, plugins, directories, files, taskRunners) {
    var
      distTask, distJsTask, distLessTask, distCopyAllTask,
      distCopyFontsTask, distIndexFileTask, distConcatLibsTask,
      distCopyImagesTask, distCopyJsonFilesTask, distCopyResourcesTask,
      distCopyNgSmilesImageTask;
    distConcatLibsTask        = taskRunners.concat.getTask(gulp, plugins, directories.dist.jsDir, files);
    distJsTask                = taskRunners.handleJS.getTask(gulp, plugins, directories.dist.jsDir, files, "dev");
    distLessTask              = taskRunners.less.getTask(gulp, plugins, directories.dist.cssDir, files.lessFiles);
    distCopyFontsTask         = taskRunners.copy.getTask(gulp, plugins, directories.dist.fontsDir, files.fontsFiles);
    distCopyJsonFilesTask     = taskRunners.copy.getTask(gulp, plugins, directories.dist.jsonFilesDir, files.jsonFiles);
    distIndexFileTask         = taskRunners.htmlmin.getTask(gulp, plugins, directories.distDir, files.indexFile, files.destIndexFile);
    distCopyNgSmilesImageTask = taskRunners.copy.getTask(gulp, plugins, directories.dist.cssDir, files.ngSmiliesImageFile, false, true);
    distCopyImagesTask        = taskRunners.copy.getTask(gulp, plugins, directories.dist.imagesDir, files.imagesFiles, directories.src.imagesDir);
    distCopyResourcesTask     = taskRunners.copy.getTask(gulp, plugins, directories.dist.resourcesDir, files.resourcesFiles, directories.src.resourcesDir);
    distCopyAllTask           = [
      'distConcatLibs',
      'distCopyFonts',
      'distCopyImages',
      'distCopyJsonFiles',
      'distCopyResources',
      'distCopyNgSmilesImage'
    ];
    distTask                  = [
      'dist.distJs',
      'dist.copyAll',
      'dist.lessBuild',
      'dist.indexFile'
    ];
    return [
      {taskName: "dist",                  taskFunc: distTask                 },
      {taskName: "dist.distJs",           taskFunc: distJsTask               },
      {taskName: "dist.lessBuild",        taskFunc: distLessTask             },
      {taskName: "dist.copyAll",          taskFunc: distCopyAllTask          },
      {taskName: "dist.indexFile",        taskFunc: distIndexFileTask        },
      {taskName: "distCopyFonts",         taskFunc: distCopyFontsTask        },
      {taskName: "distConcatLibs",        taskFunc: distConcatLibsTask       },
      {taskName: "distCopyImages",        taskFunc: distCopyImagesTask       },
      {taskName: "distCopyJsonFiles",     taskFunc: distCopyJsonFilesTask    },
      {taskName: "distCopyResources",     taskFunc: distCopyResourcesTask    },
      {taskName: "distCopyNgSmilesImage", taskFunc: distCopyNgSmilesImageTask}
    ];
  };
  module.exports.getTasks = getTasks;
}(module));
