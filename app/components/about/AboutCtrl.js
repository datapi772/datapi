var app = angular.module("AboutCtrl", []);

app.controller("AboutCtrl", function () {

    var vm = this;

    vm.hideOverlay = false;

    vm.scrolltoVideo = function () {
        vm.hideOverlay = !vm.hideOverlay;
        var e = document.querySelector('.video-frame');
        window.scrollTo(0, e.offsetHeight-300);
    }

})