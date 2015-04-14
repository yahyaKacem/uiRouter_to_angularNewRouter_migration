(function (module) {
  "use strict";
  /*jslint maxlen: 90*/
  var printAllMethodsTask;
  printAllMethodsTask = function printAllMethodsTaskF(object) {
    var allMethods = Object.getOwnPropertyNames(object).filter(function (property) {
      return typeof object[property] == 'function';
    });
    // console.log(allMethods);
  };
  module.exports.printAllMethods = printAllMethodsTask;
}(module));
