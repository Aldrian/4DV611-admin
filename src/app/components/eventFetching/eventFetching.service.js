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
        name: 'TestEventOne',
        racetrack: 'Växjö',
        text: 'Some test text'
      }, {
        name: 'TestEventTwo',
        racetrack: 'Malmö',
        text: 'Some more test text'
      }, {
        name: 'TestEventTre',
        racetrack: 'Stockholm',
        text: 'Much more test text'
      }, {
        name: 'OneMoreEvent',
        racetrack: 'Stockholm',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }];
    }
  }
})();
