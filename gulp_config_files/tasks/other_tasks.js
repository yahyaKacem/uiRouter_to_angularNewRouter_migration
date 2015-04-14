(function (module) {
  "use strict";
  /*jslint maxlen: 90*/
  var getTasks = function getTasksF(gulp, plugins, directories, files, taskRunners) {
    var watchTask, karmaTask, printAllPluginsTask;
    watchTask           = taskRunners.watch.getTask(gulp, files);
    karmaTask           = taskRunners.karma.getTask(files.karmaConfigFile);
    printAllPluginsTask = taskRunners.methodsHelper.printAllMethods(plugins);
    return [
      {taskName: "test",            taskFunc: karmaTask                     },
      {taskName: "watch",           taskFunc: watchTask                     },
      {taskName: "printAllPlugins", taskFunc: printAllPluginsTask           },
      {taskName: "default",         taskDeps: ["build"], taskFunc: watchTask}
    ];
  };
  module.exports.getTasks = getTasks;
}(module));
