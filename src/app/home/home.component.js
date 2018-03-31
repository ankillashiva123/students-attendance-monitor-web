(function() {
  'use strict';

  angular.module('app').component('home', {
    controller: HomeController,
    controllerAs: 'vm',
    templateUrl: 'app/home/home.view.html',
  });

  /** @ngInject */
  function HomeController($log, $rootScope, $translate, SAMPLE_CONSTANT) {
    var vm = this;

    // Scope variables go here:
    // vm.variable = 'value';
    vm.slides = [
      {image: 'images/img00.jpg', description: 'Image 00'},
      {image: 'images/img01.jpg', description: 'Image 01'},
      {image: 'images/img02.jpg', description: 'Image 02'},
      {image: 'images/img03.jpg', description: 'Image 03'},
      {image: 'images/img04.jpg', description: 'Image 04'}
  ];
    

  vm.direction = 'left';
  vm.currentIndex = 0;

  vm.setCurrentSlideIndex = function (index) {
      vm.direction = (index > vm.currentIndex) ? 'left' : 'right';
      vm.currentIndex = index;
  };

  vm.isCurrentSlideIndex = function (index) {
      return vm.currentIndex === index;
  };

  vm.prevSlide = function () {
      vm.direction = 'left';
      vm.currentIndex = (vm.currentIndex < vm.slides.length - 1) ? ++vm.currentIndex : 0;
  };

  vm.nextSlide = function () {
      vm.direction = 'right';
      vm.currentIndex = (vm.currentIndex > 0) ? --vm.currentIndex : vm.slides.length - 1;
  };
    


  }


})();