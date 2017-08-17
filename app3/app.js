/**
 * Created by Julius Alvarado on 8/17/2017.
 */

(function () {
    "use strict";

    angular.module('app', ['ui.router', 'ngMdIcons', 'ngMessages', 'ngMaterial'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: 'states/home/view.home.html'
                })
                .state('about', {
                    url: '/about',
                    templateUrl: 'states/about/view.about.html'
                })
                .state('contact', {
                    url: '/contact-us',
                    templateUrl: 'states/contact/view.contact.html'
                });

            $urlRouterProvider.otherwise('home');
        });

}());