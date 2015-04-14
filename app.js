(function (ng, exports) {
  "use strict";
  var config, routes, uiView;
  uiView         = "<ui-view/>";
  routes         = [
    {
      abstract: true,
      template: uiView,
      name:     'public',
      data:     {access: "*"}
    },
    {
      templateUrl: '404',
      url:         '/404',
      name:        'public.404'
    },
    {
      templateUrl:  'login',
      controllerAs: 'Login',
      url:          '/login',
      name:         'public.login',
      controller:   'LoginController',
    },
    {
      templateUrl:  'register',
      controllerAs: 'Register',
      url:          '/register',
      name:         'public.register',
      controller:   'RegisterController',
    },
    {
      abstract: true,
      template: uiView,
      name:     'private',
      data:     {access: 'private'}
    },
    {
      url:          '/',
      controllerAs: 'Home',
      name:         'user.home',
      templateUrl:  'home.html',
      controller:   'HomeController'
    },
    {
      controllerAs: "Profile",
      url:          '/profile',
      templateUrl:  'profile.html',
      name:         'private.profile',
      controller:   "ProfileController",
    },
    {
      controllerAs: "Profile",
      url:          '/:username',
      name:         'private.user',
      templateUrl:  'profile.html',
      controller:   "ProfileController",
    },
    {
      controllerAs: 'Friends',
      url:          '^/friends',
      templateUrl:  'friends.html',
      controller:   'FriendsController',
      name:         "private.profile.friends",
    },
    {
      controllerAs: "About",
      url:          '^/about',
      templateUrl:  'about.html',
      controller:   "AboutController",
      name:         "private.profile.about"
    },
    {
      controllerAs: 'Friends',
      url:          '/friends',
      templateUrl:  'friends.html',
      controller:   'FriendsController',
      name:         "private.user.friends",
    },
    {
      controllerAs: "About",
      url:          '/about',
      templateUrl:  'about.html',
      controller:   "AboutController",
      name:         "private.user.about"
    }
  ];
  config         = function configF($httpProvider, $stateProvider, $locationProvider, $urlRouterProvider) {
    var setStates;
    setStates = function setStatesF(state) {
      $stateProvider.state(state);
    };
    ng.forEach(routes, setStates);
    $urlRouterProvider.otherwise('/404');
  };
  config.$inject = [
    '$httpProvider',
    '$stateProvider',
    '$locationProvider',
    '$urlRouterProvider'
  ];
  ng.module("app", ['ngCookies', 'ui.router']).config(config);
  exports.routes = routes;
}(angular, (typeof exports === 'undefined') ? this.routes = {} : exports));
