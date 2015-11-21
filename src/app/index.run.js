(function() {
  'use strict';

  angular
    .module('4Dv611Admin')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
