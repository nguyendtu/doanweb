mobileApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: '/public/views/main/index.html',
            controller: 'HomeController'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        //.state('phone', {
        //    url: '/phone',
        //    templateUrl: '/public/views/phone/index.html'
        //})

        .state('phone', {
            url: '/phone/:type',
            templateUrl: '/public/views/main/phone/index.html',
            controller: 'PhoneController'
        })

        .state('producer', {
            url: '/producer/:name',
            templateUrl: '/public/views/main/producer/index.html',
            controller: 'ProducerController'
        })

        .state('details', {
            url: '/details',
            templateUrl: '/public/views/main/phone/details.html',
            controller: 'HomeController'
        })

        .state('login', {
            url: '/login',
            templateUrl: '/public/views/account/login.html'
        })

        .state('register', {
            url: '/register',
            templateUrl: '/public/views/account/register.html',
            controller: 'RegisterController'
        })

        .state('admin', {
            url: '/admin',
            templateUrl: '/public/views/admin/index.html',
            controller: 'AdminController',
            onEnter: function () {
                alert('a');
            }
        })

        .state('admin.phone', {
            url: '/phone',
            templateUrl: '/public/views/admin/phone/index.html',
            controller: 'PhoneManageController'
        })

        .state('admin.phone.list', {
            url: '/list',
            templateUrl: '/public/views/admin/phone/list.html',
            controller: 'PhoneManageController'
        })


        .state('admin.phone.create', {
            url: '/create',
            templateUrl: '/public/views/admin/phone/form.html',
            controller: 'PhoneCRUDController'
        })

        .state('admin.phone.edit', {
            url: '/edit/:id',
            templateUrl: '/public/views/admin/phone/form.html',
            controller: 'PhoneCRUDController'
        })

        .state('admin.phone-type', {
            url: '/phone-type',
            templateUrl: '/public/views/admin/phone-type/index.html'
        })

        .state('admin.producer', {
            url: '/producer',
            templateUrl: '/public/views/admin/producer/index.html'
        })

        .state('admin.account', {
            url: '/account',
            templateUrl: '/public/views/admin/account/index.html'
        })

        .state('admin.order', {
            url: '/order',
            templateUrl: '/public/views/admin/order/index.html'
        });

        //.state('admin', {
        //    url: '/admin',
        //    templateUrl: 'public/views/admin/index.html'
        //});
    $locationProvider.html5Mode(true);
});