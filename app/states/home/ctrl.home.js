/**
 * Created by Julius Alvarado on 8/6/2017.
 */
(function () {
    "use strict";

    angular.module("MyApp").controller('HomePageCtrl', ['phpDataSer',
        function (phpDataSer) {
            const vm = this;
            phpDataSer.getScores().then(function (res) {
                console.log(res.data);
                vm.scores = res.data;
            });
        }
    ]);
}());