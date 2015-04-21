'use strict';

/**
 * @ngdoc function
 * @name todoFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the todoFrontendApp
 */
angular.module('todoFrontendApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
