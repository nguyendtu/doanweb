mobileApp.factory('producerService', ['$scope', '$http', function ($scope, $http) {
    $scope.base = '/api/producer';

    // get all producer of type.
    var getProducerOfType = function (type) {
        var url = $scope.base + '/' + type;

        return $http({
            method: 'GET',
            url: url
        });
    };

    return {
        getProducerOfType: getProducerOfType
    };
}]);