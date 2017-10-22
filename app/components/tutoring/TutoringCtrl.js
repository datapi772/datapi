var app = angular.module("TutoringCtrl", []);

app.controller("TutoringCtrl", function ($rootScope) {

    var vm = this;

    vm.hideOverlay = false;

    vm.videoSrc = function() {
        var src = "https://www.youtube.com/embed/ZgQ2ib7iUE4";
        switch($rootScope.currentLanguage) {
            case 'zh':
                src = "https://www.youtube.com/embed/zHq4xDhFUtI";
                break;
            case 'vi':
                src = "https://www.youtube.com/embed/D_Oy4PVeorw";
        }
        return src + "?autoplay=1";
    }

    vm.scrolltoVideo = function () {
        vm.hideOverlay = !vm.hideOverlay;
        var e = document.querySelector('.video-frame');
        window.scrollTo(0, e.offsetHeight-300);
    }

})

.filter('trustAsResourceUrl', ['$sce', function($sce) {
    return function(val) {
        return $sce.trustAsResourceUrl(val);
    };
}])