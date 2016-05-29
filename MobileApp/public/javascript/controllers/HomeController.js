mobileApp.controller("HomeController", [ '$scope', '$http' , function ($scope, $http) {

    $scope.$broadcast("$stateChangeStart");

    $scope.phones = [
        {
            name: "IPHONE SE 16GB",
            image: "/public/images/IPHONE_SE_16GB.jpg",
            price: "11.400.900",
            description: "Dien thoai iphone se 16GB"
        },
        {
            name: "IPHONE SE 16GB",
            image: "/public/images/IPHONE_SE_16GB.jpg",
            price: "11.400.900",
            description: "Dien thoai iphone se 16GB"
        },
        {
            name: "IPHONE SE 16GB",
            image: "/public/images/IPHONE_SE_16GB.jpg",
            price: "11.400.900",
            description: "Dien thoai iphone se 16GB"
        },
        {
            name: "IPHONE SE 16GB",
            image: "/public/images/IPHONE_SE_16GB.jpg",
            price: "11.400.900",
            description: "Dien thoai iphone se 16GB"
        }
    ];

    //$http({
    //    method: 'GET',
    //    url: '/api/test/5'
    //}).then(function successCallback(response) {
    //    $scope.test = response.data;
    //}, function errorCallback(response) {
    //    $scope.test = "error";
    //    console.log(response);
    //});

}]);