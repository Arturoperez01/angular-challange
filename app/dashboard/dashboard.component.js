'use strict';

// Register `dashboard` component, along with its associated controller and template
angular.
  module('dashboard').
  component('dashboard', {
    templateUrl: 'dashboard/dashboard.template.html',
    controller: ['$routeParams', 'medi',
      function dashboardController($routeParams, medi) {
        let self = this;
        medi.getDataSource().then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          self.sucursales = response.data;
        }, function errorCallback(response) {
          
          console.log(response)
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });

      }
      
    ]
  });
