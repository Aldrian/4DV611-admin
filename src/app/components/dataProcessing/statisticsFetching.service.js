/**
 * Statistics fetching service
 * Implements the crud operations managing the statistics
 */
(function() {
  'use strict';

  angular
    .module('4Dv611Admin')
    .factory('statisticsFetching', statisticsFetching);

  /** @ngInject */
  function statisticsFetching($log, $http, $filter, API_HOST_ADDRESS) {
    var apiHost = API_HOST_ADDRESS;

    /**
     * Returns the interface of the service
     * @type {Object}
     */
    var service = {
      apiHost: apiHost,
      getStatistics: getStatistics
    };

    return service;

    function getStatistics() {
      return $http.get(apiHost + '/visits/')
        .then(function(response) {
          return response.data;
        })
        .catch(function(error) {
          $log.error('XHR Failed for getStatistics.\n' + angular.toJson(error.data, true));
        });
    }
  }
})();
