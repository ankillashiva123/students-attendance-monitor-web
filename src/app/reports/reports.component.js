(function () {
    'use strict';

    angular.module('app').component('reports', {
        controller: ReportsController,
        controllerAs: 'vm',
        templateUrl: 'app/reports/reports.view.html',
    });

    /** @ngInject */
    function ReportsController($log) {
        var vm = this;
        vm.tableData = null;
        vm.report = [
            {
                subject: 'LP',
                totalNumberOfclasses: '50',
                attendedclasses: '40'
            }, {
                subject: 'CC',
                totalNumberOfclasses: '45',
                attendedclasses: '35'
            }, {
                subject: 'DWDM',
                totalNumberOfclasses: '38',
                attendedclasses: '30'
            }, {
                subject: 'DP',
                totalNumberOfclasses: '43',
                attendedclasses: '40'
            }, {
                subject: 'AI',
                totalNumberOfclasses: '40',
                attendedclasses: '35'
            }, {
                subject: 'MC',
                totalNumberOfclasses: '40',
                attendedclasses: '35'
            }, {
                subject: 'LP LAB',
                totalNumberOfclasses: '50',
                attendedclasses: '45'
            }, {
                subject: 'DWDM LAB',
                totalNumberOfclasses: '50',
                attendedclasses: '42'
            }

        ];
        vm.error = null;
        vm.getReport = getReport;
        vm.clearError = clearError;

        function getReport() {
            
            if (vm.rollnumber == '14n81a0598' || vm.rollnumber == '14n81a0599' || vm.rollnumber == '14n81a05a0' || vm.rollnumber == '14n81a05a1')
            {
                vm.tableData=true;

            }
            else{
                vm.error='invalid rollnumber';
                vm.tableData=null;
            }


        }
        function clearError() {
            vm.error = null;
            vm.tableData = null;

        }

        // Scope variables go here:
        // vm.variable = 'value'





    }


})();