'use strcit'
eventsApp.controller('EventsController', function ($scope, eventData,$log) {
    $scope.myStyle = { 'color': "green" };

    $scope.sortOrder = "name";
    // $scope.event=eventData.event;
    eventData.getEvent().success(function (event) {
        //$scope.event = event;
    }).error(function(data){
        $log.warn(data,status,headers(),config);
    });
    $scope.event=eventData.getEventByResource()
    .$promise
    .then(function(event){$scope.event=event;})
    .catch(function(response){console.log(response)});
    

    $scope.upVoteSession = function (session) {
        session.upVouteCount++;
    }
    $scope.downVoteSession = function (session) {
        session.upVouteCount--;
    }

});