var app = angular.module("datapi", ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'ngMap', 'HomeCtrl', 'NavCtrl', 'ContactCtrl', 'CareersCtrl']);

app.constant("TODAY", new Date());
app.constant("MAP_URL", "https://maps.googleapis.com/maps/api/js?key=AIzaSyA8mvlJG0df5cnDtEKLlpzXszCOtFc5ftM");

app.run(function() {
})

app.config(function() {
})