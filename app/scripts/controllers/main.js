'use strict';

/**
* @ngdoc function
* @name zyringApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the zyringApp
*/
angular.module('zyringApp')
.controller('MainCtrl', function ($scope) {
    $scope.cities = [
        {
            title: 'Seattle',
            image_url: 'images/seattle.jpg',
            desc: 'a short description of'
        },
        {
            title: 'Redmond',
            image_url: 'images/redmond.jpg',
            desc: 'a short description of'
        },
        {
            title: 'Bellevue',
            image_url: 'images/bellevue.jpg',
            desc: 'a short description of'
        },
        {
            title: 'Kirkland',
            image_url: 'images/kirkland.jpg',
            desc: 'a short description of'
        },
        {
            title: 'Tacoma',
            image_url: 'images/tacoma.jpg',
            desc: 'a short description of'
        },
        {
            title: 'Olympia',
            image_url: 'images/olympia.jpg',
            desc: 'a short description of'
        }
    ];
});
