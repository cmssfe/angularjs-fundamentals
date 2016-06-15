'use strict'
eventsApp.controller('EditEventController',function($scope,$firebaseArray,fbRef,$location){
    
    $scope.saveEvent=function(event,newEventForm){
        if(newEventForm.$valid){
            //window.alert('event'+event.name+"saved!");

            // eventData.save(event)
            // .$promise.then(
                
            //     function(response){debugger;console.log('success',response)},
            //     function(response){debugger;console.log('failure',response)}
            // );
           $firebaseArray(fbRef.getEvents()).$add(event);
           $location.path("/events");
        }
    }
    $scope.cancelEdit=function(){
        window.location="/events";
    }
});