/**
 * Created by Julius Alvarado on 11/16/2016.
 */
///<reference path="../_all.ts"/>
var ContactManagerApp;
(function (ContactManagerApp) {
    var MainCtrl = (function () {
        function MainCtrl(userService, $mdSidenav, $mdToast, $mdDialog, $mdMedia, $mdBottomSheet) {
            this.userService = userService;
            this.$mdSidenav = $mdSidenav;
            this.$mdToast = $mdToast;
            this.$mdDialog = $mdDialog;
            this.$mdMedia = $mdMedia;
            this.$mdBottomSheet = $mdBottomSheet;
            this.tabIndex = 0;
            this.searchText = "";
            this.users = [];
            this.selected = null;
            this.newNote = new ContactManagerApp.Note('', null);
            // simulate pulling user data from a backend.
            var self = this;
            this.userService.loadAllUsers()
                .then(function (users) {
                self.users = users;
                self.selected = users[0];
                self.userService.selectedUser = self.selected;
                console.log(self.users);
            });
        }
        MainCtrl.prototype.toggleSideNav = function () {
            this.$mdSidenav('left').toggle();
        };
        MainCtrl.prototype.selectUser = function (user) {
            this.selected = user;
            this.userService.selectedUser = user;
            //'left' is the id of the ng side nav element
            var sidenav = this.$mdSidenav('left');
            if (sidenav.isOpen())
                sidenav.close();
            this.tabIndex = 0;
        };
        MainCtrl.prototype.showContactOptions = function ($event) {
            this.$mdBottomSheet.show({
                parent: angular.element(document.getElementById('wrapper')),
                templateUrl: './dist/view/contactSheet.html',
                controller: ContactManagerApp.ContactPanelCtrl,
                controllerAs: "cp"
            }).then(function (clickedItem) {
                //check that clickedItem is defined then log to the console
                clickedItem && console.log(clickedItem.name + " click!");
            });
        };
        /* This is an extremely important method,
         this is where we introduce a new ctrl */
        MainCtrl.prototype.addUser = function ($event) {
            /* keep the reference to this view model since we are going to be
             * using callback functions */
            var self = this;
            var useFullScreen = (this.$mdMedia('sm') || this.$mdMedia('xs'));
            this.$mdDialog.show({
                templateUrl: './dist/view/newUserDialog.html',
                parent: angular.element(document.body),
                targetEvent: $event,
                controller: ContactManagerApp.AddUserDialogCtrl,
                controllerAs: 'ctrl',
                clickOutsideToClose: true,
                fullscreen: useFullScreen
            }).then(function (user) {
                var newUser = ContactManagerApp.User.fromCreate(user);
                self.users.push(newUser);
                self.selectUser(newUser);
                self.openToast("User Added \\^_^/");
            }, function () {
                console.log("You pressed cancel.");
            });
        };
        MainCtrl.prototype.clearNotes = function ($event) {
            var confirm = this.$mdDialog.confirm().title('Are you sure?')
                .textContent('Can\'t undo action').targetEvent($event)
                .ok('Okay').cancel('No');
            //store a reference to the view model so:
            var self = this;
            this.$mdDialog.show(confirm).then(function () {
                // the user has selected ok
                self.selected.notes = [];
                self.openToast('Cleared notes');
            });
        };
        MainCtrl.prototype.setFormScope = function (scope) {
            this.formScope = scope;
        };
        MainCtrl.prototype.addNote = function () {
            this.selected.notes.push(this.newNote);
            //reset the form with a new model
            this.formScope.noteForm.$setPristine();
            this.formScope.noteForm.$setUntouched();
            this.newNote = new ContactManagerApp.Note('', null);
            this.openToast("Note added.");
        };
        MainCtrl.prototype.removeNote = function (note) {
            var foundIndex = this.selected.notes.indexOf(note);
            this.selected.notes.splice(foundIndex, 1);
            this.openToast("Note now removed...");
        };
        MainCtrl.prototype.openToast = function (message) {
            this.$mdToast.show(this.$mdToast.simple()
                .textContent(message).position('top right').hideDelay(2500));
        };
        return MainCtrl;
    }());
    //this is for when I minify the code
    MainCtrl.$inject = ['userService', '$mdSidenav', '$mdToast', '$mdDialog',
        '$mdMedia', '$mdBottomSheet'];
    ContactManagerApp.MainCtrl = MainCtrl;
})(ContactManagerApp || (ContactManagerApp = {}));
//\\ 
//# sourceMappingURL=mainCtrl.js.map