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
        controllerAs: 'mainCtrl'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'loginCtrl'
      })
      .state('userManage', {
        url: '/users',
        templateUrl: 'app/userManage/userManage.html',
        controller: 'UserManageController',
        controllerAs: 'userManageCtrl'
      })
      .state('visitStatistics', {
        url: '/statistics',
        templateUrl: 'app/visitStatistics/visitStatistics.html',
        controller: 'VisitStatisticsController',
        controllerAs: 'visitStatisticsCtrl'
      })
      .state('offersManagement', {
        url: '/offers/:userId',
        templateUrl: 'app/offers/offers.html',
        controller: 'OffersController',
        controllerAs: 'offersCtrl'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
