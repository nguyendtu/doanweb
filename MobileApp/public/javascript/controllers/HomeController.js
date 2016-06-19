mobileApp.controller("HomeController", ['$scope', '$state', '$http', 'phoneService', function ($scope, $state, $http, phoneService) {

    $scope.$broadcast("$stateChangeStart");

    //phoneService.getLastedPhone().success(function (res) {
    //    $scope.test = res;
    //    console.log($scope.test);
    //});

    //$http({
    //    method: 'GET',
    //    url: 'http://localhost:3000/phones'
    //}).then(function successCallback(response) {
    //    $scope.test = response.data;
    //}, function errorCallback(response) {
        
    //    console.log(response);
    //});

    $scope.payment = function () {
        $state.go('payment');
    };

    $scope.phones = [
        {
            name: "IPHONE SE 16GB",
            image: "/public/images/IPHONE_SE_16GB.jpg",
            price: 11400900,
            description: "Dien thoai iphone se 16GB"
        },
        {
            name: "IPHONE SE 16GB",
            image: "/public/images/IPHONE_SE_16GB.jpg",
            price: 11400900,
            description: "Dien thoai iphone se 16GB"
        },
        {
            name: "IPHONE SE 16GB",
            image: "/public/images/IPHONE_SE_16GB.jpg",
            price: 11400900,
            description: "Dien thoai iphone se 16GB"
        },
        {
            name: "IPHONE SE 16GB",
            image: "/public/images/IPHONE_SE_16GB.jpg",
            price: 11400900,
            description: "Dien thoai iphone se 16GB"
        }
    ];

    //$http({
    //    method: 'GET',
    //    url: '/api/test/5'
    //}).then(function successCallback(response) {
    //    console.log(response.data.Name);
    //}, function errorCallback(response) {
    //    console.log(response);
    //});

}]);