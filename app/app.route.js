var app = angular.module("datapi");

app.config(function($routeProvider, $locationProvider, $translateProvider) {

    var _notFull = function(FULL_MODE, $location) {
        if (!FULL_MODE) {
            $location.path('/');
        }
    };

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
        templateUrl: 'components/tutoring/Tutoring.html'
    })

    .when('/apps', {
        templateUrl: 'components/apps/Apps.html'
    })

    .when('/litmaster', {
        templateUrl: 'components/litmaster/Litmaster.html',
        controller: 'LitmasterCtrl',
        controllerAs: 'vm',
        resolve: {
            "notFull": _notFull
        }
    })

    .when('/boostik', {
        templateUrl: 'components/boostik/Boostik.html',
        controller: 'BoostikCtrl',
        controllerAs: 'vm',
        resolve: {
            "notFull": _notFull
        }
    })

    .when('/hubble', {
        templateUrl: 'components/hubble/Hubble.html',
        controller: 'HubbleCtrl',
        controllerAs: 'vm',
        resolve: {
            "notFull": _notFull
        }
    })

    .when('/trak', {
        templateUrl: 'components/trak/Trak.html',
        controller: 'TrakCtrl',
        controllerAs: 'vm',
        resolve: {
            "notFull": _notFull
        }
    })

    .when('/partner', {
        templateUrl: 'components/partner/Partner.html',
        controller: 'PartnerCtrl',
        controllerAs: 'vm',
        resolve: {
            "notFull": _notFull
        }
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

    $routeProvider.otherwise({redirectTo: '/'})

    $locationProvider.html5Mode(true);

})