(function() {
  'use strict';

  angular
    .module('4Dv611Admin')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(eventFetching, $scope, $log, $state, $stateParams) {
    var vm = this;
    /*if (!$scope.username) {
      $state.go("login");
    }*/
    $scope.loaded = false;

    activate();

    function activate() {
      // Bind recieved events to the $scope.events variable.
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
