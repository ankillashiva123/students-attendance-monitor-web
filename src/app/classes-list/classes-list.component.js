(function () {
    'use strict';

    angular.module('app').component('classesList', {
        controller: ClassListController,
        controllerAs: 'vm',
        templateUrl: 'app/classes-list/classes-list.view.html',
    }).controller("ClassListController", ClassListController);

    /** @ngInject */
    function ClassListController($state) {
        var vm = this;

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
        vm.selectedClassId = null;

        vm.getStudents = getStudents;
        vm.$onInit = $onInit;


        function $onInit() {
            vm.selectedClassId = vm.classes[0].secId;
            $state.go("app.classesList.studentsList", {
                classId: vm.classes[0].secId
            });
        }

        function getStudents(secId) {
            vm.selectedClassId = secId;
            $state.go("app.classesList.studentsList", {
                classId: secId
            });

        }



    }

})();
