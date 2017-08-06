/**
 * Created by Julius Alvarado on 8/4/2017.
 */
(function () {
    "use strict";

    let app = angular.module('MyApp');
    app.controller("CoreCtrl", ["$scope", "$mdDialog",
        function ($scope, $mdDialog) {
            $scope.status = "";
            $scope.ccIsAuth = true;

            $scope.ccSetAuth = function (b) {
                $scope.ccIsAuth = b;
            };
            // md service for dialog
            $scope.showLogin = function (ev) {
                // Appending dialog to document.body to cover sidenav in docs app
                // Modal dialogs should fully cover application
                // to prevent interaction outside of dialog
                let confirm = $mdDialog.prompt()
                    .title('UserName')
                    .placeholder('username')
                    .ariaLabel('user name')
                    .targetEvent(ev)
                    .ok('login')
                    .cancel('cancel');

                $mdDialog.show(confirm).then(function (result) {
                    $scope.status = "Welcome " + result;
                }, function () {
                    $scope.status = 'You didn\'t login.';
                });
            }
        }
    ])
}());