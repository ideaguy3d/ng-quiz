/**
 * Created by Julius Alvarado on 8/26/2017.
 */

(function(){
    "use strict";

    angular.module('app').controller('ContactPanelCtrl',
        ['$mdBottomSheet', 'phpDataService',
        function($mdBottomSheet, phpDataService){
            const vm = this;
            vm.user = phpDataService.clickedRecentScore();
        }
    ]);
}());