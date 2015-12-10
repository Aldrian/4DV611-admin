(function() {
  'use strict';
  
  angular.module('4Dv611Admin')
    .service('APIInterceptor', function($rootScope, $cookies, $location) {
      var service = this;

      service.request = function(config) {

        var accessToken = getToken();
        if (accessToken) {
          config.headers.Authorization = accessToken;
        }
        return config;
      };

      service.responseError = function(response) {
        if (response.status === 401) {
          $rootScope.$broadcast('unauthorized');
          $location.path('/login');
        }
        return response;
      };

      /**
       * Get auth token
       *
       * @return {String} - a token string used for authenticating
       */
      var getToken = function() {
        return $cookies.get('token');
      };
    });
})();
