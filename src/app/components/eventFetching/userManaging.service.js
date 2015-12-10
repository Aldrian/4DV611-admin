/**
 * User managing service
 * Implements the crud operations managing the users
 */
(function() {
  'use strict';

  angular
    .module('4Dv611Admin')
    .factory('userManaging', userManaging);

  /** @ngInject */
  function userManaging($log, $http) {
    var apiHost = 'http://46.101.168.154:8080/api/v1.0';

    /**
     * Returns the interface of the service
     * @type {Object}
     */
    var service = {
      apiHost: apiHost,
      getUsers: getUsers,
      editUser: editUser
    };

    return service;

    function getUsers() {
      return $http.get(apiHost + '/users/')
        .then(function(response) {
          return response.data;
        })
        .catch(function(error) {
          $log.error('XHR Failed for getUsers.\n' + angular.toJson(error.data, true));
        });
    }

    function editUser(user) {
      $log.info(angular.toJson(user));
      var req = {
        method: 'PUT',
        url: apiHost + '/users/',
        data: angular.toJson(user)
      };
      $http(req)
        .success(function(response) {
          $log.info("success: " + response);
        }).error(function(response) {
          $log.error("error: " + response);
        });
    }
  }
})();
