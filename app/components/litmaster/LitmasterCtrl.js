var app = angular.module("LitmasterCtrl", []);

app.controller("LitmasterCtrl", function ($http) {

    var vm = this;

    vm.students = [];

    vm.loadTestimonials = function () {
        $http.get('components/litmaster/testimonials.json')
        .then((data) => {
            vm.students = data.data;
        }, (error) => {
            console.log(error);
        })
    }

})