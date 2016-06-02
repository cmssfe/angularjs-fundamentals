'use strcit'
eventsApp.controller('EventDetailController', function ($scope,eventData,$routeParams, $log,$route) {
    $scope.myStyle = { 'color': "green" };

    $scope.sortOrder = "name";
    
    $scope.event=$route.current.locals.event;
    
    //$scope.event=eventData.getEvent($routeParams.eventId);
    
    // $scope.event = eventData.getEventByResource()
    //     .$promise
    //     .then(function (event) { $scope.event = event; })
    //     .catch(function (response) { console.log(response) });
    
    console.log($route.current.params.eventId);
    
    
    $scope.upVoteSession = function (session) {
        session.upVoteCount++;
    }
    $scope.downVoteSession = function (session) {
        session.upVoteCount--;
    }

});