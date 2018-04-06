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
    function addStudentController($rootScope, $state,addStudentService) {
        var vm = this;

        // view model variables will go here
        vm.error = null;
        vm.depts=["cse","civil","mech","eee","ece"];
        //function hooks used in html 
        vm.clearError = clearError;
        vm.addStudent = addStudnet;
        vm.success=null;
        vm.classes = [{
            secId: 101,
            name: 'sec 1'
        }, {
            secId: 102,
            name: 'sec 2'
        },
        {
            secId: 103,
            name: 'sec 3'
        }
            , {
            secId: 104,
            name: 'sec 4'
        }, {
            secId: 105,
            name: 'sec 5'
        }, {
            secId: 106,
            name: 'sec 6'
        }, {
            secId: 107,
            name: 'sec 7'
        }, {
            secId: 108,
            name: 'sec 8'
        }, {
            secId: 109,
            name: 'sec 9'
        }, {
            secId: 110,
            name: 'sec 10'
        }
            , {
            secId: 110,
            name: 'sec 10'
        }, {
            secId: 111,
            name: 'sec 11'
        }, {
            secId: 112,
            name: 'sec 12'
        }, {
            secId: 113,
            name: 'sec 13'
        }, {
            secId: 114,
            name: 'sec 14'
        }, {
            secId: 115,
            name: 'sec 15'
        }, {
            secId: 116,
            name: 'sec 16'
        }, {
            secId: 117,
            name: 'sec 17'
        }, {
            secId: 118,
            name: 'sec 18'
        }, {
            secId: 119,
            name: 'sec 19'
        }, {
            secId: 120,
            name: 'sec 20'
        }, {
            secId: 121,
            name: 'sec 21'
        }, {
            secId: 122,
            name: 'sec 22'
        }
        ];
        

        //var internal use will go here

        function addStudnet() {
            var data={
                
                "emergencyContact":vm.EmegencyNumber,
                "firstName" :vm.firstname,
                "secondName" :vm.secondname,
                "department" :vm.department ,
                "rollNumber" :vm.rollnumber,
                "mailId" : vm.email,
                "Contact" :vm.contactnumber,
                "classId":106
            }
            
            console.log(data);
            addStudentService.addStudent(data, function (result) {
                if (result === true) {
                    vm.success=true;
                    
                } else {
                    // vm.error = 'Username or password is incorrect';
                    //vm.loading = false;
                    vm.error = "something went Wrong Please try again";
                }
            });

            
        }

        function clearError(){
            vm.error = null;
        }
    }

})();
