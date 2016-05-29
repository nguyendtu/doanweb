mobileApp.directive("phone", function () {

    var link = function() {
        $scope.phones = phone;

        console.log(phone);

    };


    return {
        restrict: 'E',
        templateUrl: '/public/views/phone/phone.html',
        scope: {
            phones: '='
        },
        link: 'link'
    };
});