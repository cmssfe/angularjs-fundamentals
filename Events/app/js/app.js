'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource','ngRoute'])
    .controller('MainController', function ($scope, $routeParams) {
        console.log("hello world.");
        console.log($routeParams);
    })
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/newEvent',
            {
                templateUrl:'templates/NewEvent.html',
                controller:"EditEventController"
            })
        // $locationProvider.html5Mode(true);
    });