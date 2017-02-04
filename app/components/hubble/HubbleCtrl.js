var app = angular.module('HubbleCtrl', []);

app.controller('HubbleCtrl', function() {
    
    var vm = this;

    vm.scrolltoVideo = function () {
        vm.hideOverlay = !vm.hideOverlay;
        var e = document.querySelector('.video-frame');
        window.scrollTo(0, e.offsetHeight-110);
    }

    vm.slides = [
        {
            title: 'Hubble',
            class: 'home-slide'
        },
        {
            subtitle: '',
            class: 'search-slide'
        }
    ]

})