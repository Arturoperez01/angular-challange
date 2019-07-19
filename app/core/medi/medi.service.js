'use strict';

angular.
  module('core.medi').
  factory('medi', ['$resource',
    function($resource) {
      return $resource("http://demo.medinet.cl/"+"api/dashboard/"+'productividad/?format=json', {}, {
        query: {
          method: 'GET',
          isArray: true
        }
      });
    }
  ]);
/*
  factory('medi', ['$http', $resource,
    function($http,$resource) {
    
      function getDataSource(){
        var data = return $resource('phones/:phoneId.json', {}, {
          query: {
            method: 'GET',
            params: {phoneId: 'phones'},
            isArray: true
          }
        });
        var data = $http({
              url: "http://demo.medinet.cl/"+"api/dashboard/"+'productividad/?format=json',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded',
                         'Access-Control-Allow-Origin': '*'
                      },
              method: "get"
            });
            return data;
      }
      
      return {
        getDataSource:getDataSource
    };
    }
  ]);
  //*/
