/**
 * Created by Julius Alvarado on 8/5/2017.
 */

(function () {
    "use strict";

    angular.module("MyApp").controller('AuthCtrl', ['$scope', "phpDataSer", "$location",
        function ($scope, phpDataSer, $location) {
            let vm = this;
            vm.username = "";
            vm.userPassword = "";
            vm.loginError = "";

            vm.login = function () {
                let loginData = {
                    loginSignup: "loginSignup",
                    email: vm.username,
                    password: vm.userPassword,
                    loginActive: "1"
                };

                phpDataSer.loginSignup(loginData).then(function (res) {
                    if(!parseInt(res.data)) { // there was an error i.e. wrong password, etc.
                        vm.loginError = "ERROR: "+res.data;
                    }  else {
                        let userInfo = {
                            username: vm.username,
                            userId: res.data
                        };
                        phpDataSer.setCurrentUser(userInfo);
                        $location.url("/home");
                    }
                });
            };

            vm.signup = function () {
                let signupData = {
                    loginSignup: "loginSignup",
                    email: vm.username,
                    password: vm.userPassword,
                    loginActive: "0"
                };
                phpDataSer.loginSignup(signupData).then(function (res) {
                    console.log(res.data);
                    if(!parseInt(res.data)) { // there was an error i.e. wrong password, etc.
                        vm.loginError = "ERROR: "+res.data;
                    }  else {
                        let userInfo = {
                            username: vm.username,
                            userId: res.data
                        };
                        phpDataSer.setCurrentUser(userInfo);
                        $location.url("/home");
                    }
                });
            }
        }
    ]);
}());