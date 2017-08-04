"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @ngInject
 */
var AppComponent = (function () {
    // Define our constructor and inject the necessary services
    function AppComponent($mdSidenav, UsersDataService) {
        var _this = this;
        // Store all of our injectables
        this.$mdSidenav = $mdSidenav;
        this.UsersDataService = UsersDataService;
        // Load our users and store them to a variable
        UsersDataService.loadAllUsers().then(function (users) {
            _this.users = users;
            _this.selected = users[0];
        });
    }
    /**
     * Hide or Show the 'left' sideNav area.
     */
    AppComponent.prototype.toggleUsersList = function () {
        this.$mdSidenav('left').toggle();
    };
    /**
     * Select the current user and closes the users list.
     *
     * @param user The user to be selected.
     */
    AppComponent.prototype.selectUser = function (user) {
        // Set our selected user
        this.selected = angular.isNumber(user) ? this.users[user] : user;
        // If the users list/sidenav is open; we want to make sure to close it
        this.$mdSidenav('left').close();
    };
    return AppComponent;
}());
// Define our AppComponent's name
AppComponent.componentName = "msApp";
// Define our AppComponent's config
AppComponent.componentConfig = {
    bindings: {},
    controller: AppComponent,
    templateUrl: 'src/components/start-app/start-app.component.html'
};
exports.AppComponent = AppComponent;
//# sourceMappingURL=start-app.component.js.map