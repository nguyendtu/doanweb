﻿mobileApp.controller('PhoneManageController', ['$scope', 'phoneService', function ($scope, phoneService) {
    $scope.phone = {
        name: 'new phone',
        price: 12345,
        description: 'description',
        producer: 'producer',
        image: 'image url'
    };


    // call service get all phone in db
    //phoneService.getPhones().success(function (res) {
    //    $scopes.phones = res;
    //});
    
    //// save new phone in db
    //$scope.addNewPhone = function (data) {
    //    phoneService.addNewPhone(data).success(function (res) {
    //        $scope.$broadcast('added-phone-success');
    //    }).error(function (err) {
    //        $scope.$broadcast('added-phone-error');
    //    });
    //};

    // update phonne in db

    // delete phone in db
    $scope.phones = [
      {
          name: "IPHONE SE 16GB",
          made: "USA",
          manufacturers: "Nokia",
          quatity: 100,
          price: 11400900,
          description: "Dien thoai iphone se 16GB"
      },
      {
          name: "IPHONE SE 16GB",
          made: "USA",
          manufacturers: "Nokia",
          quatity: 100,
          price: 11400900,
          description: "Dien thoai iphone se 16GB"
      },
      {
          name: "IPHONE SE 16GB",
          made: "USA",
          manufacturers: "Nokia",
          quatity: 100,
          price: 11400900,
          description: "Dien thoai iphone se 16GB"
      },
      {
          name: "IPHONE SE 16GB",
          made: "USA",
          manufacturers: "Nokia",
          quatity: 100,
          price: 11400900,
          description: "Dien thoai iphone se 16GB"
      }
    ];
}]);
