'use strict'
eventsApp.controller('EditEventController',function($scope,eventData){
    
    $scope.saveEvent=function(event,newEventForm){
        if(newEventForm.$valid){
            //window.alert('event'+event.name+"saved!");
            eventData.save(event)
            .$promise.then(
                
                function(response){debugger;console.log('success',response)},
                function(response){debugger;console.log('failure',response)}
            );
        }
    }
    $scope.cancelEdit=function(){
        window.location="/EventDetails.html";
    }
});