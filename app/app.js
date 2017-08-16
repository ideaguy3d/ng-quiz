/**
 * Created by Julius Alvarado on 8/4/2017.
 */
(function () {
    "use strict";
    angular.module('MyApp', ['ngMaterial', 'ui.router'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: './states/home/view.home.html',
                    controller: 'HomePageCtrl',
                    controllerAs: 'homePage'
                })
                .state('quiz', {
                    url: '/quiz',
                    templateUrl: './states/quiz/view.quiz.html',
                })
                .state('timeline', {
                    url: '/timeline',
                    templateUrl: './states/timeline/view.timeline.html',
                    controller: 'TimelineCtrl',
                    controllerAs: 'timeline',
                    resolve: {
                        userIsLoggedIn: function (phpDataSer, $state, $q) {
                            let prom = $q.defer();

                            prom.notify("def.notify...");

                            prom.resolve(function(){
                                if (!phpDataSer.getCurrentUser().username) {
                                    $state.go("home");
                                    return -1;
                                }
                            });

                            prom.reject(function(){
                                return 1;
                            })

                            return prom.promise;
                        }
                    }
                })
                .state('login', {
                    url: '/login',
                    templateUrl: './states/auth/view.login.html',
                    controller: 'AuthCtrl',
                    controllerAs: 'auth'
                })
                .state('signup', {
                    url: '/signup',
                    templateUrl: './states/auth/view.signup.html',
                    controller: 'AuthCtrl',
                    controllerAs: 'auth'
                });
            $urlRouterProvider.otherwise('home');
        });
}());
