mobileApp.directive('filterBar', function () {
    var controller = function ($scope) {
        // get all producer.
        //producerService.getProducer().success(function (data) {
        //    $scope.producer = data;
        //});
        $scope.name = "test";
    };

    return {
        restrict: 'E',
        templateUrl: '/public/views/main/home/filter-bar.html',
        controller: controller
    };
});