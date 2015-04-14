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
  remotePath       = "/frame";
  buildDir         = "./build";
  fakeSiteDir      = "./frame";
  frameSrcDir      = "./frame_src";
  appDir           = srcDir      + "/app";
  libsDir          = srcDir      + "/libs";
  assetsDir        = buildDir    + "/assets";
  distAssetsDir    = distDir     + "/assets";
  backEndDir       = "../full_source_code/Loyalcraft-EndUser";
  backEndAssetsDir = backEndDir  + "/public";
  modulesDir       = appDir      + "/modules";
  backEndViewsDir  = backEndDir  + "/app/views";
  componentsDir    = appDir      + "/components";
  directories      = {
    "srcDir":         srcDir,
    "distDir":        distDir,
    "docsDir":        docsDir,
    "buildDir":       buildDir,
    "remotePath":     remotePath,
    "fakeSiteDir":    fakeSiteDir,
    "frameSrcDir":    frameSrcDir,
    "frame": {
      "src": {
        "jsDir":     frameSrcDir + "/js",
        "lessDir":   frameSrcDir + "/less",
        "tplsDir":   frameSrcDir + "/tpls"
      },
      "build": {
        "jsDir":     fakeSiteDir + "/js",
        "cssDir":    fakeSiteDir + "/css"
      },
      "dist": {}
    },
    "src": {
      "appDir":                                appDir,
      "libsDir":                               libsDir,
      "componentsDir":                         componentsDir,
      "lessDir":                               srcDir     + "/less",
      "tplsDir":                               srcDir     + "/tpls",
      "fontsDir":                              srcDir     + "/fonts",
      "imagesDir":                             srcDir     + "/images",
      "momentDir":                             libsDir    + "/moment",
      "lodashDir":                             libsDir    + "/lodash",
      "angularDir":                            libsDir    + "/angular",
      "select2Dir":                            libsDir    + "/select2",
      "jsonFilesDir":                          srcDir     + "/json_files",
      "jqueryDir":                             libsDir    + "/jquery/dist",
      "sharedLessDir":                         srcDir     + "/less/shared",
      "angularAriaDir":                        libsDir    + "/angular-aria",
      "angularMomentDir":                      libsDir    + "/angular-moment",
      "angularQrCodeDir":                      libsDir    + "/angular-qrcode",
      "angularAnimateDir":                     libsDir    + "/angular-animate",
      "angularCookiesDir":                     libsDir    + "/angular-cookies",
      "angularElasticDir":                     libsDir    + "/angular-elastic",
      "angularSanitizeDir":                    libsDir    + "/angular-sanitize",
      "fontAwesomeCssDir":                     libsDir    + "/Font-Awesome/css",
      "cardModuleLessDir":                     modulesDir + "/card_module/less",
      "homeModuleLessDir":                     modulesDir + "/home_module/less",
      "shopModuleLessDir":                     modulesDir + "/shop_module/less",
      "gamesModuleLessDir":                    modulesDir + "/games_module/less",
      "angularBootstrapDir":                   libsDir    + "/angular-bootstrap",
      "angularToastyDir":                      libsDir    + "/angular-toasty/js",
      "angularTimerDir":                       libsDir    + "/angular-timer/dist",
      "bootstrapCssDir":                       libsDir    + "/bootstrap/dist/css",
      "fontAwesomeFontsDir":                   libsDir    + "/Font-Awesome/fonts",
      "ordersModuleLessDir":                   modulesDir + "/orders_module/less",
      "questsModuleLessDir":                   modulesDir + "/quests_module/less",
      "friendsModuleLessDir":                  modulesDir + "/friends_module/less",
      "profileModuleLessDir":                  modulesDir + "/profile_module/less",
      "qrCodeDir":                             libsDir    + "/qrcode-generator/js",
      "angularSmiliesDir":                     libsDir    + "/angular-smilies/dist",
      "angularTruncateDir":                    libsDir    + "/angular-truncate/src",
      "bootstrapFontsDir":                     libsDir    + "/bootstrap/dist/fonts",
      "intlTelInputDir":                       libsDir    + "/intl-tel-input/build",
      "ngBrowserUpdateDir":                    libsDir    + "/ng-browser-update/dist",
      "reputationModuleLessDir":               modulesDir + "/reputation_module/less",
      "angularUiSelectDir":                    libsDir    + "/angular-ui-select/dist",
      "leaderboardModuleLessDir":              modulesDir + "/leaderboard_module/less",
      "intlTelInputJsDir":                     libsDir    + "/intl-tel-input/build/js",
      "intlTelInputCssDir":                    libsDir    + "/intl-tel-input/build/css",
      "intlTelInputImgDir":                    libsDir    + "/intl-tel-input/build/img",
      "achievementsModuleLessDir":             modulesDir + "/achievements_module/less",
      "angularGoogleMapsDir":                  libsDir    + "/angular-google-maps/dist",
      "angularUiRouterStylesDir":              libsDir    + "/angular-ui-router-styles",
      "auctionHouseModuleLessDir":             modulesDir + "/auction_house_module/less",
      "angularEmojiFilterDir":                 libsDir    + "/angular-emoji-filter/dist",
      "angularUiRouterDir":                    libsDir    + "/angular-ui-router/release",
      "authenticationModuleLessDir":           modulesDir + "/authentication_module/less",
      "resourcesDir":                          srcDir     + "/Loyalcraft_pictures_resources",
      "librariesOverrideModuleTplsDir":        modulesDir + "/libraries_override_module/tpls",
      "internationalPhoneNumbersDir":          libsDir    + "/international-phone-number/releases",
      "intlTelInputUtilsDir":                  libsDir    + "/intl-tel-input/lib/libphonenumber/build",
      "profileFeedModuleLessDir":              modulesDir + "/profile_module/app/profile_feed_module/less",
      "profileAboutModuleLessDir":             modulesDir + "/profile_module/app/profile_about_module/less",
      "profileFriendsModuleLessDir":           modulesDir + "/profile_module/app/profile_friends_module/less"
    },
    "build": {
      "jsDir":             assetsDir + "/js",
      "cssDir":            assetsDir + "/css",
      "libsDir":           assetsDir + "/libs",
      "tplsDir":           assetsDir + "/tpls",
      "fontsDir":          assetsDir + "/fonts",
      "imagesDir":         assetsDir + "/images",
      "jsonFilesDir":      assetsDir + "/json_files",
      "resourcesDir":      assetsDir + "/Loyalcraft_pictures_resources"
    },
    "dist": {
      "jsDir":             distAssetsDir + "/js",
      "cssDir":            distAssetsDir + "/css",
      "libsDir":           distAssetsDir + "/libs",
      "tplsDir":           distAssetsDir + "/tpls",
      "fontsDir":          distAssetsDir + "/fonts",
      "imagesDir":         distAssetsDir + "/images",
      "jsonFilesDir":      distAssetsDir + "/json_files",
      "resourcesDir":      distAssetsDir + "/Loyalcraft_pictures_resources"
    },
    "backEnd": {
      "viewsDir":          backEndViewsDir,
      "jsDir":             backEndAssetsDir + "/js",
      "cssDir":            backEndAssetsDir + "/css",
      "libsDir":           backEndAssetsDir + "/libs",
      "tplsDir":           backEndAssetsDir + "/tpls",
      "fontsDir":          backEndAssetsDir + "/fonts",
      "imagesDir":         backEndAssetsDir + "/images",
      "jsonFilesDir":      backEndAssetsDir + "/json_files"
    }
  };
  files            = {
    "targetVendorFile":       "vendor.js",
    "destIndexFile":          "index.html",
    "backEndDestIndexFile":   "index.scala.html",
    "appFile":                [appDir + "/app.js"],
    "jsFiles":                [appDir + "/**/*.js"],
    "htaccessFile":           srcDir  + "/.htaccess",
    "lessFilesToWatch":       [srcDir + "/**/*.less"],
    "karmaConfigFile":        __dirname + "/../karma.conf.js",
    "imagesFiles":            [directories.src.imagesDir + "/**/*"],
    "resourcesFiles":         [directories.src.resourcesDir + "/**/*"],
    "indexFile":              [directories.src.tplsDir + "/index.html"],
    "jsonFiles":              [directories.src.jsonFilesDir + "/*.json"],
    "frameTplsFiles":         [directories.frame.src.tplsDir + "/*.html"],
    "frameLessFilesToWatch":  [directories.frame.src.lessDir + "/*.less"],
    "frameLessFiles":         [directories.frame.src.lessDir + "/frame.less"],
    "backEndIndexFile":       [directories.src.tplsDir + "/backend.index.jade"],
    "bootstrapCssFile" :      directories.src.bootstrapCssDir + "/bootstrap.css",
    "libraryFilesToCopy":     directories.src.intlTelInputUtilsDir + "/utils.js",
    "ngSmiliesImageFile":     [directories.src.angularSmiliesDir + "/angular-smilies.png"],
    "ratingOverrideTpls":     [directories.src.librariesOverrideModuleTplsDir + "/rating.html"],
    "allFrameFiles":          [
      directories.fakeSiteDir + "/js",
      directories.fakeSiteDir + "/css",
      directories.fakeSiteDir + "/fonts",
      directories.fakeSiteDir + "/images",
      directories.fakeSiteDir + "/index.html"
    ],
    "frameJsFiles":           [
      directories.frame.src.jsDir + "/frame.js",
      directories.frame.src.jsDir + "/*.js"
    ],
    "configJsonFiles":        [
      "bower.json",
      "package.json"
    ],
    "configJsFiles":          [
      "gulpfile.js",
      "gulp_config_files/**/*"
    ],
    "frameFileToWatch":       [
      directories.frame.src.jsDir   + "/*.js",
      directories.frame.src.tplsDir + "/*.html"
    ],
    "tabsOverrideTpls":       [
      directories.src.librariesOverrideModuleTplsDir + "/tab.html",
      directories.src.librariesOverrideModuleTplsDir + "/tabset.html"
    ],
    "accordionOverrideTpls":  [
      directories.src.librariesOverrideModuleTplsDir + "/accordion.html",
      directories.src.librariesOverrideModuleTplsDir + "/accordion-group.html"
    ],
    "tooltipOverrideTpls":    [
      directories.src.librariesOverrideModuleTplsDir + "/tooltip-popup.html",
      directories.src.librariesOverrideModuleTplsDir + "/tooltip-html-unsafe-popup.html"
    ],
    "popoverOverrideTpls":    [
      directories.src.librariesOverrideModuleTplsDir + "/popover.html",
      directories.src.librariesOverrideModuleTplsDir + "/popover-window.html"
    ],
    "modalOverrideTpls":      [
      directories.src.librariesOverrideModuleTplsDir + "/window.html",
      directories.src.librariesOverrideModuleTplsDir + "/backdrop.html"
    ],
    "datepickerOverrideTpls": [
      directories.src.librariesOverrideModuleTplsDir + "/day.html",
      directories.src.librariesOverrideModuleTplsDir + "/year.html",
      directories.src.librariesOverrideModuleTplsDir + "/month.html",
      directories.src.librariesOverrideModuleTplsDir + "/popup.html",
      directories.src.librariesOverrideModuleTplsDir + "/datepicker.html"
    ],
    "tplsFiles":              [
      appDir  + "/**/*.html",
      directories.src.tplsDir + "/**/*.html",
      "!" + directories.src.tplsDir + "/index.html",
      "!" + directories.src.tplsDir + "/backend.index.html",
      "!" + directories.src.librariesOverrideModuleTplsDir  + "/*.html"
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
      "frameFileToWatch":      ["frame.buildJs"],
      "mainAppFilesToWatch":   ["build.buildJs"],
      "libs":                  ["buildConcatLibs"],
      "indexFile":             ["build.indexFile"],
      "iconsFiles":            ["buildCopyImages"],
      "medalsFiles":           ["buildCopyImages"],
      "imagesFiles":           ["buildCopyImages"],
      "menuIconsFiles":        ["buildCopyImages"],
      "lessFilesToWatch":      ["build.lessBuild"],
      "notificationFiles":     ["buildCopyImages"],
      "frameLessFilesToWatch": ["frame.lessBuild"],
      "jsonFiles":             ["buildCopyJsonFiles"]
    },
    "fontsFiles":             [
      directories.src.fontsDir            + "/*",
      directories.src.bootstrapFontsDir   + "/*",
      directories.src.fontAwesomeFontsDir + "/*"
    ],
    "lessFiles":              [
      directories.src.cardModuleLessDir           + "/card.less",
      directories.src.homeModuleLessDir           + "/home.less",
      directories.src.lessDir                     + "/404.less",
      directories.src.lessDir                     + "/main.less",
      directories.src.shopModuleLessDir           + "/shop.less",
      directories.src.gamesModuleLessDir          + "/games.less",
      directories.src.authenticationModuleLessDir + "/login.less",
      directories.src.ordersModuleLessDir         + "/orders.less",
      directories.src.lessDir                     + "/public.less",
      directories.src.questsModuleLessDir         + "/quests.less",
      directories.src.sharedLessDir               + "/product.less",
      directories.src.profileModuleLessDir        + "/profile.less",
      directories.src.authenticationModuleLessDir + "/register.less",
      directories.src.reputationModuleLessDir     + "/reputation.less",
      directories.src.leaderboardModuleLessDir    + "/leaderboard.less",
      directories.src.achievementsModuleLessDir   + "/achievements.less",
      directories.src.profileFeedModuleLessDir    + "/profile_feed.less",
      directories.src.auctionHouseModuleLessDir   + "/auction_house.less",
      directories.src.profileAboutModuleLessDir   + "/profile_about.less",
      directories.src.profileFriendsModuleLessDir + "/profile_friends.less",
      directories.src.authenticationModuleLessDir + "/recover_password.less",
      directories.src.componentsDir               + "/lc_mobile_card_ui/lc_mobile_card_ui.less",
      directories.src.componentsDir               + "/lc_default_card_ui/lc_default_card_ui.less"
    ],
    "librariesCssFiles":      [
      directories.src.intlTelInputCssDir + "/intlTelInput.css"
    ],
    "librariesImagesFiles":   [
      directories.src.select2Dir         + "/*.gif",
      directories.src.select2Dir         + "/*.png",
      directories.src.intlTelInputImgDir + "/flags.png",
      directories.src.angularSmiliesDir  + "/angular-smilies.png"
    ],
    "frameLibs":              [
      directories.src.jqueryDir                    + "/jquery.js",
      directories.src.angularDir                   + "/angular.js",
      directories.src.angularAriaDir               + "/angular-aria.js",
      directories.src.angularBootstrapDir          + "/ui-bootstrap.js",
      directories.src.ngBrowserUpdateDir           + "/ng-browser-update.js"
    ],
    "frameMinLibs":           [
      directories.src.jqueryDir                    + "/jquery.min.js",
      directories.src.angularDir                   + "/angular.min.js",
      directories.src.angularAriaDir               + "/angular-aria.min.js",
      directories.src.angularBootstrapDir          + "/ui-bootstrap.min.js",
      directories.src.ngBrowserUpdateDir           + "/ng-browser-update.min.js"
    ],
    "libs":                   [
      directories.src.jqueryDir                    + "/jquery.js",
      directories.src.lodashDir                    + "/lodash.js",
      directories.src.qrCodeDir                    + "/qrcode.js",
      directories.src.intlTelInputJsDir            + "/intlTelInput.js",
      directories.src.angularDir                   + "/angular.js",
      directories.src.angularElasticDir            + "/elastic.js",
      directories.src.angularTruncateDir           + "/truncate.js",
      directories.src.angularAriaDir               + "/angular-aria.js",
      directories.src.angularBootstrapDir          + "/ui-bootstrap.js",
      directories.src.angularTimerDir              + "/angular-timer.js",
      directories.src.angularAnimateDir            + "/angular-animate.js",
      directories.src.angularSanitizeDir           + "/angular-sanitize.js",
      directories.src.angularCookiesDir            + "/angular-cookies.js",
      directories.src.angularToastyDir             + "/ng-toasty.js",
      directories.src.angularSmiliesDir            + "/angular-smilies.js",
      directories.src.angularUiRouterDir           + "/angular-ui-router.js",
      directories.src.angularUiRouterStylesDir     + "/ui-router-styles.js",
      directories.src.ngBrowserUpdateDir           + "/ng-browser-update.js",
      directories.src.angularQrCodeDir             + "/qrcode.js",
      directories.src.internationalPhoneNumbersDir + "/international-phone-number.js",
      directories.src.angularUiSelectDir           + "/select.js",
      directories.src.angularGoogleMapsDir         + "/angular-google-maps.js"
    ],
    "minLibs":                [
      directories.src.jqueryDir                    + "/jquery.min.js",
      directories.src.lodashDir                    + "/lodash.min.js",
      directories.src.qrCodeDir                    + "/qrcode.js",
      directories.src.intlTelInputJsDir            + "/intlTelInput.min.js",
      directories.src.angularDir                   + "/angular.min.js",
      directories.src.angularAriaDir               + "/angular-aria.min.js",
      directories.src.angularAnimateDir            + "/angular-animate.min.js",
      directories.src.angularSanitizeDir           + "/angular-sanitize.min.js",
      directories.src.angularCookiesDir            + "/angular-cookies.min.js",
      directories.src.angularToastyDir             + "/ng-toasty.min.js",
      directories.src.ngBrowserUpdateDir           + "/ng-browser-update.min.js",
      directories.src.angularQrCodeDir             + "/qrcode.js",
      directories.src.angularElasticDir            + "/elastic.js",
      directories.src.angularTruncateDir           + "/truncate.js",
      directories.src.angularUiSelectDir           + "/select.min.js",
      directories.src.angularUiRouterDir           + "/angular-ui-router.min.js",
      directories.src.angularUiRouterStylesDir     + "/ui-router-styles.js",
      directories.src.angularBootstrapDir          + "/ui-bootstrap.min.js",
      directories.src.internationalPhoneNumbersDir + "/international-phone-number.min.js",
      directories.src.angularGoogleMapsDir         + "/angular-google-maps.min.js",
      directories.src.angularSmiliesDir            + "/angular-smilies.min.js",
      directories.src.angularTimerDir              + "/angular-timer.min.js"
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
