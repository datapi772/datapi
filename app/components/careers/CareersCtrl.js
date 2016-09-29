var app = angular.module('CareersCtrl', []);

app.controller('CareersCtrl', function ($http) {

    var vm = this;

    vm.testimonials = [];

    vm.loadTestimonials = function () {
        $http.get('components/careers/testimonials.json')
        .then((data) => {
            vm.testimonials = data.data;
        }, (error) => {
            console.log(error);
        })
    }

})