(function() {
  'use strict';

  angular.module('4Dv611Admin')
    .controller('OffersController', OffersController);

  function OffersController($scope, $state, $stateParams, offerManaging, $log) {
    activate();


    function activate() {


      var userID = $stateParams.userId;

      if (userID) {
        $scope.loaded = false;
        var offersPromise = offerManaging.getOffers(userID);

        offersPromise.then(function(data) {

          $scope.offers = [];
          data.forEach(function(elem) {
            if (elem.used === false) {
              $scope.offers.push(elem);
            }
          });
          if ($scope.offers.length !== 0) {
            $scope.valid = true;
          } else {
            $scope.valid = false;
          }
          $scope.loaded = true;
        });
      }

    }
    $scope.openConsumeModal = function(pOffer) {
      $scope.openOffer = pOffer;
      $scope.consume = true;
    };
    $scope.closeConsumeModal = function() {
      $scope.consume = false;
    };
    $scope.consumeOffer = function(offer) {
      var offersPromise = offerManaging.consumeOffer(offer);
      offersPromise.then(function(data) {
        for (var i = 0; i < $scope.offers.length; i++) {
          if ($scope.offers[i].id == offer.id) {
            $scope.offers.splice(i, 1);
            break;
          }
        }
        if ($scope.offers.length === 0) {
          $scope.valid = false;
        }
        $scope.consume = false;
      });

    };
  }
})();
