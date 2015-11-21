/**
 * Directive displaying the events fetched after the request.
 * The template : event.html iterates on this array to display the images
 * @param [object] event : the iterated event
 * @see eventFetching.service.js
 * @see main.html
 *
 */

(function() {
  'use strict';

  angular
    .module('4Dv611Admin')
    .directive('event', eventDirective);

  /** @ngInject */
  function eventDirective() {
    var directive = {
      restrict: 'E',
      scope: {
        event: '='
      },
      templateUrl: 'app/components/event/event.html',
      link: linkFunc,
      controller: EventController,
      controllerAs: 'vm'
    };

    return directive;

    function linkFunc() {}

    /** @ngInject */
    function EventController() {
      var vm = this;
      activate();

      function activate() {}
    }

  }

})();
