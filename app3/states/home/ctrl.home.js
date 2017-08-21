/**
 * Created by Julius Alvarado on 8/17/2017.
 */

(function () {
    "use strict";

    angular.module('app')
        .controller('HomeCtrl', ['$mdSidenav', 'phpDataService',
            function ($mdSidenav, phpDataService) {
                let vm = this;

                // just for more data to practice on
                const fakeNamesArr = ["Julius Hernandez", "Jessica O'Kelly", "Jennifer Smith", "Joseph Garcia",
                    "Micheal Silva", "Michelle Costa", "Johnathan Gomez", "Veronica de'Leon",
                    "Kevin Jacobs", "Kelly Rhodes", "Cynthia Riley", "Charles"];

                vm.sidebarMessage = "Recent Scores";
                vm.selected = null;
                vm.searchText = "";

                phpDataService.getScores().then(function (res) {
                    vm.scores = res.data;
                    for (let i = 0; i < vm.scores.length; i++) {
                        let obj = vm.scores[i];
                        obj.name = fakeNamesArr[i];
                    }
                    vm.selected = vm.scores[0];
                });

                vm.toggleSidenav = function () {
                    $mdSidenav('left').toggle();
                };

                vm.selectUser = function (item) {
                    console.log("selected item = "+ item);
                    vm.selected = item;
                    const sidenav = $mdSidenav('left');
                    if (sidenav.isOpen()) {
                        sidenav.close();
                    }
                };
            }
        ]);
}());