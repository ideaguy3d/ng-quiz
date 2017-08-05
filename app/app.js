/**
 * Created by Julius Alvarado on 8/4/2017.
 */
(function () {
    "use strict";
    angular.module('MyApp', ['ngMaterial'])
        .run(function () {
            console.log("zApp is ready \\^_^/");
        })
        .controller("CoreCtrl", ["$scope", "$mdDialog",
            function ($scope, $mdDialog) {
                $scope.status = "";
                $scope.showLogin = function (ev) {
                    // Appending dialog to document.body to cover sidenav in docs app
                    // Modal dialogs should fully cover application
                    // to prevent interaction outside of dialog
                    var confirm = $mdDialog.prompt()
                        .title('UserName')
                        .placeholder('username')
                        .ariaLabel('user name')
                        .targetEvent(ev)
                        .ok('login')
                        .cancel('cancel');

                    $mdDialog.show(confirm).then(function (result) {
                        $scope.status = "Welcome "+result ;
                    }, function () {
                        $scope.status = 'You didn\'t login.';
                    });
                }
            }
        ]);
}());
