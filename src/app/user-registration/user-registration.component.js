(function () {
    'use strict';

    angular
        .module('app')
        .component('userRegistration', {
            controller: UserRegistrationController,
            controllerAs: 'vm',
            templateUrl: 'app/user-registration/user-registration.view.html',
        })
        .controller('UserRegistrationController', UserRegistrationController)
        .service('userRegistrationService', userRegistrationService);

    /** @ngInject */
    function UserRegistrationController($rootScope, $state, userRegistrationService) {
        var vm = this;

        // view model variables will go here
        vm.error = null;

        //function hooks used in html 
        vm.clearError = clearError;
        vm.userRegistration = userRegistration;

        //var internal use will go here

        function userRegistration() {
            var data = {
                'fullName': vm.fullName,
                'email': vm.email,
                'password': vm.Upwd
            }

            userRegistrationService.addUser(data, function (result) {
                if (result === true) {
                    $state.go('login');
                } else {
                    vm.error = 'Username is already Registered';
                    //vm.loading = false;
                    
                }
            });
        }

        function clearError() {
            vm.error = null;
        }
    }
    function userRegistrationService($http) {

        this.addUser = function (arg, callback) {
            return $http.post('http://localhost:3000/auth/register', arg)
                .then(function (response) {
                   
                    callback(true);
                    // login successful if there's a token in the response
                    // if (response) {
                    //     // store username and token in local storage to keep user logged in between page refreshes
                    //             console.log(response.data);
                    //     // execute callback with true to indicate successful login
                    //     callback(true);

                    // } else {
                    //     // execute callback with false to indicate failed login
                    //     callback(false);
                    //     console.log(response);   

                    // }
                },
                function (error) {
                   
                    callback(false);
                })
                .catch(function (error) {

                    
                });


        }
    }

})();
