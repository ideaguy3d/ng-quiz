/// <reference path="../../../typings/index.d.ts" />
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import our Angular dependencies
var angular = require("angular");
require("angular-animate");
require("angular-aria");
require("angular-material");
require("angular-messages");
require("angular-sanitize");
var start_app_component_ts_1 = require("../components/start-app/start-app.component.ts");
var users_list_component_ts_1 = require("../users/components/users-list/users-list.component.ts");
var user_details_component_ts_1 = require("../users/components/user-details/user-details.component.ts");
var users_ts_1 = require("../users/users.ts");
var MaterialStart;
(function (MaterialStart) {
    "use strict";
    // Register our module and it's dependencies
    angular.module('MaterialStart', ['ngMaterial', 'ngSanitize', users_ts_1.Users.name])
        .config(function ($mdIconProvider, $mdThemingProvider) {
        // Register the user `avatar` icons
        $mdIconProvider
            .defaultIconSet("./assets/svg/avatars.svg", 128)
            .icon("menu", "./assets/svg/menu.svg", 24)
            .icon("share", "./assets/svg/share.svg", 24)
            .icon("google_plus", "./assets/svg/google_plus.svg", 24)
            .icon("hangouts", "./assets/svg/hangouts.svg", 24)
            .icon("twitter", "./assets/svg/twitter.svg", 24)
            .icon("phone", "./assets/svg/phone.svg", 24);
        $mdThemingProvider.theme('default')
            .primaryPalette('brown')
            .accentPalette('red');
    })
        .component(start_app_component_ts_1.AppComponent.componentName, start_app_component_ts_1.AppComponent.componentConfig)
        .component(users_list_component_ts_1.UsersListComponent.componentName, users_list_component_ts_1.UsersListComponent.componentConfig)
        .component(user_details_component_ts_1.UserDetailsComponent.componentName, user_details_component_ts_1.UserDetailsComponent.componentConfig);
})(MaterialStart || (MaterialStart = {}));
//# sourceMappingURL=boot.js.map