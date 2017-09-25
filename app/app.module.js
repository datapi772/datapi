var app = angular.module("datapi", [
    'ngRoute', 
    'ngTouch', 
    'ngAnimate', 
    'ui.bootstrap', 
    'ngMap', 
    'pascalprecht.translate',
    /* Controllers */
    'HomeCtrl', 
    'FooterCtrl', 
    'HeaderCtrl', 
    'ContactCtrl', 
    'CareersCtrl', 
    'LitmasterCtrl', 
    'BoostikCtrl', 
    'AboutCtrl', 
    'HubbleCtrl',
    'TrakCtrl',
    'PartnerCtrl',
]);

app.constant("TODAY", new Date());
app.constant("MAP_URL", "https://maps.googleapis.com/maps/api/js?key=AIzaSyA8mvlJG0df5cnDtEKLlpzXszCOtFc5ftM");
app.constant("FULL_MODE", window.location.hostname === 'coop.datapi.com');

app.run(function($rootScope, $translate) {
    $rootScope.$on('$routeChangeSuccess', function(ev, current, prev) {
        if (current.$$route.originalPath !== '/tutoring') {
            $translate.use('en');
            $rootScope.currentLanguage = 'en';
        }
    });

    $rootScope.currentLanguage = 'en';
})

app.config(function() {
})