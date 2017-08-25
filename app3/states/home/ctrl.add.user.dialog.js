/**
 * Created by Julius Alvarado on 8/24/2017.
 */


(function () {
    "use strict";

    angular.module('app').controller('AddUserDialogCtrl', ['$mdDialog',
        function ($mdDialog) {
            const vm = this;

            vm.homeDialogMessage = 'This is from AddUserDialogCtrl';

            vm.save = function () {
                $mdDialog.hide(function (res) {
                    console.log("save response = ");
                    console.log(res);
                });
            };

            vm.cancel = function () {
                $mdDialog.cancel();
            };
        }
    ]);
}());