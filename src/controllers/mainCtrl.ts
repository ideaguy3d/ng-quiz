/**
 * Created by Julius Alvarado on 11/16/2016.
 */

///<reference path="../_all.ts"/>

module ContactManagerApp {
    export class MainCtrl {
        //this is for when I minify the code
        static $inject = ['userService', '$mdSidenav', '$mdToast', '$mdDialog',
            '$mdMedia', '$mdBottomSheet'];

        constructor(private userService: IUserService,
                    private $mdSidenav: angular.material.ISidenavService,
                    private $mdToast: angular.material.IToastService,
                    private $mdDialog: angular.material.IDialogService,
                    private $mdMedia: angular.material.IMedia,
                    private $mdBottomSheet: angular.material.IBottomSheetService) {
            // simulate pulling user data from a backend.
            const self = this;

            this.userService.loadAllUsers()
                .then((users: User[]) => {
                        self.users = users;
                        self.selected = users[0];
                        self.userService.selectedUser = self.selected;
                        console.log(self.users);
                    }
                );
        }

        tabIndex: number = 0;
        searchText: string = "";
        users: User[] = [];
        selected: User = null;
        newNote: Note = new Note('', null);

        toggleSideNav(): void {
            this.$mdSidenav('left').toggle();
        }

        selectUser(user: User): void {
            this.selected = user;
            this.userService.selectedUser = user;

            //'left' is the id of the ng side nav element
            const sidenav = this.$mdSidenav('left');
            if (sidenav.isOpen()) sidenav.close();
            this.tabIndex = 0;
        }

        showContactOptions($event) {
            this.$mdBottomSheet.show({
                parent: angular.element(document.getElementById('wrapper')),
                templateUrl: './dist/view/contactSheet.html',
                controller: ContactPanelCtrl,
                controllerAs: "cp"
            }).then((clickedItem) => {
                //check that clickedItem is defined then log to the console
                clickedItem && console.log(clickedItem.name + " click!");
            });
        }

        /* This is an extremely important method,
         this is where we introduce a new ctrl */
        addUser($event): void {
            /* keep the reference to this view model since we are going to be
             * using callback functions */
            var self = this;
            var useFullScreen = (this.$mdMedia('sm') || this.$mdMedia('xs'));
            this.$mdDialog.show({
                templateUrl: './dist/view/newUserDialog.html',
                parent: angular.element(document.body),
                targetEvent: $event,
                controller: AddUserDialogCtrl,
                controllerAs: 'ctrl',
                clickOutsideToClose: true,
                fullscreen: useFullScreen
            }).then((user: CreateUser) => {
                    var newUser: User = User.fromCreate(user);
                    self.users.push(newUser);
                    self.selectUser(newUser);
                    self.openToast("User Added \\^_^/")
                }, () => {
                    console.log("You pressed cancel.");
                }
            );
        }

        clearNotes($event) {
            var confirm = this.$mdDialog.confirm().title('Are you sure?')
                .textContent('Can\'t undo action').targetEvent($event)
                .ok('Okay').cancel('No');

            //store a reference to the view model so:
            var self = this;
            this.$mdDialog.show(confirm).then(() => {
                // the user has selected ok
                self.selected.notes = [];
                self.openToast('Cleared notes');
            });
        }

        formScope: any;

        setFormScope(scope) {
            this.formScope = scope;
        }

        addNote() {
            this.selected.notes.push(this.newNote);
            //reset the form with a new model
            this.formScope.noteForm.$setPristine();
            this.formScope.noteForm.$setUntouched();

            this.newNote = new Note('', null);
            this.openToast("Note added.")
        }

        removeNote(note: Note): void {
            let foundIndex = this.selected.notes.indexOf(note);
            this.selected.notes.splice(foundIndex, 1);
            this.openToast("Note now removed...");
        }

        openToast(message: string): void {
            this.$mdToast.show(this.$mdToast.simple()
                .textContent(message).position('top right').hideDelay(2500));
        }
    }
}

//\\