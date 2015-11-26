(function() {
  'use strict';

  angular
    .module('4Dv611Admin')
    .run(runBlock);

  /** @ngInject */
  function runBlock(editableOptions, $log) {
    editableOptions.theme = 'bs3';
    $log.debug('runBlock end');
  }

})();
