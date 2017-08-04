/**
 * Created by Julius Alvarado on 11/16/2016.
 */
///<reference path="_all.ts"/>
var ContactManagerApp;
(function (ContactManagerApp) {
    var CreateUser = (function () {
        function CreateUser(firstName, lastName, bio, avatar) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.bio = bio;
            this.avatar = avatar;
        }
        return CreateUser;
    }());
    ContactManagerApp.CreateUser = CreateUser;
    var User = (function () {
        function User(name, avatar, bio, notes) {
            this.name = name;
            this.avatar = avatar;
            this.bio = bio;
            this.notes = notes;
        }
        User.fromCreate = function (user) {
            return new User(user.firstName + " " + user.lastName, user.avatar, user.bio, []);
        };
        return User;
    }());
    ContactManagerApp.User = User;
    var Note = (function () {
        function Note(title, date) {
            this.title = title;
            this.date = date;
        }
        return Note;
    }());
    ContactManagerApp.Note = Note;
})(ContactManagerApp || (ContactManagerApp = {}));
//\\ 
//# sourceMappingURL=models.js.map