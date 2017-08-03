/**
 * Created by Julius Alvarado on 11/20/2016.
 */
///<reference path="../_all.ts"/>
var ContactManagerApp;
(function (ContactManagerApp) {
    var AddUserDialogCtrl = (function () {
        function AddUserDialogCtrl($mdDialog) {
            this.$mdDialog = $mdDialog;
            this.avatars = ['svg-1', 'svg-2', 'svg-3', 'svg-4', 'svg-5'];
        }
        AddUserDialogCtrl.prototype.cancel = function () {
            this.$mdDialog.cancel();
        };
        AddUserDialogCtrl.prototype.save = function () {
            // pass our CreateUser model back to our MainCtrl
            this.$mdDialog.hide(this.user);
        };
        return AddUserDialogCtrl;
    }());
    AddUserDialogCtrl.$inject = ['$mdDialog'];
    ContactManagerApp.AddUserDialogCtrl = AddUserDialogCtrl;
})(ContactManagerApp || (ContactManagerApp = {}));
//\\ 
//# sourceMappingURL=addUserDialogCtrl.js.map