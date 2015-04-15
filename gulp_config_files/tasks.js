(function (module, require) {
  "use strict";
  /*jslint maxlen: 115*/
  var getTasks = function getTasksF(gulp, plugins) {
    var
      files, paths, directories, distTasks, buildTasks, otherTasks, frameTasks,
      backEndTasks, taskRunners;
    paths        = require('./paths.js');
    files        = paths.getFiles();
    directories  = paths.getDirectories();
    taskRunners  = {
      ftp:      require('./gulp_tasks/ftp.js'),
      copy:     require('./gulp_tasks/copy.js'),
      sass:     require('./gulp_tasks/sass.js'),
      karma:    require('./gulp_tasks/karma.js'),
      watch:    require('./gulp_tasks/watch.js'),
      concat:   require('./gulp_tasks/concat.js'),
      ngdocs:   require('./gulp_tasks/ngdocs.js'),
      htmlmin:  require('./gulp_tasks/htmlmin.js'),
      handleJS: require('./gulp_tasks/handle_js.js')
    };
    otherTasks   = require('./tasks/other_tasks.js').getTasks(gulp, plugins, directories, files, taskRunners);
    buildTasks   = require('./tasks/build_tasks.js').getTasks(gulp, plugins, directories, files, taskRunners);
    return otherTasks.concat(buildTasks);
  };
  module.exports.getTasks = getTasks;
}(module, require));
