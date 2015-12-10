(function() {
  'use strict';

  angular.module('4Dv611Admin')
    .directive('pageHeader', pageHeaderDirective);

  /** @ngInject */
  function pageHeaderDirective() {
    var directive = {
      templateUrl: 'app/components/pageHeader/pageHeader.html',
      restrict: 'E',
      controller: PageHeaderController,
      controllerAs: 'phc'
    };

    return directive;

    /** @ngInject */
    function PageHeaderController($scope, $state, Auth, $log) {
      $scope.username = 'loading...';
      var currentUser = Auth.getCurrentUser();
      if (currentUser) {
        currentUser.then(function(response) {
            $log.info(response);
            if (response) {
              $scope.username = response.data.username;
            }
          });
      } else {
        $scope.username = 'NOT AUTHORIZED';
      }
      $scope.logout = function() {
        Auth.logout();
        $state.go("login");
      };
    }
  }
})();
