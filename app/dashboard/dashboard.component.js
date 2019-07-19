'use strict';

// Register `dashboard` component, along with its associated controller and template
angular.
  module('dashboard').
  component('dashboard', {
    templateUrl: 'dashboard/dashboard.template.html',
    controller: ['$routeParams', 'medi',
      function dashboardController($routeParams, medi) {
        var self = this;
        var data;
        
        medi.get(function(data) {
          console.log(data);
        });

      }
      
    ]
  });
