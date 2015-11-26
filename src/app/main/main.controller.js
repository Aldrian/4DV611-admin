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

      $scope.addNewEvent = function(newEvent) {
        $scope.addEvent(newEvent);
        this.newEvent = null;
        $scope.newEventForm.$setPristine(true);
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
