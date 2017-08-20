/**
 * Created by Julius Alvarado on 8/17/2017.
 */

(function () {
    "use strict";

    angular.module('app')
        .controller('HomeCtrl', ['$mdSidenav', 'phpDataService',
            function ($mdSidenav, phpDataService) {
                let vm = this;
                vm.message = "Highest Scores";
                vm.selected = null;

                phpDataService.getScores().then(function (res) {
                    vm.scores = res.data;
                    vm.selected = vm.scores[0].userid;
                });

                vm.toggleSidenav = function () {
                    $mdSidenav('left').toggle();
                };

                vm.selectUser = function (uid) {
                    vm.selected = uid;
                    console.log("vm.selected = " + vm.selected);
                    const sidenav = $mdSidenav('left');
                    if(sidenav.isOpen()) {
                        sidenav.close();
                    }
                };
            }
        ]);
}());