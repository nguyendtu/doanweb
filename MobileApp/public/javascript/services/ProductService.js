mobileApp.factory("phoneService", ['$http', function ($http) {
    var base = 'api/phone';

    // get lasted phone.
    var getLastedPhone = function(){
        var url = base + '/lasted/10';

        return $http({
            method: 'GET',
            url: "http://localhost:3000/phones"
        });
        
    };

    // get best selling phone.
    var getBestSellingPhone = function () {
        var url = base + '/best-selling/10';

        return $http({
            method: 'GET',
            url: url
        }).then(function (response) {
            console.log(response);
        });
    };

    // get best ordering phone.
    var getBestOrderingPhone = function () {
        var url = base + '/best-ordering/10';

        return $http({
            method: 'GET',
            url: url
        });
    };
    
    // get all phone.
    var getPhones = function () {
        return $http({
            method: 'GET',
            url: base
        })
    };

    // save new phone.
    var addNewPhone = function (data) {
        return $http({
            method: 'POST',
            url: base,
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(data)
        })
    };

    return {
        getPhones: getPhones,
        getLastedPhone: getLastedPhone,
        getBestSellingPhone: getBestSellingPhone,
        getBestOrderingPhone: getBestOrderingPhone,
        addNewPhone: addNewPhone
    };
}]);