(function (module, require) {
  "use strict";
  /*jslint maxlen: 80*/
  var getTask, browserify, source, buffer, getBundleName;
  // var fs, getTask, browserify, runBrowserify, source, buffer, getBundleName;
  // fs            = require('fs');
  browserify    = require('browserify');
  buffer        = require('vinyl-buffer');
  source        = require('vinyl-source-stream');
  getBundleName = function getBundleNameF() {
    var pkg = require('../../package.json');
    return pkg.version + '.' + pkg.name + '.' + 'min';
  };
  // runBrowserify = function runBrowserifyF(dest, file) {
  //   var b, saveFile;
  //   saveFile = function saveFileF(error, buffer) {
  //     var filename, handleSaveFile;
  //     if (error) {throw error;}
  //     filename = dest + "/app.js";
  //     handleSaveFile = function handleSaveFileF(err) {
  //       if (err) {throw err;}
  //       console.log("file " + filename + " was saved successufully.");
  //     };
  //     fs.writeFile(filename, buffer, handleSaveFile);
  //   };
  //   b = browserify();
  //   b.add(file);
  //   b.transform(ngAnnotate);
  //   b.bundle(saveFile);
  // };
  // getTask = function getTaskF(dest, file) {
  //   runBrowserify(dest, file);
  // };
  getTask       = function getTaskF(gulp, plugins, dest, file) {
    var bundle, bundler;
    bundler = browserify({
      debug: true,
      entries: file
    });
    bundle = function bundleF() {
      return bundler
        .bundle()
        .pipe(source(getBundleName() + '.js'))
        .pipe(buffer())
        .pipe(plugins.sourcemaps.init({loadMaps: true}))
        .pipe(plugins.uglifyjs())
        .pipe(plugins.sourcemaps.write('./'))
        .pipe(gulp.dest(dest));
    };
    return bundle();
  };
  module.exports.getTask = getTask;
}(module, require));
