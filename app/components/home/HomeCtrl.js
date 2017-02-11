var app = angular.module("HomeCtrl", []);

app.controller("HomeCtrl", function(MAP_URL, $http, $location, $window, $scope, NgMap) {

    var vm = this;
    var lastIndex = 0;

    var geocoder = new google.maps.Geocoder();
    var md = $window.matchMedia("(min-width: 1300px)");
    var md2 = $window.matchMedia("(min-width: 1000px)");
    var md3 = $window.matchMedia("(min-width: 768px)");
    var md4 = $window.matchMedia("(min-width: 468px)");

    vm.corner = 0;
    vm.pauseInterval = false;
    $window.setInterval(() => {
        if (!vm.pauseInterval) {
            if (vm.corner >= 3) {
                vm.corner = 0;
            } else {
                vm.corner++;
            }
            $scope.$evalAsync();
        }
    }, 2000);

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
    vm.mapCenter = "49.255859, -123.088425";
    vm.locations = [];
    vm.activeLocations = [];
    vm.numLocations = 0;

    vm.slides = [{
        title: 'Up to 2 FREE trial class sessions!',
        subtitle: 'Quality tutoring services for Grades K through 1st year undergrad.',
        class: 'tutoring-slide',
        url: 'tutoring'
    }, {
        title: 'Try it now for free!',
        subtitle: 'Litmaster\'s interactive web app will help you master poetry quickly.',
        class: 'litmaster-slide',
        url: 'litmaster'
    }, {
        title: 'Experience Boostik worksheet app!',
        subtitle: 'Be well-prepped for a STEM career.',
        class: 'boostik-slide',
        url: 'boostik'
    }, {
        title: 'Access Hubble for hard-to-find comparable resources!',
        subtitle: 'Get the best notes and practices from quizzes & exams instantaneously.',
        class: 'hubble-slide',
        url: 'hubble'
    }, {
        title: 'Give your afterschool services the 21st century support!',
        subtitle: 'Automate your admin needs with TRAK.',
        class: 'trak-slide',
        url: 'trak'
    }, {
        title: 'Leverage DataPi\'s team of marketers, trains, and apps.',
        subtitle: 'DataPi accepts investments and business partners to grow its business worldwide.',
        class: 'partnership-slide',
        url: 'partner' 
    }];

    vm.goTo = function(path) {
        $location.path(path)
    }

    NgMap.getMap('home-map').then(function(map) {
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
        $http.get('../assets/locations.json')
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
