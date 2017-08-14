/**
 * Created by Julius Alvarado on 8/6/2017.
 */
(function () {
    "use strict";

    angular.module("MyApp").controller('HomePageCtrl', ['phpDataSer',
        function (phpDataSer) {
            const vm = this;
            vm.search = '';

            vm.searchFor = function () {

            };
            vm.writeComment = function () {

            };
            vm.followUser = function (uid) {
                let data = {
                    action: "toggleFollow",
                    user: uid
                };
                phpDataSer.toggleFollow(data).then((res) => {
                    console.log(res.data);
                });
            };

            phpDataSer.getScores().then(function (res) {
                // console.log(res.data);
                vm.scores = res.data;
            });
        }
    ]);
}());