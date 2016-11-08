var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html',
            controller: 'myController'
        })

    .when('/cart', {
        templateUrl: 'partials/cart.html',
        controller: 'myController2'
    })
});
