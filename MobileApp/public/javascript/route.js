mobileApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: '/public/views/home/index.html',
            controller: 'HomeController'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        //.state('phone', {
        //    url: '/phone',
        //    templateUrl: '/public/views/phone/index.html'
        //})

        .state('popular', {
            url: '/popular/:type',
            templateUrl: '/public/views/phone/index.html'
        })

        .state('producer', {
            url: '/producer',
            templateUrl: '/public/views/producer/index.html'
        })

        .state('details', {
            url: '/details',
            templateUrl: '/public/views/phone/details.html',
            controller: 'HomeController'
        })

        .state('login', {
            url: '/login',
            templateUrl: '/public/views/account/login.html'
        })

        .state('register', {
            url: '/register',
            templateUrl: '/public/views/account/register.html'
        })

        .state('admin', {
            url: '/admin',
            templateUrl: '/public/views/admin/index.html'
        })

        .state('admin.phone', {
            url: '/phone',
            templateUrl: '/public/views/phone/index.html',
            controller: 'PhoneManageController'
        })

        .state('admin.phone-type', {
            url: '/phone-type',
            templateUrl: '/public/views/admin/phone-type.html'
        })

        .state('admin.producer', {
            url: '/producer',
            templateUrl: '/public/views/admin/producer.html'
        })

        .state('admin.account', {
            url: '/account',
            templateUrl: '/public/views/admin/account.html'
        })

        .state('admin.order', {
            url: '/order',
            templateUrl: '/public/views/admin/order.html'
        });

        //.state('admin', {
        //    url: '/admin',
        //    templateUrl: 'public/views/admin/index.html'
        //});
    $locationProvider.html5Mode(true);
});