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
    var apiHost = 'http://serveradress.todo';

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

    function getEvents(limit) {
      //Get only the 10 last events
      if (!limit) {
        limit = 10;
      }

      return $http.get(apiHost + '/events?per_page=' + limit)
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

    function editEvent(event) {}

    function mockEvents() {
      return [{
        name: 'event1',
        racetrack: 'Växjö',
        text: 'bla'
      }, {
        name: 'event2',
        racetrack: 'Malmö',
        text: 'bla bla'
      }, {
        name: 'event3',
        racetrack: 'Stockholm',
        text: 'bla bla bla'
      }, {
        name: 'event3',
        racetrack: 'Stockholm',
        text: 'bla bla bla'
      }];
    }
  }
})();
