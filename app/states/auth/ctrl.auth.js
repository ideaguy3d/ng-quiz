/**
 * Created by Julius Alvarado on 8/5/2017.
 */

(function () {
    "use strict";

    angular.module("MyApp").controller('AuthCtrl', ["phpAuthSer",
        function (phpAuthSer) {
            let vm = this;
            vm.userEmail = "";
            vm.test1 = "Ello from AuthCtrl ^_^/";
            let loginData = {
                email: vm.userEmail,
                password: "pass",
                loginActive: true
            };
            vm.login = function(){
                phpAuthSer.loginSignup(loginData).then(function(res){
                    console.log(res);
                    alert(res.data);
                });
            };
        }
    ]);
}());