mobileApp.controller('PhoneController', ['$scope', '$stateParams', 'phoneService', function ($scope, $stateParams, phoneService) {
    $scope.type = $stateParams.type;

    phoneService.getPhonesOfType($scope.type).success(function (response) {
        $scope.phones = response;
    });
}]);