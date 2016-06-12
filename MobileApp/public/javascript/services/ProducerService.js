mobileApp.factory('producerService', ['$http', function ($http) {
    var base = '/api/producer';
    
    // get all producer of type.
    var getProducerOfType = function (type) {
        var url = base + '/' + type;

        return $http({
            method: 'GET',
            url: url
        });
    };

    return {
        getProducerOfType: getProducerOfType
    };
}]);