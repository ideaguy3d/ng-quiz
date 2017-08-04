"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @ngInject
 */
var UsersListComponent = (function () {
    function UsersListComponent() {
    }
    return UsersListComponent;
}());
// Define our UsersListComponent component's name
UsersListComponent.componentName = "msUsersList";
// Define our UsersListComponent component's component config
UsersListComponent.componentConfig = {
    bindings: {
        users: '<',
        selected: '<',
        selectUser: '&onSelected'
    },
    controller: UsersListComponent,
    template: "\n      <md-list>\n        <md-list-item ng-repeat=\"user in $ctrl.users\">\n          <md-button ng-click=\"$ctrl.selectUser({user:user})\" ng-class=\"{'selected' : user === $ctrl.selected}\">\n            <md-icon md-svg-src=\"{{user.avatar}}\" class=\"avatar\"></md-icon>\n            {{user.name}}\n          </md-button>\n        </md-list-item>\n      </md-list>"
};
exports.UsersListComponent = UsersListComponent;
//# sourceMappingURL=users-list.component.js.map