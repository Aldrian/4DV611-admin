/**
 * Event fetching service
 * Implements the crud operations managing the events
 */
(function() {
  'use strict';

  angular
    .module('4Dv611Admin')
    .factory('eventFetching', eventFetching);

  /** @ngInject */
  function eventFetching($log, $http) {
    var apiHost = 'http://46.101.168.154:8080/api/v1.0';

    /**
     * Returns the interface of the service
     * @type {Object}
     */
    var service = {
      apiHost: apiHost,
      getEvents: getEvents,
      editEvent: editEvent,
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

    function getEvents() {
      return $http.get(apiHost + '/events/')
        .then(function(response) {
          return response.data;
        })
        .catch(function(error) {
          $log.error('XHR Failed for getEvents.\n' + angular.toJson(error.data, true));
        });
    }

    function editEvent(event) {
      $log.info(angular.toJson(event));
      var req = {
        method: 'PUT',
        url: apiHost + '/events/',
        data: angular.toJson(event)
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
