var app=angular.module('DemoApp',['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/',{
            templateUrl:'Views/home.html',
            controller:'HomeController'
        })
        .when('/home',{
            templateUrl:'Views/home.html',
            controller:'HomeController'
        })
        .when('/about',{
            templateUrl:'Views/about.html',
            controller:'AboutController'
        })
        .when('/contact',{
            templateUrl:'Views/contact.html',
            controller:'ContactController'
        })
})
app.controller('IndexController',function ($scope) {
    $scope.indexMsg="NareshIT | Hyderabad"
})