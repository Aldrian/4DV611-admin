/**
 * Directive displaying the events fetched after the request.
 * The template : event.html iterates on this array to display the images
 * @param [object]event : the iterated event
 * @see eventFetching.service.js
 * @see main.html
 *
 */

(function() {
  'use strict';

  angular
    .module('4Dv611Admin')
    .directive('event', eventDirective);

  function eventDirective() {
    var directive = {
      restrict: 'E',
      scope: {
        event: '='
      },
      templateUrl: 'app/components/event/event.html',
      link: linkFunc,
      controller: EventController,
      controllerAs: 'eventController'
    };

    return directive;

    function linkFunc() {}

    /** @ngInject */
    function EventController(eventFetching, $scope, $log) {
      activate();

      function activate() {
        $scope.imgContent = {};
        $scope.imageString = [];
      }

      $scope.saveChanges = function(event) {
        eventFetching.editEvent(event);
      };

      $scope.discardChanges = function(event) {
        $log.info(event);
      };

      $scope.setImage = function($file, $event, $flow, event) {
        $flow.files.length = 0;

        var fileReader = new FileReader();
        fileReader.onload = function(fileData) {
          var uri = fileData.target.result;
          $scope.imgContent = {
              fileName: $file.name,
              fileContent: uri
          };
          event.offerImageSource = $scope.imgContent.fileContent;
        };

        fileReader.readAsDataURL($file.file);
      };
    }
  }
})();
