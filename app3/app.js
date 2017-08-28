/**
 * Created by Julius Alvarado on 8/17/2017.
 */

(function () {
    "use strict";

    angular.module('app', ['ui.router', 'ngMdIcons', 'ngMessages', 'ngMaterial'])
        .config(function($mdThemingProvider, $mdIconProvider){
            $mdThemingProvider.theme('default')
                .primaryPalette('blue')
                .accentPalette('red');

            $mdIconProvider.icon('google_plus', './assets/svg/google_plus.svg')
                .icon('hangouts', './assets/svg/hangouts.svg', 512)
                .icon('twitter', './assets/svg/twitter.svg', 512)
                .icon('phone', './assets/svg/phone.svg', 512)
                .icon('menu', './assets/svg/menu.svg', 512);
        })
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: 'states/home/view.home.html',
                    controller: 'HomeCtrl as home'
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