/**
 * Created by Julius Alvarado on 8/14/2017.
 */

(function () {
    "use strict";

    angular.module("MyApp").controller('TimelineCtrl', ['phpDataSer', 'userIsLoggedIn',
        function (phpDataSer, userIsLoggedIn) {
            const vm = this;
            userIsLoggedIn();
            phpDataSer.getScoresFromFollowing().then(function(res){
                console.log(res.data);
                vm.scoresFromFollowing = res.data;
            });
        }
    ]);
}());