angular.module('app').service("studentsListService", function ($http) {
    this.postMessage = function (number, msg) {

        return $http.post("https://smsapi.engineeringtgr.com/send/?Mobile=7799887550&Password=7799887550&Message=+msg+&To=9553181381&Key=ankilW7YKnUFGq1Vt43EAvNf")
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
});