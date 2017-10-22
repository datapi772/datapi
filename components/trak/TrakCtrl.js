var app = angular.module('TrakCtrl', []);

app.controller('TrakCtrl', function() {
    
    var vm = this;

    vm.scrolltoVideo = function () {
        vm.hideOverlay = !vm.hideOverlay;
        var e = document.querySelector('.video-frame');
        window.scrollTo(0, e.offsetHeight-110);
    }

    vm.slides = [
        {
            title: 'TRAK',
            subtitle: '',
            class: 'home-slide'
        },
        {
            subtitle: 'Manage a directory of students.',
            class: 'students-slide'
        },
        {
            subtitle: 'Generate and print client invoices.',
            class: 'invoice-slide'
        },
        {
            subtitle: 'Keep track of client payment schedules.',
            class: 'track-slide'
        }
    ]

});