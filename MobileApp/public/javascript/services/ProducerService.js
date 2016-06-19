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

    // get all producer.
    var getProducer = function () {
        return $http({
            method: 'GET',
            url: base
        });
    };

    return {
        getProducerOfType: getProducerOfType,
        getProducer: getProducer
    };
}]);