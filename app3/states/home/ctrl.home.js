/**
 * Created by Julius Alvarado on 8/17/2017.
 */

(function () {
    "use strict";

    angular.module('app').controller('HomeCtrl', ['$mdSidenav', '$mdToast', '' +
        '$mdDialog', '$mdMedia', '$mdBottomSheet', 'phpDataService',
            function ($mdSidenav, $mdToast, $mdDialog, $mdMedia, $mdBottomSheet, phpDataService) {
                let vm = this;

                // just for more data to practice on
                const fakeNamesArr = ["Julius Hernandez", "Jessica O'Kelly", "Jennifer Smith", "Joseph Garcia",
                    "Micheal Silva", "Michelle Costa", "Johnathan Gomez", "Veronica de'Leon",
                    "Kevin Jacobs", "Kelly Rhodes", "Cynthia Riley", "Charles"];

                vm.sidebarMessage = "Recent Users";
                vm.selected = null;
                vm.searchText = "";
                vm.tabIndex = 0;
                vm.isSpeedDialOpen = true;
                vm.scores = []; // scores gets initialized in phpDataService.getScores().then();
                vm.selected = {}; // scores gets initialized in phpDataService.getScores().then();
                vm.newNote = {};

                phpDataService.getScores().then(function (res) {
                    vm.scores = res.data;
                    for (let i = 0; i < vm.scores.length; i++) {
                        let obj = vm.scores[i];
                        obj.name = fakeNamesArr[i];
                        obj.notes = [];
                    }
                    vm.selected = vm.scores[3];
                    vm.selected.notes.push({title: "remember to run $tsc command in the same folder as the tsconfig.js file"})
                    vm.selected.notes.push({title: "learn more about ts generics and interfaces"});
                    phpDataService.clickedRecentScore(vm.selected);
                });

                vm.addNote = function(){
                    vm.selected.notes.push(vm.newNote);
                    vm.newNote = {};
                    openToast("Note Added");
                };

                vm.addUser = function ($ev) {
                    let useFullScreen = $mdMedia('sm') || $mdMedia('xs');
                    $mdDialog.show({
                        templateUrl: 'states/home/templates/temp.new.user.dialog.html',
                        parent: angular.element(document.getElementById('j-main-container')),
                        targetEvent: $ev,
                        controller: 'AddUserDialogCtrl',
                        controllerAs: 'homeDialog',
                        clickOutsideToClose: true,
                        fullscreen: useFullScreen
                    }).then(function success(createUserType) {
                        createUserType.setName();
                        vm.scores.push(createUserType);
                        vm.selectUser(createUserType);
                        openToast('User Added');
                    }, function dismissed() {
                        console.log('Cancelled dialog');
                    });
                };

                vm.clearNotes = function ($event) {
                    let confirm = $mdDialog.confirm().title('Delete all notes?')
                        .textContent('All the notes will be deleted')
                        .targetEvent($event).ok('Yes').cancel('No');

                    $mdDialog.show(confirm).then(function () {
                        vm.selected.notes = [];
                        openToast('All Notes Cleared');
                    });
                };

                vm.showContactOptions = function($eve) {
                    phpDataService.clickedRecentScore(vm.selected);
                    $mdBottomSheet.show({
                        parent: angular.element(document.getElementById('j-main-content')),
                        templateUrl: './states/home/templates/temp.contact.sheet.html',
                        controller: 'ContactPanelCtrl',
                        controllerAs: 'contactPanel',
                        bindToController: true,
                        targetEvent: $eve
                    }).then(function(clickedItem){
                        clickedItem && console.log(clickedItem.name + ' clicked.');
                    });
                };

                vm.toggleSidenav = function () {
                    $mdSidenav('left').toggle();
                };

                vm.selectUser = function (item) {
                    vm.selected = item;
                    phpDataService.clickedRecentScore(vm.selected);
                    const sidenav = $mdSidenav('left');
                    if (sidenav.isOpen()) {
                        sidenav.close();
                    }
                    vm.tabIndex = 0;
                };

                vm.removeNote = function (note) {
                    let foundNote = vm.selected.notes.indexOf(note);
                    vm.selected.notes.splice(foundNote, 1);
                    openToast("Note Successfully removed ^_^")
                };

                function openToast(message) {
                    $mdToast.show($mdToast.simple().textContent(message).position('top left').hideDelay(3000));
                }
            }
        ]);
}());