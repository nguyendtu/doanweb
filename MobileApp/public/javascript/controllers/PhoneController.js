mobileApp.controller('PhoneController', ['$scope', '$stateParams', 'phoneService', function ($scope, $stateParams, phoneService) {
    $scope.type = $stateParams.type;

    //phoneService.getPhonesOfType($scope.type).success(function (response) {
    //    $scope.phones = response;
    //});

    // get phone of type show
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
}]);