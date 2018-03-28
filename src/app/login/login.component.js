(function () {
    'use strict';

    angular
        .module('app')
        .component('login', {
            controller: LoginController,
            controllerAs: 'vm',
            templateUrl: 'app/login/login.view.html',
        })
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController($rootScope, $state, loginservice) {
        var vm = this;

        // view model variables will go here
        vm.error = null;

        //function hooks used in html 
        vm.clearError = clearError;
        vm.login = login;

        //var internal use will go here

        function login() {
            var data = {
                'email': vm.Uname,
                'password': vm.Upwd
            }
            loginservice.checkCredentials(data, function (result) {
                if (result === true) {
                    $state.go('app.home');
                } else {
                    // vm.error = 'Username or password is incorrect';
                    //vm.loading = false;
                    vm.error = "Username or password is incorrect";
                }
            });
        };

        function clearError(){
            vm.error = null;
        }
    }

})();
