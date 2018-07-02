(function () {
    'use strict';

    /** @ngInject */

    angular
        .module('app')
        .service('loginservice', function ($http) {
            this.checkCredentials = function (arg, callback) {
                return $http.post('http://https://student-attendance-services.herokuapp.com/auth/sign_in', arg)
                    .then(function (response) {
                        // login successful if there's a token in the response
                        if (response.data.token) {
                            // store username and token in local storage to keep user logged in between page refreshes
                            localStorage.currentUser = { token: response.data.token };

                            // add jwt token to auth header for all requests made by the $http service
                            $http.defaults.headers.common.Authorization = 'Bearer ' + response.data.token;

                            // execute callback with true to indicate successful login
                            callback(true);

                        } else {
                            // execute callback with false to indicate failed login
                            callback(false);

                        }
                    })
                    .catch(function (error) {
                        callback(false);
                    });

            }

        });

})();
