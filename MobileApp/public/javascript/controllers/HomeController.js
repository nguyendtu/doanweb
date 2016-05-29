mobileApp.controller("HomeController", [ '$scope', '$http' , function ($scope, $http) {

    $scope.$broadcast("$stateChangeStart");

    $scope.test = "Hello";

    $http({
        method: 'GET',
        url: '/api/test/5'
    }).then(function successCallback(response) {
        $scope.test = response.data;
    }, function errorCallback(response) {
        $scope.test = "error";
        console.log(response);
    });

}]);