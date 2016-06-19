mobileApp.controller('PhoneCRUDController', function ($scope, $rootScope, $stateParams, $state, phoneService) {
    $scope.phoneId = $stateParams.id;

    phoneService.getPhonesOfId($scope.phoneId).success(function (data) {
        $scope.phone = data;
    });

    $scope.handleUpdatePhone = function (phone) {
        phoneService.editPhone(phone).success(function (data) {
            console.log('update phone success');
        });
    };

    $scope.handleAddPhone = function (phone) {
        // $scope.$emit('add-phone-success', phone);
        
        phoneService.addNewPhone(phone).success(function (data) {
            // $scope.$broadcast('add-phone-success', { phone: phone });
            $state.go('admin.phone.list');
        });
    };
});