(function() {
  'use strict';

  angular
    .module('4Dv611Admin')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(eventFetching, $scope, $log) {
    var vm = this;

    activate();

    function activate() {
      // Bind recieved events to the $scope.event variable.
      $scope.events = eventFetching.mockEvents();

      $scope.addNewEvent = function() {
        var myEvent = {
          name: 'NewEvent' + ($scope.events.length + 1),
          racetrack: 'Växjö',
          text: 'Description...'
        };
        $scope.events.push(myEvent);
      };

      $scope.deleteEvent = function(myEvent) {
        $log.info('deleteEvent for ' + myEvent.name);
        var index = $scope.events.indexOf(myEvent);
        $scope.events.splice(index, 1);
      };

      $scope.addEvent = function(myEvent) {
        $scope.events.push(myEvent);
      };

      eventFetching.deleteEvent = $scope.deleteEvent;
      eventFetching.addEvent = $scope.addEvent;
    }
  }
})();
