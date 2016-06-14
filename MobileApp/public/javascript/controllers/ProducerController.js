mobileApp.controller('ProducerController', ['$scope', '$stateParams', 'producerService', function ($scope, $stateParams, producerService) {
    $scope.type = $stateParams.type;
    //producerService.getProducerOfType().success(function (response) {
    //    $scope.phones = response;
    //});
    // get producer and show
    $scope.producers = [
      {
          code: "NSX001",
          name: "Nhà Sản Xuất A",
          phone: "0994818193",
          email: "hnhungvt13@gmail.com",
          address: "Thu Duc - Binh Thanh"
      },
      {
          code: "NSX001",
          name: "Nhà Sản Xuất A",
          phone: "0994818193",
          email: "hnhungvt13@gmail.com",
          address: "Thu Duc - Binh Thanh"
      },
      {
          code: "NSX001",
          name: "Nhà Sản Xuất A",
          phone: "0994818193",
          email: "hnhungvt13@gmail.com",
          address: "Thu Duc - Binh Thanh"
      },
      {
          code: "NSX001",
          name: "Nhà Sản Xuất A",
          phone: "0994818193",
          email: "hnhungvt13@gmail.com",
          address: "Thu Duc - Binh Thanh"
      }
    ];
}]);