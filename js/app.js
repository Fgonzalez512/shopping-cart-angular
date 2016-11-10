var app = angular.module('shoppingCart', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/main.html',
            controller: 'shoppingList',
            controllerAs: 'teas'
        })
        .when('/checkout', {
            templateUrl: 'partials/cart.html',
            controller: 'cart'
        })
})
