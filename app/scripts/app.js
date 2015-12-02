'use strict';

/**
* @ngdoc overview
* @name zyringApp
* @description
* # zyringApp
*
* Main module of the application.
*/
angular
.module('zyringApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngTouch',
    'angular.filter',
    'uiGmapgoogle-maps'
])
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    })
    .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
    })
    .when('/:city', {
        templateUrl: 'views/city.html',
        controller: 'cityCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
}])
.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyBJAbtaqXkc6sUx8QP4zYJYVlQCmw-8-6Q',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
});
