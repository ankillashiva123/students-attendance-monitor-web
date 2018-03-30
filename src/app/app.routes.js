(function () {
    'use strict';

    angular.module('app').config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        /* $stateProvider
       })*/

        $stateProvider.state("login", {
            url: "/login",
            component: 'login'
        })
        .state("userRegistration",{
            url:"/userRegistration",
            component: 'userRegistration'
           
        })
        .state("app", {
            url: "/app",
            component: 'app'
        })
            .state("app.home", {
                url: "/home",
                component: 'home'
            })
        .state("app.addStudent",{
            url:"/addStudent",
            component: 'addStudent'
        })
       .state("app.classesList",{
            url:"/classesList",
            component: 'classesList'
        })
        .state("app.classesList.studentsList",{
            url:"/studentsList",
            component: 'studentsList',
            params: {
                classId: null
            },
        })
        .state("app.classesList.fileUpload",{
            url:"/fileUpload",
            component: 'fileUpload'
        })
        .state("app.reports",{
            url:"/reports",
            component: 'reports'
        })
       
        /*
        .state("classDetails",{
            url:"/classDetails",
            templateUrl:"templates/classDetails.html",
            controller:"classDeatails"
        })
      .state("fileUpload",{
            url:"/fileUpload",
            templateUrl:"templates/fileUpload.html",
            controller:"fileUpload"
        });
        .state("classDetails.studentList",{
            url:"/studentList",
            templateUrl:"templates/studentList.html",
            controller:"studentList"
        })
        
      */


        $urlRouterProvider.otherwise('/login');
    }

})();
