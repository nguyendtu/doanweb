mobileApp.controller('ProducerController', ['$scope', '$stateParams', 'producerService', function ($scope, $stateParams, producerService) {
    $scope.name = $stateParams.name;

    producerService.getProducerOfType().success(function (response) {
        $scope.phones = response;
    });
}]);