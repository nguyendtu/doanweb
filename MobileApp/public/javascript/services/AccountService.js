mobileApp.factory('accountService', function ($http) {
    var base = 'api/user';

    var registerUser = function (user) {
        return $http({
            url: base,
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            data: JSON.stringify(user)
        });
    };

    return {

    };
});