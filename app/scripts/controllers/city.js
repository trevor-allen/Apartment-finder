'use strict';

/**
* @ngdoc function
* @name zyringApp.controller:AboutCtrl
* @description
* # AboutCtrl
* Controller of the zyringApp
*/
angular.module('zyringApp')
.controller('cityCtrl', ['$scope', '$routeParams', 'Content', '$rootScope',
function ($scope, $routeParams, Content, $rootScope) {

    $scope.pageTitle = $routeParams.city;
    $scope.content = Content.query({city: $routeParams.city.toLowerCase()});


    $scope.map = {
        center: {
            latitude: 40.1451,
            longitude: -99.6680
        }, zoom: 14
    };

    $scope.options = {scrollwheel: true};
    //
    // $scope.marker = {
    //     draggable: false,
    //     labelClass:'marker-label',
    //     labelAnchor:'12 60',
    //     labelContent: title,
    //     idKey: id
    // };
    $scope.markerClick = function(marker, event, markerObj) {
        alert(markerObj.id);
    };
}]);
