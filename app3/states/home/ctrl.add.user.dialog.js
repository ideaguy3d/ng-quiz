/**
 * Created by Julius Alvarado on 8/24/2017.
 */


(function () {
    "use strict";

    function CreateUserModel(firstName, lastName, avatar, bio) {
        this.firstName = firstName ? firstName : "";
        this.lastName = lastName ? lastName : "";
        this.avatar = avatar ? avatar : "";
        this.bio = bio ? bio : "";
        this.name = this.firstName + " " + this.lastName;
        this.score = 89;

        this.setName = function () {
            this.name = this.firstName + " " + this.lastName;
        }
    }

    angular.module('app').controller('AddUserDialogCtrl', ['$mdDialog',
        function ($mdDialog) {
            const vm = this;
            vm.avatars = ["coder1", "coder2", "robot1"];
            vm.homeDialogMessage = 'This is from AddUserDialogCtrl';
            // vm.user = {};
            vm.user = new CreateUserModel();
            vm.save = function () {
                $mdDialog.hide(vm.user).then(function (res) {
                    console.log("From AddUserDialogCtrl, save response = ");
                    console.log(res);
                });
            };

            vm.cancel = function () {
                $mdDialog.cancel();
            };
        }
    ]);
}());