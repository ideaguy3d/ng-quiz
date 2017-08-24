/**
 * Created by Julius Alvarado on 8/17/2017.
 */

(function () {
    "use strict";

    angular.module('app')
        .controller('HomeCtrl', ['$mdSidenav', '$mdToast', 'phpDataService',
            function ($mdSidenav, $mdToast, phpDataService) {
                let vm = this;

                // just for more data to practice on
                const fakeNamesArr = ["Julius Hernandez", "Jessica O'Kelly", "Jennifer Smith", "Joseph Garcia",
                    "Micheal Silva", "Michelle Costa", "Johnathan Gomez", "Veronica de'Leon",
                    "Kevin Jacobs", "Kelly Rhodes", "Cynthia Riley", "Charles"];

                vm.sidebarMessage = "Recent Scores";
                vm.selected = null;
                vm.searchText = "";
                vm.tabIndex = 0;

                phpDataService.getScores().then(function (res) {
                    vm.scores = res.data;
                    for (let i = 0; i < vm.scores.length; i++) {
                        let obj = vm.scores[i];
                        obj.name = fakeNamesArr[i];
                        obj.notes = [];
                    }
                    console.log(vm.scores);
                    vm.selected = vm.scores[3];
                    vm.selected.notes.push({title: "remember to run $tsc command in the same folder as the tsconfig.js file"})
                    vm.selected.notes.push({title: "learn more about ts generics and interfaces"});
                });

                vm.toggleSidenav = function () {
                    $mdSidenav('left').toggle();
                };

                vm.selectUser = function (item) {
                    console.log("selected item = " + item);
                    vm.selected = item;
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