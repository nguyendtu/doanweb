mobileApp.controller('PhoneManageController', ['$scope', '$state', '$stateParams', 'phoneService', function ($scope, $state, $stateParams, phoneService) {
    // call service get all phone in db
    phoneService.getPhones().success(function (res) {
        $scopes.phones = res;
    });

    // add new phone.
    $scope.addNewPhone = function () {
        $state.go('admin.phone.create');
    };

    // view phone.
    $scope.view = function (id) {
        alert('view');
    };

    // update phone.
    $scope.edit = function (index) {
        console.log(index);
        $state.go('admin.phone.edit', { id: index });
    };

    // delete phone.
    $scope.delete = function (id) {
        // confirm delete
        var dlete = confirm('Are you sure? The item will be deleted !');
        if (dlete) {
            phoneService.deletePhone(id).success(function (data) {
                alert('delete success');
            });
        }
    };
    $scope.phones = [
      {
          id: 1,
          name: "IPHONE SE 16GB",
          made: "USA",
          manufacturers: "Nokia",
          quatity: 100,
          price: 11400900,
          description: "Dien thoai iphone se 16GB"
      },
      {
          id: 1,
          name: "IPHONE SE 16GB",
          made: "USA",
          manufacturers: "Nokia",
          quatity: 300,
          price: 11400900,
          description: "Dien thoai iphone se 16GB"
      },
      {
          id: 1,
          name: "IPHONE SE 16GB",
          made: "USA",
          manufacturers: "Nokia",
          quatity: 100,
          price: 11400900,
          description: "Dien thoai iphone se 16GB"
      },
      {
          id: 1,
          name: "IPHONE SE 16GB",
          made: "USA",
          manufacturers: "Nokia",
          quatity: 300,
          price: 11400900,
          description: "Dien thoai iphone se 16GB"
      },
      {
          id: 1,
          name: "IPHONE SE 16GB",
          made: "USA",
          manufacturers: "Nokia",
          quatity: 200,
          price: 11400900,
          description: "Dien thoai iphone se 16GB"
      },
      {
          id: 1,
          name: "IPHONE SE 16GB",
          made: "USA",
          manufacturers: "Nokia",
          quatity: 200,
          price: 11400900,
          description: "Dien thoai iphone se 16GB"
      }
    ];
}]);
