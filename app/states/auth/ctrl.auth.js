/**
 * Created by Julius Alvarado on 8/5/2017.
 */

(function () {
    "use strict";

    angular.module("MyApp").controller('AuthCtrl', ["phpDataSer", "$location",
        function (phpDataSer, $location) {
            let vm = this;
            vm.userEmail = "";
            vm.userPassword = "";
            vm.loginError = "";

            vm.login = function () {
                let loginData = {
                    loginSignup: "loginSignup",
                    email: vm.userEmail,
                    password: vm.userPassword,
                    loginActive: "1"
                };

                phpDataSer.loginSignup(loginData).then(function (res) {
                    console.log(res.data);
                    
                    if(res.data !== "1") {
                        console.log(res.data);
                        vm.loginError = res.data; 
                    }  else {
                        $location.url("/home");
                    }
                });
            };

            vm.signup = function () {
                let signupData = {
                    loginSignup: "loginSignup",
                    email: vm.userEmail,
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