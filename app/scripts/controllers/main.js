'use strict';

/**
 * @ngdoc function
 * @name todoFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoFrontendApp
 */
angular.module('todoFrontendApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
