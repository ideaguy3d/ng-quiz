/**
 * Created by Julius Alvarado on 8/5/2017.
 */
(function () {
    "use strict";

    angular.module("app").factory("phpDataService", ["$http",
        function ($http) {
            const actionUrl = 'http://localhost/ng-quiz/app/api/actions.php?';
            const apiUrl = 'http://localhost/ng-quiz/app/api/?';
            let currentUser = {};
            let clickedRecentScoreObj = {};
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

            let clickedRecentScore = function(score){
                if(score) clickedRecentScoreObj = score;
                return clickedRecentScoreObj;
            };

            return {
                loginSignup: loginSignup,
                getScores: getScores,
                getScoresFromFollowing: getScoresFromFollowing,
                toggleFollow: toggleFollow,
                setCurrentUser: setCurrentUser,
                getCurrentUser: getCurrentUser,
                clickedRecentScore: clickedRecentScore
            }
        }
    ]);
}());