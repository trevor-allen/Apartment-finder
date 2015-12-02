'use strict';


angular
.module('zyringApp')
.factory("Content", ['$resource', function($resource) {
    return $resource("http://spidey.zyring.com/cities/:city");
}]);
