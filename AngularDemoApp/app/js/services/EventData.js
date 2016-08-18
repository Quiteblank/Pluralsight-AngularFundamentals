// Didn't use a dollar sign so we don't accidentally overwrite an existing angular service
eventsApp.factory('eventData', function ($http, $resource) {
    return {
        getEventHttp: function () {
            return $http({ method: 'GET', url: '/data/event/1' });
        },
        getEvent: function () {
            // $resource(url, mapping params / default values).get(values for params)
            // Not a promise in itself, but you can call .$promise.then on the return value
            return $resource('/data/event/1', { id: '@id' }).get({ id: 1 });
        }
    };
});