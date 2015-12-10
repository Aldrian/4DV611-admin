(function() {
  'use strict';

  angular.module('4Dv611Admin')
    .controller('UserManageController', function($scope, eventFetching, $state) {
      $scope.loaded = false;
      activate();

      function activate() {
        // Bind recieved users to the $scope.users variable.
        var usersPromise = eventFetching.getUsers();

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
        eventFetching.editUser(user);
      };

      $scope.manageUsers = function() {
        $state.go("home");
      };
    });
})();
