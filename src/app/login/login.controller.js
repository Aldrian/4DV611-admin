(function() {
  'use strict';

  angular
    .module('4Dv611Admin')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($scope, $log, $state, Auth) {
    /*
    $scope.login = function(username, password) {

      $state.go("home", {
        username: username
      });
    };
    */
    $scope.user = {};
    $scope.errors = {};

    $scope.startLogin = function(form) {
      $scope.submitted = true;

      if (form.$valid) {
        Auth.login({
            username: $scope.user.username,
            password: $scope.user.password
          })
          .then(function(response) {
            $log.info(response);
            // Logged in, redirect to home
            $state.go('home', {username: $scope.user.username});
          })
          .catch(function(err) {
            $scope.errors.other = err.message;
          });
      }
    };
  }
})();
