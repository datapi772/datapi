var app = angular.module("datapi");

app.config(function($routeProvider, $locationProvider) {

    $routeProvider

    .when('/', {
        templateUrl: 'components/home/Home.html',
        controller: 'HomeCtrl',
        controllerAs: 'vm'
    })

    .when('/about', {
        templateUrl: 'components/about/About.html'
    })

    .when('/careers', {
        templateUrl: 'components/careers/Careers.html'
    })

    .when('/contact', {
        templateUrl: 'components/contact/Contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'vm'
    })

    .when('/tutoring', {
        templateUrl: 'components/tutoring/Tutoring.html'
    })

    .when('/litmaster', {
        templateUrl: 'components/litmaster/Litmaster.html'
    })

    .when('/boostik', {
        templateUrl: 'components/boostik/Boostik.html'
    })

    $locationProvider.html5Mode(true);

})