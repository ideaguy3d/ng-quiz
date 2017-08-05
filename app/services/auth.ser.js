/**
 * Created by Julius Alvarado on 8/5/2017.
 */
(function () {
    "use strict";

    angular.module("MyApp").factory("phpAuthSer", ["$http",
        function ($http) {
            const actionUrl = 'api/actions.php';
            let loginSignup = function (data) {
                let action = 'loginSignup';
                return $http.get(
                    `${actionUrl}?action=${encodeURIComponent(action)}&email=${encodeURIComponent(data.email)}&password=${encodeURIComponent(data.password)}&loginActive=${encodeURIComponent(data.loginActive)}`
                );
            };
            return {
                loginSignup: loginSignup
            }
        }
    ]);
}());