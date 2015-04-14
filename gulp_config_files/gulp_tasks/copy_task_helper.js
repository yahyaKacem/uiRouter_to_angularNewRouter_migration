(function () {
  "use strict";
  module.exports = {
    copyRenameFunc: function (path) {
      if (path.dirname !== ".") {
        path.dirname = ".";
      }
    },
    renameFunc: function (path) {
      if (path.dirname !== ".") {
        path.dirname = ".";
      }
      path.extname = ".min.html";
    },
  };
}());
