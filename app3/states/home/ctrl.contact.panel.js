/**
 * Created by Julius Alvarado on 8/26/2017.
 */

(function(){
    "use strict";

    angular.module('app').controller('ContactPanelCtrl',
        ['$mdBottomSheet', 'phpDataService',
        function($mdBottomSheet, phpDataService){
            const vm = this;
            vm.actions = [
                {name: 'Phone', icon: 'phone'},
                {name: 'Twitter', icon: 'twitter'},
                {name: 'Google+', icon: 'google_plus'},
                {name: 'Hangout', icon: 'hangouts'}
            ];
            vm.user = phpDataService.clickedRecentScore();

            vm.submitContact = function(action){
                $mdBottomSheet.hide(action);
            };
        }
    ]);
}());