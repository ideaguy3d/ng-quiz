/**
 * Created by Julius Alvarado on 8/5/2017.
 */
(function () {
    "use strict";

    angular.module("MyApp").factory("phpDataSer", ["$http",
        function ($http) {
            const actionUrl = 'api/actions.php?';

            let loginSignup = function (data) {
                let action = `action=${encodeURIComponent(data.loginSignup)}`;
                let email = `&email=${encodeURIComponent(data.email)}`;
                let password = `&password=${encodeURIComponent(data.password)}`;
                let loginActive = `&loginActive=${encodeURIComponent(data.loginActive)}`;
                return $http.get(actionUrl + action + email + password + loginActive);
            };

            let getScores = function () {
                return $http.get("api/?action=getScores&type=public");
            };

            let toggleFollow = function (data) {
                let action = `action=${encodeURIComponent(data.action)}`;
                let userToFollow = `&userToFollow=${encodeURIComponent(data.user)}`;
                let curUser = `&curUser=${encodeURIComponent(currentUser.username)}`;
                let curUserId = `&curUser=${encodeURIComponent(currentUser.userId)}`;
                return $http.get(actionUrl + action + userToFollow + curUser + curUserId);
            };

            let currentUser = {};
            let getCurrentUser = function () {
                return currentUser;
            };

            let setCurrentUser = function (curUserInfo) {
                console.log("setCurrentUser() invoked.");
                currentUser.username = curUserInfo.username;
                currentUser.userId = curUserInfo.userId;
            };
            return {
                loginSignup: loginSignup,
                getScores: getScores,
                toggleFollow: toggleFollow,
                setCurrentUser: setCurrentUser,
                getCurrentUser: getCurrentUser
            }
        }
    ]);
}());