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

        $scope.navButtonText = 'Back to events';
      }

      $scope.selectUser = function(user) {
        $scope.currentUser = user;
      };

      $scope.saveUsers = function(user) {
        userManaging.editUser(user);
      };

      $scope.manageUsers = function() {
        $state.go("home");
      };
    }
})();
