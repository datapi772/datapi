var app = angular.module("datapi");

app.config(function($routeProvider, $locationProvider, $translateProvider) {

    $routeProvider

    .when('/', {
        templateUrl: 'components/home/Home.html',
        controller: 'HomeCtrl',
        controllerAs: 'vm'
    })

    .when('/about', {
        templateUrl: 'components/about/About.html',
        controller: 'AboutCtrl',
        controllerAs: 'vm'
    })

    .when('/careers', {
        templateUrl: 'components/careers/Careers.html',
        controller: 'CareersCtrl',
        controllerAs: 'vm'
    })

    .when('/contact', {
        templateUrl: 'components/contact/Contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'vm'
    })

    .when('/tutoring', {
        templateUrl: 'components/error/404.html'
    })

    .when('/litmaster', {
        templateUrl: 'components/litmaster/Litmaster.html',
        controller: 'LitmasterCtrl',
        controllerAs: 'vm'
    })

    .when('/boostik', {
        templateUrl: 'components/boostik/Boostik.html',
        controller: 'BoostikCtrl',
        controllerAs: 'vm'
    })

    .when('/404', {
        templateUrl: 'components/error/404.html'
    });

    $translateProvider.useStaticFilesLoader({
        prefix: "assets/languages/locale-",
        suffix: ".json"
    })

    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('escape');

    $routeProvider.otherwise({redirectTo: '/404'})

    $locationProvider.html5Mode(true);

})