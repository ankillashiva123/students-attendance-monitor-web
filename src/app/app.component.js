(function() {
    'use strict';
  
    angular.module('app').component('app', {
      controller: AppController,
      controllerAs: 'vm',
      templateUrl: 'app/app.view.html',
    }).controller("AppController", AppController);
  
    /** @ngInject */
    function AppController($log, $rootScope) {
      var vm = this;
  

  
    }
  
  })();
  