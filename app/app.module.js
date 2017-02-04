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
]);

app.constant("TODAY", new Date());
app.constant("MAP_URL", "https://maps.googleapis.com/maps/api/js?key=AIzaSyA8mvlJG0df5cnDtEKLlpzXszCOtFc5ftM");

app.run(function() {
})

app.config(function() {
})