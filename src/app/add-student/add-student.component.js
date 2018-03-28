(function () {
    'use strict';

    angular
        .module('app')
        .component('addStudent', {
            controller: addStudentController,
            controllerAs: 'vm',
            templateUrl: 'app/add-student/add-student.view.html',
        })
        .controller('addStudentController', addStudentController);

    /** @ngInject */
    function addStudentController($rootScope, $state) {
        var vm = this;

        // view model variables will go here
        vm.error = null;
        vm.depts=["cse","civil","mech","eee","ece"];
        //function hooks used in html 
        vm.clearError = clearError;
        vm.addStudent = addStudnet;

        //var internal use will go here

        function addStudnet() {
            var data = {
               
            }
            
        }

        function clearError(){
            vm.error = null;
        }
    }

})();
