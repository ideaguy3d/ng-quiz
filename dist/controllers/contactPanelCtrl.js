/**
 * Created by Julius Alvarado on 11/20/2016.
 */
///<reference path="../_all.ts"/>
var ContactManagerApp;
(function (ContactManagerApp) {
    var ContactPanelCtrl = (function () {
        function ContactPanelCtrl(userService, $mdBottomSheet) {
            this.userService = userService;
            this.$mdBottomSheet = $mdBottomSheet;
            this.actions = [
                { name: 'Phone', icon: 'phone' },
                { name: 'Twitter', icon: 'twitter' },
                { name: 'Google+', icon: 'google_plus' },
                { name: 'Hangout', icon: 'hangouts' }
            ];
            this.user = userService.selectedUser;
        }
        ContactPanelCtrl.prototype.submitContact = function (action) {
            this.$mdBottomSheet.hide(action);
            console.log("the submitContact() was invoked ^_^");
        };
        return ContactPanelCtrl;
    }());
    ContactPanelCtrl.$inject = ['userService', '$mdBottomSheet'];
    ContactManagerApp.ContactPanelCtrl = ContactPanelCtrl;
})(ContactManagerApp || (ContactManagerApp = {}));
//\\ 
//# sourceMappingURL=contactPanelCtrl.js.map