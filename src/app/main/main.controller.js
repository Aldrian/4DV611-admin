(function() {
  'use strict';

  angular
    .module('4Dv611Admin')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(eventFetching, $scope, $log, $state) {
    activate();

    function activate() {
      $scope.loaded = false;

      var eventPromise = eventFetching.getEvents();

      eventPromise.then(function(data) {
        $scope.events = data;
        $scope.loaded = true;
      });

      $scope.navButtonText = 'Manage users';
    }

    $scope.manageUsers = function() {
      $state.go("userManage");
    };
  }
})();
