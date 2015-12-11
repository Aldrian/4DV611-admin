(function() {
  'use strict';

  angular.module('4Dv611Admin')
    .factory('Auth', function Auth($http, $cookies, $q, userManaging) {
      return {

        /**
         * Authenticate user and save token
         *
         * @param  {Object}   user     - login info
         * @return {Promise}
         */
        login: function(user) {
          var encodedAuthToken = 'Basic ' + btoa(user.username + ':' + user.password);

          return $http.get(userManaging.apiHost + '/users/auth/', {
              headers: {
                'Authorization': encodedAuthToken
              }
            })
            .then(function(res) {
              $cookies.put('token', encodedAuthToken);
              return res;
            });
        },

        /**
         * Delete access token and user info
         */
        logout: function() {
          $cookies.remove('token');
        },

        /**
         * Gets all available info on a user
         *   (synchronous|asynchronous)
         *
         * @return {Object|Promise}
         */
        getCurrentUser: function() {
          return $http.get(userManaging.apiHost + '/users/auth/', {

            })
            .then(function(res) {
              return res;
            });
        }
      };
    });
})();
