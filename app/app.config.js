'use strict';

angular.
  module('angularApp').
  config(['$routeProvider',
    function config($routeProvider) {
      
      $routeProvider.
        when('/', {
          template: '<dashboard></dashboard>'
        }).
        otherwise('');
    }
  ]);
