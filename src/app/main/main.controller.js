(function() {
  'use strict';

  angular
    .module('4Dv611Admin')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(eventFetching, $scope) {
    var vm = this;


    activate();

    function activate() {
      // Bind recieved events to the $scope.event variable.
      $scope.events = eventFetching.mockEvents();
    }

  }
})();
