(function () {
  'use strict';

  angular.module('app').component('appNav', {
    controller: AppNavController,
    controllerAs: 'vm',
    templateUrl: 'app/app-nav/app-nav.view.html',
  }).controller("AppNavController", AppNavController);

  /** @ngInject */
  function AppNavController($log, $rootScope,$state) {
    var vm = this;
    vm.selectedNavIndex = 1;

    vm.makeActvie = makeActvie;
    vm.$onInit = $onInit;
    function $onInit(){

      vm.selectedNavIndex = index;
      $state.go('home');
    }


    function makeActvie(index, url) {
      vm.selectedNavIndex = index;
      $state.go(url);
    }

  }

})();
