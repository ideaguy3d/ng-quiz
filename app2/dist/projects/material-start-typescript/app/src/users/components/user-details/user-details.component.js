"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * User Details Component
 *
 * Contains functionality related to contacting (or sharing with) users.
 *
 * @constructor
 * @ngInject
 */
var UserDetailsComponent = (function () {
    function UserDetailsComponent($sce, $mdSidenav, $mdDialog, $mdBottomSheet) {
        this.$sce = $sce;
        this.$mdSidenav = $mdSidenav;
        this.$mdDialog = $mdDialog;
        this.$mdBottomSheet = $mdBottomSheet;
    }
    /**
     * Presents the user with a UI to share with the selected user.
     *
     * The current implementation uses a $mdBottomSheet to accomplish this.
     */
    UserDetailsComponent.prototype.share = function ($event) {
        var _this = this;
        var self = this;
        var config = {
            parent: angular.element(document.getElementById('content')),
            templateUrl: 'src/users/components/user-details/user-contact-sheet.html',
            controller: UserSheetController,
            controllerAs: "$ctrl",
            bindToController: true,
            targetEvent: $event
        };
        this.$mdBottomSheet.show(config).then(function (clickedItem) {
            // Use a fancy TypeScript template string with interpolation
            var html = "<p>You contacted " + self.selected.name + " via " + clickedItem.name + "!</p>";
            // Setup our Alert dialog config object
            var alert = _this.$mdDialog.alert()
                .title('Sharing Success')
                .htmlContent(_this.$sce.trustAsHtml(html))
                .ok('Sweet!');
            // Show the alert
            _this.$mdDialog.show(alert);
        });
        /**
         * Bottom Sheet controller for the Avatar Actions
         */
        function UserSheetController() {
            this.user = self.selected;
            this.items = [
                { name: 'Phone', icon: 'phone', icon_url: 'assets/svg/phone.svg' },
                { name: 'Twitter', icon: 'twitter', icon_url: 'assets/svg/twitter.svg' },
                { name: 'Google+', icon: 'google_plus', icon_url: 'assets/svg/google_plus.svg' },
                { name: 'Hangout', icon: 'hangouts', icon_url: 'assets/svg/hangouts.svg' }
            ];
            this.performAction = function (action) {
                self.$mdBottomSheet.hide(action);
            };
        }
    };
    return UserDetailsComponent;
}());
// Define our user-details component's name
UserDetailsComponent.componentName = "msUserDetails";
// Define our user-details component's component config
UserDetailsComponent.componentConfig = {
    bindings: {
        selected: '<'
    },
    controller: UserDetailsComponent,
    templateUrl: 'src/users/components/user-details/user-details.component.html'
};
exports.UserDetailsComponent = UserDetailsComponent;
//# sourceMappingURL=user-details.component.js.map