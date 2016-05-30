mobileApp.factory("phoneService", ['$http', function ($http) {
    var base = 'api/phone';

    var getLastedPhone = function(){
        var url = base + '/lasted/10';

        return $http({
            method: 'GET',
            url: "http://localhost:3000/phones"
        });
        
    };

    var getBestSellingPhone = function () {
        var url = base + '/best-selling/10';

        $http({
            method: 'GET',
            url: url
        }).then(function (response) {
            console.log(response);
        });
    };

    var getBestOrderingPhone = function () {
        var url = base + '/best-ordering/10';

        $http({
            method: 'GET',
            url: url
        });
    };
    
    return {
        getLastedPhone: getLastedPhone,
        getBestSellingPhone: getBestSellingPhone,
        getBestOrderingPhone: getBestOrderingPhone
    };
}]);