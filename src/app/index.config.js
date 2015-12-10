(function() {
  'use strict';

  angular
    .module('4Dv611Admin')
    .config(config);

  /** @ngInject */
  function config($logProvider, $httpProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
    // Set options for eventual third-party lib
    $httpProvider.interceptors.push('APIInterceptor');
  }

})();
