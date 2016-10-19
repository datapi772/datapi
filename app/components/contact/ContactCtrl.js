var app = angular.module("ContactCtrl", []);

app.controller("ContactCtrl", function(MAP_URL, $http, $window, $scope, NgMap) {

    var vm = this;
    var lastIndex = 0;
    var geocoder = new google.maps.Geocoder();

    var md = $window.matchMedia("(min-width: 1300px)");
    var md2 = $window.matchMedia("(min-width: 1000px)");
    var md3 = $window.matchMedia("(min-width: 768px)");
    var md4 = $window.matchMedia("(min-width: 468px)");

    var widthChange = function() {
        if (md.matches) {
            vm.numLocations = 4;
        } else if (md2.matches) {
            vm.numLocations = 3;
        } else if (md3.matches) {
            vm.numLocations = 2;
        } else {
            vm.numLocations = 1;
        }
    }

    vm.loc = null;
    vm.mapUrl = MAP_URL;
    vm.showDirection = false;
    vm.travelMode = "DRIVING";
    vm.mapCenter = "49.255859, -123.088425";
    vm.locations = [];
    vm.activeLocations = [];
    vm.numLocations = 0;

    NgMap.getMap('map').then(function(map) {
        vm.map = map;
    })

    vm.showDetail = function(e, l, ind) {
        vm.loc = l;
        vm.destAddr = l.address + " " + l.address2;
        vm.map.showInfoWindow('datapi-info', 'datapi-' + ind);
    }

    vm.showDetailCenter = function(e, l, ind) {
        vm.loc = l;
        vm.destAddr = l.address + " " + l.address2;
        vm.mapCenter = l.lat + "," + l.lng;
        vm.map.showInfoWindow('datapi-info', 'datapi-' + ind);
    }

    vm.loadLocations = function() {
        $http.get('components/home/locations.json')
            .then((data) => {
                vm.locations = data.data;
                vm.numLocations = vm.locations.length - 1;
                activateLocations();
            }, (error) => {
                console.log(error);
            })
    }

    var activateLocations = function() {
        md.addListener(activateLocations);
        md2.addListener(activateLocations);
        md3.addListener(activateLocations);
        md4.addListener(activateLocations);
        widthChange();
        vm.activeLocations = [];
        for (var i = 0; i < vm.numLocations; i++) {
            if (vm.locations[i]) {
                vm.activeLocations.push(vm.locations[i]);
                lastIndex = i;
            }
        }
        console.log(vm.activeLocations);
        $scope.$evalAsync();
    }

    vm.nextSlide = function() {
        vm.activeLocations.splice(0, 1);
        var ind = lastIndex + 1;
        if (ind < vm.locations.length) {
            vm.activeLocations.push(vm.locations[ind]);
            lastIndex += 1;
        } else {
            vm.activeLocations.push(vm.locations[0]);
            lastIndex = 0;
        }
    }

    vm.prevSlide = function() {
        vm.activeLocations.splice(vm.activeLocations.length - 1, 1);
        var ind = lastIndex - vm.numLocations;
        if (ind >= 0) {
            vm.activeLocations.splice(0, 0, vm.locations[ind]);
            lastIndex -= 1;
        } else {
            if (ind + vm.locations.length >= 0) {
                vm.activeLocations.splice(0, 0, vm.locations[ind + vm.locations.length]);
                if (lastIndex > 0) {
                    lastIndex -= 1;
                } else {
                    lastIndex = vm.locations.length - 1;
                }
            }
        }
    }

})
