(function () {
  'use strict';

  angular.module('app').component('studentsList', {
    controller: StudentsListController,
    controllerAs: 'vm',
    templateUrl: 'app/students-list/students-list.view.html',
  }).controller("StudentsListController", StudentsListController);

  /** @ngInject */
  function StudentsListController(studentsListService, $stateParams) {
    var vm = this;
    vm.selectedStudentId = null;
    vm.message = '';
    vm.success = false;
    vm.studentListForm = true;
    var classId ='';
    vm.$onInit = $onInit;

    function $onInit() {
       classId = $stateParams.classId;
      vm.studentListForm = true;
      studentsListService.getData(classId).then(function (data) {
        vm.result = data;
        if (vm.result.length == 0)
          vm.error = true;


        vm.selectedUsers =[];
      });
    }

    vm.formSub = function () {
      var absenties={
        "class":classId,
        "absenties":vm.selectedUsers
      };
      var res = studentsListService.sendReport(absenties);
      console.log(res);
      for (var i = 0; i < vm.selectedUsers.length; i++) {
        var res = studentsListService.postMessage(vm.selectedUsers[i], vm.message);
        console.log(res);
      }
      vm.studentListForm = false;
      vm.success = true;

    }


  }

})();
