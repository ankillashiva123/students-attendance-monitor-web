(function() {
    'use strict';
  
    angular.module('app').component('appNav', {
      controller: AppNavController,
      controllerAs: 'vm',
      templateUrl: 'app/app-nav/app-nav.view.html',
    }).controller("AppNavController", AppNavController);
  
    /** @ngInject */
    function AppNavController($log, $rootScope) {
      var vm = this;
      vm.selectedNavIndex = 1;

      vm.makeActvie = makeActvie;


      function makeActvie(index) {
        vm.selectedNavIndex = index;
      }
  
    }
  
  })();
  