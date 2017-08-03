/**
 * Created by Julius Alvarado on 11/20/2016.
 */

///<reference path="../_all.ts"/>


module ContactManagerApp {
    export class ContactPanelCtrl {
        static $inject = ['userService', '$mdBottomSheet'];
        user: User;

        constructor(
            private userService: IUserService,
            private $mdBottomSheet ){
            this.user = userService.selectedUser;
        }

        actions = [
            {name: 'Phone', icon:'phone'},
            {name: 'Twitter', icon:'twitter'},
            {name: 'Google+', icon:'google_plus'},
            {name: 'Hangout', icon:'hangouts'}
        ];

        submitContact(action): void {
            this.$mdBottomSheet.hide(action);
            console.log("the submitContact() was invoked ^_^");
        }
    }
}

//\\