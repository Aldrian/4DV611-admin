(function() {
  'use strict';

  angular.module('4Dv611Admin')
    .controller('UserManageController', UserManageController);

    function UserManageController($scope, userManaging, $state) {
      activate();

      function activate() {
        $scope.loaded = false;

        var usersPromise = userManaging.getUsers();

        usersPromise.then(function(data) {
          $scope.users = data;
          $scope.loaded = true;
        });

        $scope.eventsHeaderButtonText = 'Back to events';
        $scope.statisticsHeaderButtonText = 'Visit statistics';
      }

      $scope.selectUser = function(user) {
        $scope.selectedUser = user;
      };

      $scope.saveUsers = function(user) {
        userManaging.editUser(user);
      };

      $scope.manageUsers = function() {
        $state.go("home");
      };

      $scope.visitStatistics = function() {
        $state.go("visitStatistics");
      };
    }
})();
