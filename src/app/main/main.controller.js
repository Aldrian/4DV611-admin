(function() {
  'use strict';

  angular
    .module('4Dv611Admin')
    .controller('MainController', MainController);

  function MainController(eventFetching, $scope, $log, $state) {
    activate();

    function activate() {
      $scope.loaded = false;

      var eventPromise = eventFetching.getEvents();

      eventPromise.then(function(data) {
        $scope.events = data;
        $scope.loaded = true;
      });

      $scope.eventsHeaderButtonText = 'Manage users';
      $scope.statisticsHeaderButtonText = 'Visit statistics';
    }

    $scope.manageUsers = function() {
      $state.go("userManage");
    };

    $scope.visitStatistics = function() {
      $state.go("visitStatistics");
    };
  }
})();
