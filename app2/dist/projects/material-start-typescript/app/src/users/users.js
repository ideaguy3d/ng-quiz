"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Load the TypeScript UsersService
var users_data_service_ts_1 = require("./services/users-data.service.ts");
// Define the Angular 'Users' module
var Users;
(function (Users) {
    Users.name = 'Users';
    angular
        .module(Users.name, ['ngMaterial'])
        .service("UsersDataService", users_data_service_ts_1.UsersDataService);
})(Users = exports.Users || (exports.Users = {}));
//# sourceMappingURL=users.js.map