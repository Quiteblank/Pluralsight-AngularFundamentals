'use strict'

// Use the cache factory to store key/value pairs
eventsApp.controller('CacheSampleController',
    function CacheSampleController($scope, myCache) {
        $scope.addToCache = function (key, value) {
            myCache.put(key, value);
        }

        $scope.readFromCache = function (key) {
            return myCache.get(key);
        }

        $scope.getCacheStats = function () {
            return myCache.info();
        }
    }
);