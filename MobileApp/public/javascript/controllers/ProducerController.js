mobileApp.controller('ProducerController', ['$scope', '$stateParams', 'producerService', function ($scope, $stateParams, producerService) {
    $scope.name = $stateParams.name;
    console.log($stateParams.name);
    //producerService.getProducerOfType().success(function (response) {
    //    $scope.phones = response;
    //});
    // get producer and show
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