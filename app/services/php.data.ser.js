/**
 * Created by Julius Alvarado on 8/5/2017.
 */
(function () {
    "use strict";

    angular.module("MyApp").factory("phpDataSer", ["$http",
        function ($http) {
            const actionUrl = 'api/actions.php';
            let loginSignup = function (data) {
                let action = `?action=${encodeURIComponent(data.loginSignup)}`;
                let email = `&email=${encodeURIComponent(data.email)}`;
                let password = `&password=${encodeURIComponent(data.password)}`;
                let loginActive = `&loginActive=${encodeURIComponent(data.loginActive)}`;
                return $http.get(actionUrl + action + email + password + loginActive);
            };

            let getScores = function () {
                return $http.get("api/?action=getScores&type=public");
            };

            return {
                loginSignup: loginSignup,
                getScores: getScores
            }
        }
    ]);
}());