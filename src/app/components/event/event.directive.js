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
    function EventController(eventFetching, $scope) {
      var vm = this;

      $scope.saveChanges = function(event) {
        eventFetching.editEvent(event);
      };

      $scope.imgContent = {};
      $scope.imageString = [];

      $scope.setImage = function($file, $event, $flow, event) {
        $flow.files.length = 0;
        //event.offerImage = $file;
        console.log(event.image);

        var fileReader = new FileReader();
        fileReader.onload = function(fileData) {
          console.log("fileReader loaded");
          var uri = fileData.target.result;
          $scope.imgContent = {
              fileName: $file.name,
              fileContent: uri
          };
          event.offerImageSource = $scope.imgContent.fileContent;
        };
        fileReader.readAsDataURL($file.file);
      };

      $scope.deleteEvent = function(myEvent) {
        return eventFetching.deleteEvent(myEvent);
      };
    }
  }
})();
