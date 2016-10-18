var app = angular.module("HomeCtrl", []);

app.controller("HomeCtrl", function(MAP_URL, $http, $window, $scope, NgMap) {

    var vm = this;
    var lastIndex = 0;
    var numLocations = 0;
    var geocoder = new google.maps.Geocoder();

    var md = $window.matchMedia("(min-width: 1300px)");
    var md2 = $window.matchMedia("(min-width: 1000px)");
    var md3 = $window.matchMedia("(min-width: 768px)");
    var md4 = $window.matchMedia("(min-width: 468px)");

    var widthChange = function() {
        if (md.matches) {
            numLocations = 4;
        } else if (md2.matches) {
            numLocations = 3;
        } else if (md3.matches) {
            numLocations = 2;
        } else {
            numLocations = 1;
        }
    }

    vm.loc = null;
    vm.mapUrl = MAP_URL;
    vm.mapCenter = "49.255859, -123.088425";
    vm.locations = [];
    vm.activeLocations = [];

    vm.slides = [{
        title: 'Up to 3 free trial sessions!',
        subtitle: 'Quality tutoring services for Grades 1 through 1st year undergrad.',
        class: 'tutoring-slide'
    }, {
        title: 'Try it now for free!',
        subtitle: 'Litmaster\'s interactive exercises will help you master poetry efficiently.',
        class: 'litmaster-slide'
    }, {
        title: 'Boostik Worksheets',
        subtitle: 'Highly specialized educational resources to enhance student learning.',
        class: 'boostik-slide'
    }];

    NgMap.getMap().then(function(map) {
        vm.map = map;
    })

    vm.showDetail = function(e, l, ind) {
        vm.loc = l;
        vm.map.showInfoWindow('datapi-info', 'datapi-' + ind);
    }

    vm.showDetailCenter = function(e, l, ind) {
        vm.loc = l;
        vm.mapCenter = l.lat + "," + l.lng;
        vm.map.showInfoWindow('datapi-info', 'datapi-' + ind);
    }

    vm.loadLocations = function() {
        $http.get('components/home/locations.json')
            .then((data) => {
                vm.locations = data.data;
                numLocations = vm.locations.length;
                for (var i = 0; i < vm.locations.length; i++) {
                    geocodeLocation(vm.locations[i]);
                }
                activateLocations();
            }, (error) => {
                console.log(error);
            })
    }

    var geocodeLocation = function(l) {
        geocoder.geocode({
            "address": l.address + " " + l.address2
        }, function(results) {
            l.lat = results[0].geometry.location.lat();
            l.lng = results[0].geometry.location.lng();
        })
    }

    var activateLocations = function() {
        md.addListener(activateLocations);
        md2.addListener(activateLocations);
        md3.addListener(activateLocations);
        md4.addListener(activateLocations);
        widthChange();
        vm.activeLocations = [];
        for (var i = 0; i < numLocations; i++) {
            vm.activeLocations.push(vm.locations[i]);
            lastIndex = i;
        }
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
        var ind = lastIndex - 3;
        if (ind >= 0) {
            vm.activeLocations.splice(0, 0, vm.locations[ind]);
            lastIndex -= 1;
        } else {
            vm.activeLocations.splice(0, 0, vm.locations[ind + vm.locations.length]);
            if (lastIndex > 0) {
                lastIndex -= 1;
            } else {
                lastIndex = vm.locations.length - 1;
            }
        }
    }

})
