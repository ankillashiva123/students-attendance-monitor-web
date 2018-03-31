!function(){"use strict";angular.module("app",["pascalprecht.translate","tmh.dynamicLocale","ui.router","ngFileUpload","checklist-model"])}(),function(){"use strict";function e(e,t,s){var a=this;a.error=null,a.clearError=function(){a.error=null},a.userRegistration=function(){var e={fullName:a.fullName,email:a.email,password:a.Upwd};s.addUser(e,function(e){!0===e?t.go("login"):a.error="Username is already Registered"})}}function t(s){this.addUser=function(e,t){return s.post("http://localhost:3000/auth/register",e).then(function(e){t(!0)},function(e){t(!1)}).catch(function(e){})}}e.$inject=["$rootScope","$state","userRegistrationService"],t.$inject=["$http"],angular.module("app").component("userRegistration",{controller:e,controllerAs:"vm",templateUrl:"app/user-registration/user-registration.view.html"}).controller("UserRegistrationController",e).service("userRegistrationService",t)}(),angular.module("app").service("studentsListService",["$http",function(s){this.postMessage=function(e,t){return s.post("https://smsapi.engineeringtgr.com/send/?Mobile=7799887550&Password=7799887550&Message=+msg+&To=9553181381&Key=ankilW7YKnUFGq1Vt43EAvNf").then(function(e){return e}).catch(function(e){return console.log(e),e})},this.getData=function(e){return s.get("http://localhost:3000/studentsList/"+e).then(function(e){return e.data}).catch(function(e){return e})}}]),function(){"use strict";function e(s,t){var a=this;a.selectedStudentId=null,a.message="",a.$onInit=function(){var e=t.classId;s.getData(e).then(function(e){a.result=e,0==a.result.length&&(a.error=!0),a.selectedUsers=[]})},a.formSub=function(){for(var e=0;e<a.selectedUsers.length;e++){var t=s.postMessage(a.selectedUsers[e],a.message);console.log(t)}}}e.$inject=["studentsListService","$stateParams"],angular.module("app").component("studentsList",{controller:e,controllerAs:"vm",templateUrl:"app/students-list/students-list.view.html"}).controller("StudentsListController",e)}(),function(){"use strict";function e(e){var t=this;t.tableData=null,t.report=[{subject:"LP",totalNumberOfclasses:"50",attendedclasses:"40"},{subject:"CC",totalNumberOfclasses:"45",attendedclasses:"35"},{subject:"DWDM",totalNumberOfclasses:"38",attendedclasses:"30"},{subject:"DP",totalNumberOfclasses:"43",attendedclasses:"40"},{subject:"AI",totalNumberOfclasses:"40",attendedclasses:"35"},{subject:"MC",totalNumberOfclasses:"40",attendedclasses:"35"},{subject:"LP LAB",totalNumberOfclasses:"50",attendedclasses:"45"},{subject:"DWDM LAB",totalNumberOfclasses:"50",attendedclasses:"42"}],t.error=null,t.getReport=function(){"14n81a0598"==t.rollnumber||"14n81a0599"==t.rollnumber||"14n81a05a0"==t.rollnumber||"14n81a05a1"==t.rollnumber?t.tableData=!0:(t.error="invalid rollnumber",t.tableData=null)},t.clearError=function(){t.error=null,t.tableData=null}}e.$inject=["$log"],angular.module("app").component("reports",{controller:e,controllerAs:"vm",templateUrl:"app/reports/reports.view.html"})}(),function(){"use strict";angular.module("app").service("loginservice",["$http",function(s){this.checkCredentials=function(e,t){return s.post("http://localhost:3000/auth/sign_in",e).then(function(e){e.data.token?(localStorage.currentUser={token:e.data.token},s.defaults.headers.common.Authorization="Bearer "+e.data.token,t(!0)):t(!1)}).catch(function(e){t(!1)})}}])}(),function(){"use strict";function e(e,t,s){var a=this;a.error=null,a.clearError=function(){a.error=null},a.login=function(){var e={email:a.Uname,password:a.Upwd};s.checkCredentials(e,function(e){!0===e?t.go("app.home"):a.error="Username or password is incorrect"})}}e.$inject=["$rootScope","$state","loginservice"],angular.module("app").component("login",{controller:e,controllerAs:"vm",templateUrl:"app/login/login.view.html"}).controller("LoginController",e)}(),function(){"use strict";function e(e,t,s,a){this.showSampleConstant=function(){alert(a)},this.switchLanguage=function(e){s.use(e)},e.debug("home activated")}e.$inject=["$log","$rootScope","$translate","SAMPLE_CONSTANT"],angular.module("app").component("home",{controller:e,controllerAs:"vm",templateUrl:"app/home/home.view.html"})}(),function(){"use strict";function e(t,s,e){var a=this;a.submit=function(){a.file&&a.upload1(a.file)},a.upload1=function(e){t.upload({url:"http://localhost:3000/upload",data:{file:e}}).then(function(e){0===e.data.error_code?s.alert("Success "+e.config.data.file.name+"uploaded. Response: "):s.alert("an error occured")},function(e){console.log("Error status: "+e.status),s.alert("Error status: "+e.status)},function(e){console.log(e);var t=parseInt(100*e.loaded/e.total);console.log("progress: "+t+"% "+e.config.data.file.name),a.progress="progress: "+t+"% "})}}e.$inject=["Upload","$window","$scope"],angular.module("app").component("fileUpload",{controller:e,controllerAs:"vm",templateUrl:"app/file-upload/file-upload.view.html"}).controller("FileUploadController",e)}(),function(){"use strict";function e(t){var s=this;s.classes=[{secId:101,name:"sec 1"},{secId:102,name:"sec 2"},{secId:103,name:"sec 3"},{secId:104,name:"sec 4"},{secId:105,name:"sec 5"},{secId:106,name:"sec 6"},{secId:107,name:"sec 7"},{secId:108,name:"sec 8"},{secId:109,name:"sec 9"},{secId:110,name:"sec 10"},{secId:110,name:"sec 10"},{secId:111,name:"sec 11"},{secId:112,name:"sec 12"},{secId:113,name:"sec 13"},{secId:114,name:"sec 14"},{secId:115,name:"sec 15"},{secId:116,name:"sec 16"},{secId:117,name:"sec 17"},{secId:118,name:"sec 18"},{secId:119,name:"sec 19"},{secId:120,name:"sec 20"},{secId:121,name:"sec 21"},{secId:122,name:"sec 22"}],s.selectedClassId=null,s.getStudents=function(e){s.selectedClassId=e,t.go("app.classesList.studentsList",{classId:e})},s.$onInit=function(){s.selectedClassId=s.classes[0].secId,t.go("app.classesList.studentsList",{classId:s.classes[0].secId})}}e.$inject=["$state"],angular.module("app").component("classesList",{controller:e,controllerAs:"vm",templateUrl:"app/classes-list/classes-list.view.html"}).controller("ClassListController",e)}(),function(){"use strict";function e(e,t,s){var a=this;a.selectedNavIndex=1,a.makeActvie=function(e,t){a.selectedNavIndex=e,s.go(t)},a.$onInit=function(){a.selectedNavIndex=index,s.go("home")}}e.$inject=["$log","$rootScope","$state"],angular.module("app").component("appNav",{controller:e,controllerAs:"vm",templateUrl:"app/app-nav/app-nav.view.html"}).controller("AppNavController",e)}(),function(){"use strict";function e(e,t){var s=this;s.error=null,s.depts=["cse","civil","mech","eee","ece"],s.clearError=function(){s.error=null},s.addStudent=function(){}}e.$inject=["$rootScope","$state"],angular.module("app").component("addStudent",{controller:e,controllerAs:"vm",templateUrl:"app/add-student/add-student.view.html"}).controller("addStudentController",e)}(),function(){"use strict";function e(s,e,t,a){t.$on("$translateChangeSuccess",function(e,t){a.set(t.language),s[0].documentElement.setAttribute("lang",t.language)}),e.debug("App run block end")}e.$inject=["$document","$log","$rootScope","tmhDynamicLocale"],angular.module("app").run(e)}(),function(){"use strict";function e(e,t){e.state("login",{url:"/login",component:"login"}).state("userRegistration",{url:"/userRegistration",component:"userRegistration"}).state("app",{url:"/app",component:"app"}).state("app.home",{url:"/home",component:"home"}).state("app.addStudent",{url:"/addStudent",component:"addStudent"}).state("app.classesList",{url:"/classesList",component:"classesList"}).state("app.classesList.studentsList",{url:"/studentsList",component:"studentsList",params:{classId:null}}).state("app.classesList.fileUpload",{url:"/fileUpload",component:"fileUpload"}).state("app.reports",{url:"/reports",component:"reports"}),t.otherwise("/login")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("app").config(e)}(),function(){"use strict";angular.module("app").constant("SAMPLE_CONSTANT","Sample constant")}(),function(){"use strict";function e(e,t,s,a){e.html5Mode(!0),t.debugEnabled(!0),s.useStaticFilesLoader({prefix:"/locales/",suffix:".json"}).preferredLanguage("en").fallbackLanguage("en").useSanitizeValueStrategy("escape").useMissingTranslationHandlerLog(),a.localeLocationPattern("/locales/angular-locale_{{locale}}.js").defaultLocale("en")}e.$inject=["$locationProvider","$logProvider","$translateProvider","tmhDynamicLocaleProvider"],angular.module("app").config(e)}(),function(){"use strict";function e(e,t){}e.$inject=["$log","$rootScope"],angular.module("app").component("app",{controller:e,controllerAs:"vm",templateUrl:"app/app.view.html"}).controller("AppController",e)}(),angular.module("app").run(["$templateCache",function(e){e.put("app/app.view.html","<div class=app-container><app-nav></app-nav><ui-view class=view-container></div>"),e.put("app/add-student/add-student.view.html",'<div class=student-register-page><div id="studentregister-form " class=student-registration-container><div><h1>Student Registration</h1></div><p id="failure ">Oopsie...message not sent.</p><p id="success ">Your message was sent successfully. Thank you!</p><form name="addStudent1 " ng-submit="addStudent(addStudent1) " class=student-register-form><div classs="label-container "><label for="firstname ">FirstName: *</label></div><div class=input-container><input class=app-input type="text " ng-model="firstname " id="firstname " name="name\r\n    " placeholder="Your Name " required tabindex=1 autofocus></div><div classs="label-container "><label for="name " classs="label-container ">secondName: *</label></div><div class=input-container><input class=app-input type="text " ng-model="secondname " id="secondname " name="secondname\r\n    " placeholder="Your Name " required tabindex=1 autofocus></div><div classs="label-container "><label for="rollnumber " classs="label-container ">RollNo: *</label></div><div class=input-container><input class=app-input type="text " id="rollnumber " ng-model="rollnumber " name="rollnumber\r\n    " placeholder="Your RollNo " required tabindex=1 autofocus></div><div classs="label-container "><label for="rollnumber ">Deparrment: *</label></div><div class=input-select-container><select class=form-control ng-model="department "><option value=" " disabled selected>Please select department</option><option ng-repeat="dept in vm.depts ">{{dept}}</option></select></div><div class=label-container><label for="email " classs="label-container ">Email: *</label></div><div class=input-container><input class=app-input type="email " ng-model="email " id="email " name="email " placeholder="Your\r\n    Email " tabindex=2 required></div><div class=label-container><label for="contactnumber ">ContactNumber: *</label></div><div class=input-container><input class=app-input type="number " ng-model="contactnumber " id="contactnumber " name="contactnumber\r\n    " placeholder="Your Number " tabindex=2 required></div><div class=label-container><label for="email " classs="label-container ">EmegencyNumber: *</label></div><div class=input-container><input class=app-input type="number " id="EmegencyNumber " ng-model="EmegencyNumber " name="EmegencyNumber\r\n    " placeholder="Your Number " tabindex=2 required></div><div class=button-container><button name="submit " type="submit " id="submit " class=app-button>SEND</button></div></form></div></div>'),e.put("app/app-nav/app-nav.view.html",'<div class="nav-bar layout-column"><div class=logo-container></div><ul class=flex><li ng-class="{\'active\': vm.selectedNavIndex == 1}"><a ui-sref=app.home ng-click=vm.makeActvie(1,app.home)><i class=material-icons>home</i></a></li>\x3c!-- <li>\r\n                <a ui-sref="app.addStudent">\r\n                    addStudent\r\n                </a>\r\n            </li> --\x3e<li ng-class="{\'active\': vm.selectedNavIndex == 2}"><a ng-click="vm.makeActvie(2, \'app.classesList\')"><i class=material-icons>people</i></a></li><li ng-class="{\'active\': vm.selectedNavIndex == 3}"><a ng-click="vm.makeActvie(3,\'app.classesList.fileUpload\')"><i class=material-icons>file_upload</i></a></li><li ng-class="{\'active\': vm.selectedNavIndex == 4}"><a ui-sref=app.reports ng-click=vm.makeActvie(4)><i class=material-icons>assessment</i></a></li></ul><ul class=flex-auto><li><a ui-sref=login><i class=material-icons>exit_to_app</i></a></li></ul></div>'),e.put("app/classes-list/classes-list.view.html",'<div class=class-list-container><div class=class-list><ul><li style=font-style:Audrey;>CLASSES</li><li ng-repeat="class in vm.classes" ng-class="{\'active\': vm.selectedClassId == class.secId}" ng-click=vm.getStudents(class.secId)>{{class.name}}</li></ul></div><div class=view-container ui-view></div></div>'),e.put("app/file-upload/file-upload.view.html","<div class=file-upload-container><h1>Angular Node File Upload</h1><form name=up.upload_form>file Upload <input type=file ngf-select ng-model=vm.file name=file required> <i ng-show=up.upload_form.file.$error.required>*required</i><br><button type=submit ng-click=vm.submit()>submit</button><p>{{vm.progress}}</p></form></div>"),e.put("app/home/home.view.html","<div class=home-container><h1>wecome to homepage</h1></div>"),e.put("app/login/login.view.html",'<div class=login-page ng-controller=LoginController><h1 style="color: #FFFFFF" align=center>Login</h1><div class=login-container><div class=login-error><h4 ng-if=vm.error style="color: red">{{vm.error}}</h4></div><form name=loginForm ng-submit=vm.login(loginForm) class=login-form><div class=label-container><label>UserName</label></div><div class=input-container><input type=text placeholder=Username ng-change=vm.clearError() class=app-input id=username ng-model=vm.Uname required><div ng-if="loginForm.Uname.$dirty && loginForm.Unamee.$error.required" class=help-block>Username is required</div></div><div class=label-container><label>Password</label></div><div class=input-container><input type=password placeholder=password class=app-input ng-change=vm.clearError() id=password ng-model=vm.Upwd required><div ng-if="loginForm.Upwd.$dirty && loginForm.Upwd.$error.required" class=help-block>Password is required</div></div><div class=button-container><button type=submit class=app-button>Sign in</button></div><div class=forgot-password-container><a ui-sref=userRegistration class=forgot>Sign Up?</a> or <a href=# class=forgot>forgot password?</a></div></form></div></div>'),e.put("app/reports/reports.view.html",'<div class=reports-container><form name=reports-Form ng-submit=vm.getReport(reports-form) class=reports-form><div class=input-container><div class=input-error><h4 ng-if=vm.error style="color: red">{{vm.error}}</h4></div><div class=label-container><label>RollNumber</label></div><div class=input-container><input type=text placeholder=RollNumber ng-change=vm.clearError() class=app-input id=rollnumber ng-model=vm.rollnumber required><div ng-if="reports-form.rollnumber.$dirty && reports-form.rollnumber.$error.required" class=help-block>RollNumber is required</div></div></div><div class=button-container><button type=submit class=app-button>GET DATA</button></div></form><div class=table-comtainer ng-if=vm.tableData><table><tr><th>subject</th><th>totalNumberOfclasses</th><th>attendedclasses</th><th>Percentage</th></tr><tr ng-repeat="sub in vm.report"><td>{{sub.subject}}</td><td>{{sub.totalNumberOfclasses}}</td><td>{{sub.attendedclasses}}</td><td>{{sub.attendedclasses/sub.totalNumberOfclasses *100}}</td></tr></table></div></div>'),e.put("app/students-list/students-list.view.html",'<div class=student-list-container><form name=studentListForm ng-submit=vm.formSub()><div class=table-container-header><table><thead><tr><th>select</th><th>RollNumber</th><th>FirstName</th><th>SecondName</th></tr></thead></table></div><div class=error-container ng-if=vm.error><h3>there are no students to view</h3></div><div class=table-container><table><tbody><tr ng-repeat="student in vm.result" ng-class="{\'active\': vm.selectedStudentId == class.rollNmber}"><td><input type=checkbox checklist-model=vm.selectedUsers checklist-value=student.rollNumber ng-click=vm.getSelectedStudents(student.rollNumber)></td><td>{{student.rollNumber}}</td><td>{{student.firstName}}</td><td>{{student.secondName}}</td></tr></tbody></table></div><div class=textarea-container><textarea class=app-textarea ng-model=vm.message placeholder="Enter your message" rows=4 cols=50 required></textarea> <button type=submit class=app-button>Submit</button></div></form></div>'),e.put("app/user-registration/user-registration.view.html",'<div class=user-registration-page><h1 style="color: #FFFFFF" align=center>User Registration</h1><div class=user-registration-container><form name=registrationForm ng-submit=vm.userRegistration(loginForm) class=user-registration-form method=post><div class=login-error><h4 ng-if=vm.error style="color: red">{{vm.error}}</h4></div><div class=label-container><label>Fullname</label></div><div class=input-container><input type=text placeholder=Fullname class=app-input ng-change=vm.clearError() ng-model=vm.fullName required><div ng-if="registrationForm.Fullname.$dirty && registrationForm.Fullname.$error.required" class=help-block>Fullname is required</div></div><div class=label-container><label for=email classs=label-container>Email: *</label></div><div class=input-container><input class=app-input type=email class=app-input ng-model=vm.email name=email placeholder="Your Email" tabindex=2 required></div><div class=label-container><label>Password</label></div><div class=input-container><input type=password placeholder=password class=app-input ng-change=vm.clearError() id=password ng-model=vm.Upwd required><div ng-if="registrationForm.Upwd.$dirty && registrationForm.Upwd.$error.required" class=help-block>Password is required</div></div><div class=button-container><button type=submit class=app-button>Sign Up</button></div><div class=forgot-password-container><a ui-sref=login class=forgot>Sign In?</a></div></form></div></div>')}]);
//# sourceMappingURL=../maps/scripts/app-6ce209dcaf.js.map
