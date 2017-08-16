/**
 * Created by Julius Alvarado on 8/6/2017.
 */
(function () {
    "use strict";

    angular.module("MyApp").controller('HomePageCtrl', ['phpDataSer',
        function (phpDataSer, recheckScoresRes) {
            const vm = this;
            vm.search = '';

            phpDataSer.getScores().then(function (res) {
                console.log("homeCtrl invoked ^_^");
                console.log(res.data);
                vm.scores = res.data;
            });

            vm.searchFor = function () {

            };

            vm.writeComment = function () {

            };

            vm.followUser = function (uid) {
                let data = {
                    action: "toggleFollow",
                    user: uid
                };

                let uInfo = phpDataSer.getCurrentUser();

                if (!uInfo.username) {
                    alert("Cannot follow anyone since you're not logged in.");
                }
                else {
                    phpDataSer.toggleFollow(data)
                        .then((res) => {
                            if (res.data === "1") { // user has been un-followed
                                jQuery("button[data-userId='" + uid + "']").html("Follow");
                            }
                            else if (res.data === "2") { // user has followed
                                jQuery("button[data-userId='" + uid + "']").html("Unfollow");
                            }
                        });
                }
            };
        }
    ]);
}());