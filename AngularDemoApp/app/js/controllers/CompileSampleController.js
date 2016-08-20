'use strict'

// Use the cache factory to store key/value pairs
eventsApp.controller('CompileSampleController',
    function CompileSampleController($scope, $compile) {

        $scope.appendDivToElement = function (markup) {
            return $compile(markup)($scope).appendTo(angular.element("#appendHere"));
        }

    }
);