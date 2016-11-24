var app = angular.module("BoostikCtrl", []);

app.controller("BoostikCtrl", function($window, $scope, $uibModal) {

    var vm = this;

    var md = $window.matchMedia("(min-width: 786px)");

    var widthChange = function() {
        if (md.matches) {
            numSlides = 3;
        } else {
            numSlides = 1;
        }
    }

    vm.activeSlides = [];
    vm.lastIndex = 0;
    var numSlides = 0;

    vm.previews = [
        'assets/img/ws1.png',
        'assets/img/ws2.png',
        'assets/img/ws3.png',
        'assets/img/ws4.png',
        'assets/img/ws5.png',
        'assets/img/ws6.png',
        'assets/img/ws7.png',
        'assets/img/ws8.png',
        'assets/img/ws9.png'
    ];

    vm.initSlides = function() {
        md.addListener(vm.initSlides);
        widthChange();
        vm.activeSlides = [];
        for (var i = 0; i < numSlides; i++) {
            vm.activeSlides.push(vm.previews[i]);
            vm.lastIndex = i;
        }
        $scope.$evalAsync();
    }

    vm.nextSlide = function() {
        vm.activeSlides.splice(0, 1);
        var ind = vm.lastIndex + 1;
        if (ind < vm.previews.length) {
            vm.activeSlides.push(vm.previews[ind]);
            vm.lastIndex += 1;
        } else {
            vm.activeSlides.push(vm.previews[0]);
            vm.lastIndex = 0;
        }
    }

    vm.prevSlide = function() {
        vm.activeSlides.splice(vm.activeSlides.length - 1, 1);
        var ind = vm.lastIndex - 3;
        if (ind >= 0) {
            vm.activeSlides.splice(0, 0, vm.previews[ind]);
            vm.lastIndex -= 1;
        } else {
            vm.activeSlides.splice(0, 0, vm.previews[ind + vm.previews.length]);
            if (vm.lastIndex > 0) {
                vm.lastIndex -= 1;
            } else {
                vm.lastIndex = vm.previews.length - 1;
            }
        }
    }

    vm.goToWorksheets = function () {
        document.getElementById('worksheets').scrollIntoView();
    }

    vm.previewModal = function (image) {
        var modal = $uibModal.open({
            templateUrl: "worksheetModal.html",
            controller: function ($scope, img) {
                $scope.img = img;
            },
            resolve: {
                img: function () {
                    return image;
                }
            }
        })
    }

    vm.scrolltoVideo = function () {
        vm.hideOverlay = !vm.hideOverlay;
        var e = document.querySelector('.video-frame');
        window.scrollTo(0, e.offsetHeight);
    }

})
