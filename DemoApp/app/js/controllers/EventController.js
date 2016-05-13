'use strcit'
eventsApp.controller('EventsController', function ($scope, eventData) {
    $scope.myStyle = { 'color': "green" };

    $scope.sortOrder = "name";
    // $scope.event=eventData.event;
    eventData.getEvent(function (event) {
        $scope.event = event;
    });

    $scope.upVoteSession = function (session) {
        session.upVouteCount++;
    }
    $scope.downVoteSession = function (session) {
        session.upVouteCount--;
    }

});