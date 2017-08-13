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
