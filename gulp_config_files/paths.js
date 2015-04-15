/*jslint maxlen: 120, nomen: true*/
(function (module) {
  "use strict";
  var
    srcDir, appDir, libsDir, buildDir, assetsDir, modulesDir, distDir,
    componentsDir, distAssetsDir, backEndDir, backEndViewsDir, directories,
    backEndAssetsDir, files, docsDir, frameSrcDir, fakeSiteDir, remotePath;
  srcDir           = "./src";
  distDir          = "./dist";
  docsDir          = "./docs";
  buildDir         = "./build";
  appDir           = srcDir      + "/app";
  libsDir          = srcDir      + "/libs";
  componentsDir    = appDir      + "/components";
  directories      = {
    "srcDir":   srcDir,
    "distDir":  distDir,
    "docsDir":  docsDir,
    "buildDir": buildDir,
    "src": {
      "appDir":                   appDir,
      "libsDir":                  libsDir,
      "componentsDir":            componentsDir,
      "sassDir":                  srcDir  + "/sass",
      "tplsDir":                  srcDir  + "/tpls",
      "testsDir":                 srcDir  + "/tests",
      "fontsDir":                 srcDir  + "/fonts",
      "imagesDir":                srcDir  + "/images",
      "lodashDir":                libsDir + "/lodash",
      "angularDir":               libsDir + "/angular",
      "jsonFilesDir":             srcDir  + "/json_files",
      "jqueryDir":                libsDir + "/jquery/dist",
      "angularAriaDir":           libsDir + "/angular-aria",
      "angularAnimateDir":        libsDir + "/angular-animate",
      "angularCookiesDir":        libsDir + "/angular-cookies",
      "angularSanitizeDir":       libsDir + "/angular-sanitize",
      "fontAwesomeCssDir":        libsDir + "/Font-Awesome/css",
      "angularBootstrapDir":      libsDir + "/angular-bootstrap",
      "bootstrapCssDir":          libsDir + "/bootstrap/dist/css",
      "fontAwesomeFontsDir":      libsDir + "/Font-Awesome/fonts",
      "bootstrapFontsDir":        libsDir + "/bootstrap/dist/fonts",
      "ngBrowserUpdateDir":       libsDir + "/ng-browser-update/dist",
      "ngNewRouteDir":            libsDir + "/angular-new-router/dist",
      "angularUiRouterStylesDir": libsDir + "/angular-ui-router-styles",
      "angularUiRouterDir":       libsDir + "/angular-ui-router/release"
    },
    "build": {
      "jsDir":        assetsDir + "/js",
      "cssDir":       assetsDir + "/css",
      "libsDir":      assetsDir + "/libs",
      "tplsDir":      assetsDir + "/tpls",
      "fontsDir":     assetsDir + "/fonts",
      "imagesDir":    assetsDir + "/images",
      "jsonFilesDir": assetsDir + "/json_files"
    }
  };
  files            = {
    "targetVendorFile":       "vendor.js",
    "destIndexFile":          "index.html",
    "jsFiles":                [appDir + "/**/*.js"],
    "htaccessFile":           srcDir  + "/.htaccess",
    "sassFilesToWatch":       [srcDir + "/**/*.sass"],
    "imagesFiles":            [directories.src.imagesDir + "/**/*"],
    "sassFiles":              [directories.src.sassDir + "/main.sass"],
    "indexFile":              [directories.src.tplsDir + "/index.html"],
    "jsonFiles":              [directories.src.jsonFilesDir + "/*.json"],
    "bootstrapCssFile" :      directories.src.bootstrapCssDir + "/bootstrap.css",
    "configJsonFiles":        [
      "bower.json",
      "package.json"
    ],
    "configJsFiles":          [
      "gulpfile.js",
      "gulp_config_files/**/*"
    ],
    "tplsFiles":              [
      appDir  + "/**/*.html",
      directories.src.tplsDir + "/**/*.html",
      "!" + directories.src.tplsDir + "/index.html"
    ],
    "tplsFilesToWatch":       [
      appDir  + "/**/*.html",
      directories.src.tplsDir + "/**/*.html",
      "!" + directories.src.tplsDir + "/index.html"
    ],
    "mainAppFilesToWatch":    [
      appDir  + "/**/*.js",
      appDir  + "/**/*.html",
      directories.src.tplsDir + "/**/*.html",
      "!" + directories.src.tplsDir + "/index.html"
    ],
    "filesToWatch":           {
      "mainAppFilesToWatch":   ["build.buildJs"],
      "libs":                  ["buildConcatLibs"],
      "indexFile":             ["build.indexFile"],
      "imagesFiles":           ["buildCopyImages"],
      "sassFilesToWatch":      ["build.sassBuild"],
      "jsonFiles":             ["buildCopyJsonFiles"]
    },
    "fontsFiles":             [
      directories.src.fontsDir            + "/*",
      directories.src.bootstrapFontsDir   + "/*",
      directories.src.fontAwesomeFontsDir + "/*"
    ],
    "libs":                   [
      directories.src.jqueryDir                + "/jquery.js",
      directories.src.lodashDir                + "/lodash.js",
      directories.src.angularDir               + "/angular.js",
      directories.src.angularBootstrapDir      + "/ui-bootstrap.js",
      directories.src.angularAnimateDir        + "/angular-animate.js",
      directories.src.angularSanitizeDir       + "/angular-sanitize.js",
      directories.src.angularCookiesDir        + "/angular-cookies.js",
      directories.src.angularUiRouterDir       + "/angular-ui-router.js",
      directories.src.angularUiRouterStylesDir + "/ui-router-styles.js",
      directories.src.ngNewRouteDir            + "/router.es5.js",
      directories.src.ngBrowserUpdateDir       + "/ng-browser-update.js"
    ],
    "minLibs":                [
      directories.src.jqueryDir                + "/jquery.min.js",
      directories.src.lodashDir                + "/lodash.min.js",
      directories.src.angularDir               + "/angular.min.js",
      directories.src.angularAnimateDir        + "/angular-animate.min.js",
      directories.src.angularSanitizeDir       + "/angular-sanitize.min.js",
      directories.src.angularCookiesDir        + "/angular-cookies.min.js",
      directories.src.ngBrowserUpdateDir       + "/ng-browser-update.min.js",
      directories.src.angularUiRouterDir       + "/angular-ui-router.min.js",
      directories.src.angularUiRouterStylesDir + "/ui-router-styles.js",
      directories.src.ngNewRouteDir            + "/router.es5.js",
      directories.src.angularBootstrapDir      + "/ui-bootstrap.min.js"
    ]
  };
  module.exports   = {
    getFiles: function getFilesF() {
      return files;
    },
    getDirectories: function getdirectoriesF() {
      return directories;
    }
  };
}(module));
