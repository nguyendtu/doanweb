mobileApp.factory("phoneService", ['$http', function ($http) {
    var base = '/api/phone';

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
    
    // get phone of producer.
    var getPhoneOfProducer = function (producer) {
        var url = base + '/' + producer;
        return $http({
            method: 'GET',
            url: url
        })
    };

    // get all phone.
    var getPhones = function () {
        return $http({
            method: 'GET',
            url: base
        })
    };

    // get phone type
    var getPhonesOfType = function (type) {
        var url = base + '/' + type;

        return $http({
            method: 'GET',
            url: url
        });
    };

    // get phone id.
    var getPhonesOfId = function (id) {
        var url = base + '/' + id;

        return $http({
            method: 'GET',
            url: url
        });
    }

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

    // edit phone.
    var editPhone = function (phone) {
        var url = base + '/' + phone.id;
        return $http({
            method: 'PUT',
            url: url,
            headers: {
                'content-type': 'application/json'
            },
            data: JSON.stringify(phone)
        });
    }

    // delete phone.
    var deletePhone = function (id) {
        var url = base + '/' + id;
        
        return $http({
            method: 'DELETE',
            url: url
        });
    }

    return {
        getPhones: getPhones,
        getLastedPhone: getLastedPhone,
        getBestSellingPhone: getBestSellingPhone,
        getBestOrderingPhone: getBestOrderingPhone,
        addNewPhone: addNewPhone,
        getPhonesOfType: getPhonesOfType,
        editPhone: editPhone,
        deletePhone: deletePhone
    };
}]);