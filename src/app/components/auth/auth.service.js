(function() {
  'use strict';

  angular.module('4Dv611Admin')
    .factory('Auth', function Auth($http, $cookies, $q, eventFetching) {
      return {

        /**
         * Authenticate user and save token
         *
         * @param  {Object}   user     - login info
         * @return {Promise}
         */
        login: function(user) {
          var encodedAuthToken = 'Basic ' + btoa(user.username + ':' + user.password);

          return $http.get(eventFetching.apiHost + '/users/auth/', {
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
          var token = this.getToken();
          if (!token) return null;
          return $http.get(eventFetching.apiHost + '/users/auth/', {
              headers: {
                'Authorization': token
              }
            })
            .then(function(res) {
              return res;
            });
        },

        /**
         * Get auth token
         *
         * @return {String} - a token string used for authenticating
         */
        getToken: function() {
          return $cookies.get('token');
        }
      };
    });
})();
