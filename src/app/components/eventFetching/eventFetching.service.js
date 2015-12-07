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
      addEvent: addEvent,
      editEvent: editEvent,
      deleteEvent: deleteEvent,
      mockEvents: mockEvents
    };

    return service;

    function getEvents() {
      return $http.get(apiHost + '/events/')
        .then(getEventsComplete)
        .catch(getEventsFailed);

      function getEventsComplete(response) {
        return response.data;
      }

      function getEventsFailed(error) {
        $log.error('XHR Failed for getEvents.\n' + angular.toJson(error.data, true));
      }
    }

    function addEvent(event) {}

    function deleteEvent(event) {}

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

    function mockEvents() {
      return [{
        date: '18 November',
        racetrack: 'Solvalla',
        image: '',
        todays_offers: '',
        start_lists: '',
        todays_highlights: '',
        todays_home_team: '',
        about: ''
      }, {
        date: '18 November',
        racetrack: 'Åby',
        image: '',
        todays_offers: '',
        start_lists: '',
        todays_highlights: '',
        todays_home_team: '',
        about: ''
      }, {
        date: '19 November',
        racetrack: 'Täby galopp',
        image: '',
        todays_offers: '',
        start_lists: '',
        todays_highlights: '',
        todays_home_team: '',
        about: ''
      }, {
        date: '19 November',
        racetrack: 'Axevalla',
        image: '',
        todays_offers: '',
        start_lists: '',
        todays_highlights: '',
        todays_home_team: '',
        about: ''
      }];
    }
  }
})();
