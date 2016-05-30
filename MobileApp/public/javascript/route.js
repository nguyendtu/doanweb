mobileApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'public/views/home/index.html',
            controller: 'HomeController'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('phone', {
            url: '/phone',
            templateUrl: 'public/views/phone/index.html'
        })

        .state('producer', {
            url: '/producer',
            templateUrl: 'public/views/producer/index.html'
        })

        .state('login', {
            url: '/login',
            templateUrl: 'public/views/account/login.html'
        })

        .state('register', {
            url: '/register',
            templateUrl: 'public/views/account/register.html'
        })

        .state('admin', {
            url: '/admin',
            templateUrl: 'public/admin.html'
        });

        //.state('admin', {
        //    url: '/admin',
        //    templateUrl: 'public/views/admin/index.html'
        //});

});