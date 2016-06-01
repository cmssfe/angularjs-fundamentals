'use strict';

eventsApp.directive('eventThumbnail',function ($compile) {
    return {
        restrict:'E',
        replace:true,
        templateUrl:"templates/eventThumbnail.html",
        link:function (scope,element,attrs,controller) {

        }
    }
});