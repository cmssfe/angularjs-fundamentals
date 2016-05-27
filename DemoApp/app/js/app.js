'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
    .controller('MainController', function ($scope, $routeParams) {
        console.log("hello world.");
        console.log($routeParams);
    })
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/newEvent',
            {
                templateUrl: 'templates/NewEvent.html',
                controller: "EditEventController"
            })
            .when('/events', {
                templateUrl: 'templates/EventList.html',
                controller: "EventListController"
            })
            .when('/about', {
                templateUrl: 'templates/About.html',
                controller: "AboutController"
            })
            .when('/event/:eventId', {
                templateUrl: 'templates/EventDetails.html',
                // template:"<h3>Hello world.</h3>",
                controller: "EventDetailController",
                resolve:{
                    event:function($route,eventData){
                        return eventData.getEvent($route.current.pathParams.eventId).$promise;
                    }
                }
            })
            .otherwise({ redirectTo: '/events' });


        $locationProvider.html5Mode(true);
    });