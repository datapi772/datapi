var app = angular.module("NavCtrl", []);

app.controller("NavCtrl", function (TODAY) {

    var nm = this;

    nm.today = TODAY;

})