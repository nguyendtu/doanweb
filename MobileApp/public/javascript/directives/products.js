mobileApp.directive("phone", function () {

    var controller = function ($scope, $state) {
        $scope.detail = function () {
            $state.go('details');
        };
    };

    var link = function() {
        $scope.phones = phone;

        console.log(phone);

    };


    return {
        restrict: 'E',
        templateUrl: '/public/views/main/phone/phone.html',
        scope: {
            phones: '='
        },
        link: link,
        controller: controller
    };
});