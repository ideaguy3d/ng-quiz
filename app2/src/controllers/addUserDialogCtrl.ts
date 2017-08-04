/**
 * Created by Julius Alvarado on 11/20/2016.
 */

///<reference path="../_all.ts"/>

module ContactManagerApp {
    export class  AddUserDialogCtrl {
        static $inject = ['$mdDialog'];
        user: CreateUser;
        avatars = ['svg-1','svg-2','svg-3','svg-4','svg-5'];

        constructor(private $mdDialog){}

        cancel(): void {
            this.$mdDialog.cancel();
        }
        save(): void {
            // pass our CreateUser model back to our MainCtrl
            this.$mdDialog.hide(this.user);
        }
    }
}

//\\