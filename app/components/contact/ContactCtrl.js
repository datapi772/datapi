var app = angular.module("ContactCtrl", []);

app.controller("ContactCtrl", function (MAP_URL) {

    var vm = this;

    vm.mapUrl = MAP_URL;
    vm.showDirection = false;
    vm.travelMode = "DRIVING";

})