(function () {
    'use strict';

    /** @ngInject */

    angular
        .module('app')
        .service('addStudentService', function ($http) {
            this.addStudent = function (arg, callback) {
                return $http.post('http://localhost:3000/studentsList/101', arg)
                    .then(function (response) {
                        // login successful if there's a token in the response
                        if (response) {
                           
                           console.log(response.data);
                         

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
