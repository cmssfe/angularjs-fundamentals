'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute', 'firebase'])
    .controller('MainController', function ($scope, $routeParams) {
        console.log("hello world.");
        console.log($routeParams);
    });
eventsApp.run(function($rootScope,$location){
    $rootScope.$on('$routeChangeError',function(e,next,prev,err) {
        if(err==='AUTH_REQUIRED'){
            $location.path('#/login');
        }
    });
});

eventsApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/newEvent',
        {
            templateUrl: 'templates/NewEvent.html',
            controller: "EditEventController"
        })
        .when('/events', {
            templateUrl: 'templates/EventList.html',
            controller: "EventListController",
            resolve:{
                events:function(fbRef,auth,$firebaseArray){
                    var query=fbRef.getEvents().orderByChild("name");
                    return $firebaseArray(query).$loaded();
                }
            }
        })
        .when('/about', {
            templateUrl: 'templates/About.html',
            controller: "AboutController"
        })
        .when('/login', {
            templateUrl: 'templates/Login.html',
            controller: "LoginController",
            resolve: {
                currentAuth: function (auth,$location) {
                    auth.$onAuth(function(authData){
                        if(authData){
                            console.log("登录成功");
                            $location.path("/events");
                        }else{
                            return auth.$waitForAuth();
                        }
                    });
                    
                }
            }
        })
        .when('/logout',{
            template:"",
            controller:"LogoutController"
        })
        .when('/sampleDirective', {
            templateUrl: 'templates/sampleDirective.html'
        })
        .when('/event/:eventId', {
            templateUrl: 'templates/EventDetails.html',
            controller: "EventDetailController",
            resolve: {
                event: function ($route, eventData) {
                    return eventData.getEvent($route.current.pathParams.eventId).$promise;
                },
                currentAuth: function (auth) {
                    return auth.$requireAuth();
                }
            }
        })
        .otherwise({ redirectTo: '/events' });


    //$locationProvider.html5Mode(true);
});