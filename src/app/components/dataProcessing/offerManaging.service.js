/**
 * Offer managing service
 * Implements the crud operations managing the offers
 */
(function() {
  'use strict';

  angular
    .module('4Dv611Admin')
    .factory('offerManaging', offerManaging);

  /** @ngInject */
  function offerManaging($http, API_HOST_ADDRESS, $log) {
    var apiHost = API_HOST_ADDRESS;

    /**
     * Returns the interface of the service
     * @type {Object}
     */
    var service = {
      apiHost: apiHost,
      getOffers: getOffers,
      consumeOffer: consumeOffer
    };

    return service;

    function getOffers(userID) {
      return $http.get(apiHost + '/users/'+ userID+'/offers')
        .then(function(response) {
          $log.info(response.data);
          return response.data;
        })
        .catch(function(error) {
          $log.error('XHR Failed for getOffers for userId ' + userId + '.\n' + angular.toJson(error.data, true));
        });
    }


    function consumeOffer(pOffer) {
      var offer = pOffer;
      offer.used = true;
      $log.log(offer);
      var req = {
        method: 'PUT',
        url: apiHost + '/offers/',
        data: offer
      };
      return $http(req)
        .then(function(response) {
          $log.info(response.data);
          return response.data;
        })
        .catch(function(error) {
          $log.error('XHR Failed for getOffers for userId ' + userId + '.\n' + angular.toJson(error.data, true));
        });
    }
  }
})();
