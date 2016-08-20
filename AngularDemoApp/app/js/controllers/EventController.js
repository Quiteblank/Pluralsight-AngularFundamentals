'use strict';

eventsApp.controller('EventController',
    function EventController($scope, $log, $anchorScroll, eventData) {
        $scope.sortOrder = 'name';

        // Promise on the $resouce service output (from the EventData service)
        eventData.getEvent()
            .$promise
            .then(function (event) { $scope.event = event; console.log(event); })
            .catch(function (response) { console.log(response); });

        // Binding directly to the $resouce service from the EventData service
        //$scope.event = eventData.getEvent();

        // Returning a function from the $http call from the EventData service
        //eventData.getEventHttp()
        //    .success(function (event) { $scope.event = event; })
        //    .error(function (data, status, headers, config) {
        //        $log.warn(data, status, headers(), config);
        //    });

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        }

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        }

        $scope.scrollToSession = function () {
            $anchorScroll();
        }
    }
);