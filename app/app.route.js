var app = angular.module("datapi");

app.config(function($routeProvider, $locationProvider) {

    $routeProvider

    .when('/', {
        templateUrl: 'components/home/Home.html',
        controller: 'HomeCtrl',
        controllerAs: 'vm'
    })

})