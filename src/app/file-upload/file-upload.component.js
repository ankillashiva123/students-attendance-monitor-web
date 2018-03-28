(function () {
    'use strict';
    angular.module('app')
    .component('fileUpload', {
        controller: FileUploadController,
        controllerAs: 'vm',
        templateUrl: 'app/file-upload/file-upload.view.html',
    })
    .controller("FileUploadController", FileUploadController);
    function FileUploadController(Upload,$window,$scope) {

        var vm = this;
        vm.submit = function () { //function to call on form submit
            if (vm.file) { //check if from is valid
                vm.upload1(vm.file); //call upload function
            }
        }

        vm.upload1 = function (file) {
            Upload.upload({
                url: 'http://localhost:3000/upload', //webAPI exposed to upload the file
                data: { file: file } //pass file as data, should be user ng-model
            }).then(function (resp) { //upload function returns a promise
                if (resp.data.error_code === 0) { //validate success
                    $window.alert('Success ' + resp.config.data.file.name + 'uploaded. Response: ');
                } else {
                    $window.alert('an error occured');
                }
            }, function (resp) { //catch error
                console.log('Error status: ' + resp.status);
                $window.alert('Error status: ' + resp.status);
            }, function (evt) {
                console.log(evt);
                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
                vm.progress = 'progress: ' + progressPercentage + '% '; // capture upload progress
            });
        }





    }
        
    })();