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
  function eventFetching($log, $http, API_HOST_ADDRESS) {
    var apiHost = API_HOST_ADDRESS;

    /**
     * Returns the interface of the service
     * @type {Object}
     */
    var service = {
      apiHost: apiHost,
      getEvents: getEvents,
      editEvent: editEvent
    };

    return service;

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
      var req = {
        method: 'PUT',
        url: apiHost + '/events/',
        data: angular.toJson(event)
      };
      $http(req)
        .success(function(response) {
          $log.info("event saved: " + response);
        }).error(function(response) {
          $log.error("error: " + response);
        });
    }
  }
})();
