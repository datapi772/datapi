var app = angular.module("HomeCtrl", []);

app.controller("HomeCtrl", function () {

    var vm = this;

    vm.slides = [
        {
            title: 'Up to 3 free trial sessions!',
            subtitle: 'Quality tutoring services for Grades 1 through 1st year undergrad.',
            class: 'tutoring-slide'
        },
        {
            title: 'Try it now for free!',
            subtitle: 'Litmaster\'s interactive exercises will help you master poetry efficiently.',
            class: 'litmaster-slide'
        },
        {
            title: 'Boostik Worksheets',
            subtitle: 'Highly specialized educational resources to enhance student learning.',
            class: 'boostik-slide'
        }
    ]
    
})