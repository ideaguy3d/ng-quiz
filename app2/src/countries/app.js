(function() {

    var app = angular.module('funwithcountries', ['ngRoute']);

    app.factory('countryService', function($http) {
        var baseUrl = 'services/';

        return {
          getCountries: function() {
              return $http.get(baseUrl + 'getCountries.php');
          },
          getStates: function(countryCode) {
              return $http.get(baseUrl + 'getStates.php?countryCode=' +
                encodeURIComponent(countryCode));
          },
          addState: function(name, countryCode) {
              return $http.get(baseUrl + 'addState.php?name=' +
                encodeURIComponent(name) + '&countryCode=' +
                encodeURIComponent(countryCode));
          }
        };
    })

    app.controller('CountryController', function(countryService) {

        var that = this;

        countryService.getCountries().success(function(data) {
            that.countries = data;
        });

    });

    app.config(function($routeProvider) {
       $routeProvider.when('/states/:countryCode', {
           templateUrl: 'state-view.html',
           controller: function($routeParams, countryService) {
               this.params = $routeParams;

               var that = this;

               countryService.getStates(this.params.countryCode || "").success(function(data) {
                   that.states = data;
               })

               this.addStateTo = function() {
                   if (!this.states) {
                       this.states = [];
                   }
                   this.states.push({name: this.newState});
                   countryService.addState(this.newState, this.params.countryCode);
                   this.newState = "";
               };

           },
           controllerAs: 'stateCtrl'
       });
    });

})();
