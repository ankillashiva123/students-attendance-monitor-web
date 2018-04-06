angular.module('app').service("studentsListService", function ($http) {
    this.postMessage = function (number, msg) {
        var url="https://smsapi.engineeringtgr.com/send/?Mobile=7799887550&Password=7799887550&Message="+msg+"&To=7799887550&Key=ankilW7YKnUFGq1Vt43EAvNf";
        return $http.post(url)
            .then(function (res) {

                return res;
                console.log(res);
            }
            ).catch(function (err) {
                console.log(err);
                return err;
            })

    }
    this.getData = function (classId) {

        return $http.get("http://localhost:3000/studentsList/" + classId)
            .then(function (posRes) {
                return posRes.data;
            }).catch(function (err) {
                return err;
            })


    }
    this.sendReport= function(list){
        var url="http://localhost:3000/report/";
        return $http.post(url,list)
            .then(function (res) {

                return res;
                console.log(res);
            }
            ).catch(function (err) {
                console.log(err);
                return err;
            })


    }
});