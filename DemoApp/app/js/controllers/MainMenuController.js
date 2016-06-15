'use strict'
eventsApp.controller('MainMenuController', function ($scope,$rootScope,auth,$location) {
    $scope.createEvent = function () {

        console.log('host', $location.host());
        //$location.replace();
        $location.url("/newEvent");
    }

    auth.$onAuth(function (authData) {
        if (authData) {
            $rootScope.displayName=authData[authData.provider].displayName;
            $rootScope.hasLogged=true;
        } else {
            $rootScope.displayName="";
            $rootScope.hasLogged=false;
        }
    });

});