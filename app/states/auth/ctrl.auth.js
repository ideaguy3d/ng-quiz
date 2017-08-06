/**
 * Created by Julius Alvarado on 8/5/2017.
 */

(function () {
    "use strict";

    angular.module("MyApp").controller('AuthCtrl', ["phpAuthSer",
        function (phpAuthSer) {
            let vm = this;
            vm.userEmail = "";
            vm.userPassword = "";

            vm.login = function () {
                let loginData = {
                    loginSignup: "loginSignup",
                    email: vm.userEmail,
                    password: vm.userPassword,
                    loginActive: "1"
                };
                phpAuthSer.loginSignup(loginData).then(function (res) {
                    console.log(res.data);
                });
            };

            vm.signup = function () {
                let signupData = {
                    loginSignup: "loginSignup",
                    email: vm.userEmail,
                    password: vm.userPassword,
                    loginActive: "0"
                };
                phpAuthSer.loginSignup(signupData).then((res) => {
                    console.log(res.data);
                });
            }
        }
    ]);
}());