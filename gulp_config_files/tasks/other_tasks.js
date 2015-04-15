(function (module) {
  "use strict";
  /*jslint maxlen: 90*/
  var getTasks = function getTasksF(gulp, plugins, directories, files, taskRunners) {
    var watchTask, karmaTask;
    watchTask = taskRunners.watch.getTask(gulp, files);
    karmaTask = taskRunners.karma.getTask(files.karmaConfigFile);
    return [
      {taskName: "test",    taskFunc: karmaTask                     },
      {taskName: "watch",   taskFunc: watchTask                     },
      {taskName: "default", taskDeps: ["build"], taskFunc: watchTask}
    ];
  };
  module.exports.getTasks = getTasks;
}(module));
