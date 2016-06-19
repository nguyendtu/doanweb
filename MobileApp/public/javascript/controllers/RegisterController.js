mobileApp.controller('RegisterController', function ($scope) {
    $scope.user = {};
    $scope.userCheck = {};
    $scope.disable = false;
    $scope.captcha = '';

    $scope.drawCaptcha = function () {
        // create captcha.
        var captcha = [];
        
        var captchaLength = Math.floor(Math.random() * 2.5 + 6);

        // random captcha
        for (var i = 0; i < captchaLength; i++) {
            captcha.push(String.fromCharCode(Math.floor(Math.random() * 25 + 65)));
        }

        $scope.captcha = captcha.join(' ');
    };

    $scope.prepareCaptcha = function () {
        alert('prepared captcha');
        console.log($scope.userCheck.captcha.toLowerCase());
        console.log($scope.captcha.split(' ').join('').toLowerCase());
        if ($scope.userCheck.captcha.toLowerCase() == $scope.captcha.split(' ').join('').toLowerCase())
            $scope.disable = false;
        else {
            alert('disable');
            $scope.disable = true;
        }
    };

    $scope.register = function (user) {
        alert('submit');
        // call api save user.
    };

    // test draw captcha.
    $scope.drawCaptcha();
});