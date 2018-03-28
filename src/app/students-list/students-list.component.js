(function() {
    'use strict';
  
    angular.module('app').component('studentsList', {
      controller: StudentsListController,
      controllerAs: 'vm',
      templateUrl: 'app/students-list/students-list.view.html',
    }).controller("StudentsListController", StudentsListController);
  
    /** @ngInject */
    function StudentsListController(studentsListService) {
      var vm = this;
      vm.selectedStudentId=null;
      vm.message= '';
    studentsListService.getData().then(function(data){
        vm.result=data;
        vm.selectedUsers = [];

    });
    
    vm.formSub= function () {
        
        for(var i=0;i< vm.selectedUsers.length;i++)
        {
           var res= studentsListService.postMessage(vm.selectedUsers[i],vm.message);
           console.log(res);
        }

    }

  
    }
  
  })();
  