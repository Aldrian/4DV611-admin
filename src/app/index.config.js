(function() {
  'use strict';

  angular
    .module('4Dv611Admin')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
    // Set options for eventual third-party lib

  }

})();
