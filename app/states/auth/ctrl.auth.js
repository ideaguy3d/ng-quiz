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
                    console.log(res.data);
                    
                    if(res.data !== "1") { // there was an error
                        vm.loginError = res.data; 
                    }  else {
                        phpDataSer.setCurrentUser(vm.username);
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
                phpDataSer.loginSignup(signupData).then((res) => {
                    console.log(res.data);
                    $location.url("/home")
                });
            }
        }
    ]);
}());