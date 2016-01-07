(function() {
  'use strict';

  angular
    .module('4Dv611Admin')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .state('userManage', {
        url: '/users',
        templateUrl: 'app/userManage/userManage.html',
        controller: 'UserManageController',
        controllerAs: 'userManage'
      })
      .state('visitStatistics', {
        url: '/statistics',
        templateUrl: 'app/visitStatistics/visitStatistics.html',
        controller: 'VisitStatisticsController',
        controllerAs: 'visitStatistics'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
