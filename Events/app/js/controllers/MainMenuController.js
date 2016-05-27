'use strict'
eventsApp.controller('MainMenuController', function ($scope, $location) {
    $scope.createEvent = function () {
        
        console.log('host',$location.host());
        //$location.replace();
        $location.url("/newEvent");
    }

});