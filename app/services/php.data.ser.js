/**
 * Created by Julius Alvarado on 8/5/2017.
 */
(function () {
    "use strict";

    angular.module("MyApp").factory("phpDataSer", ["$http",
        function ($http) {
            const actionUrl = 'api/actions.php?';
            const apiUrl = 'api/?';
            let currentUser = {};
            let curUser = "";
            let curUserId = "";

            let loginSignup = function (data) {
                let action = `action=${encodeURIComponent(data.loginSignup)}`;
                let email = `&email=${encodeURIComponent(data.email)}`;
                let password = `&password=${encodeURIComponent(data.password)}`;
                let loginActive = `&loginActive=${encodeURIComponent(data.loginActive)}`;
                let reqUrl = actionUrl + action + email + password + loginActive
                    + curUser + curUserId;

                return $http.get(reqUrl);
            };

            let getScores = function () {
                return $http.get(apiUrl+"action=getScores&type=public");
            };

            let getScoresFromFollowing = function () {
                return $http.get(apiUrl+"action=getScores&type=isFollowing"+curUserId);
            };

            let toggleFollow = function (data) {
                let action = `action=${encodeURIComponent(data.action)}`;
                let userToFollow = `&userToFollow=${encodeURIComponent(data.user)}`;
                return $http.get(actionUrl + action + userToFollow + curUser + curUserId);
            };

            let getCurrentUser = function () {
                return currentUser;
            };

            let setCurrentUser = function (curUserInfo) {
                currentUser.username = curUserInfo.username;
                currentUser.userId = curUserInfo.userId;
                curUser = `&curUser=${encodeURIComponent(currentUser.username)}`;
                curUserId = `&curUserId=${encodeURIComponent(currentUser.userId)}`;
            };

            return {
                loginSignup: loginSignup,
                getScores: getScores,
                getScoresFromFollowing: getScoresFromFollowing,
                toggleFollow: toggleFollow,
                setCurrentUser: setCurrentUser,
                getCurrentUser: getCurrentUser
            }
        }
    ]);
}());