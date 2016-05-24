'use strcit'
eventsApp.controller('EventListController', function ($scope, eventData,$log) {
    $scope.events=eventData.getAllEvents();
});