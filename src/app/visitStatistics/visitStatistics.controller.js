(function() {
  'use strict';

  angular.module('4Dv611Admin')
    .controller('VisitStatisticsController', VisitStatisticsController);

    function VisitStatisticsController($scope, $state, statisticsFetching) {
      activate();

      function activate() {
        $scope.loaded = false;

        var statisticsPromise = statisticsFetching.getStatistics();

        statisticsPromise.then(function(data) {
          $scope.statistics = data;
          $scope.loaded = true;
        });

        $scope.eventsHeaderButtonText = 'Manage users';
        $scope.statisticsHeaderButtonText = 'Back to events';
      }

      $scope.manageUsers = function() {
        $state.go("userManage");
      };

      $scope.visitStatistics = function() {
        $state.go("home");
      };
    }
})();
