'use strict';

eventsApp.directive('eventThumbnail',function ($compile) {
    return {
        restrict:'E',
        replace:true,
        templateUrl:"templates/eventThumbnail.html",
        //isolating scope
        scope:{
            event:"="
        },
        link:function (scope,element,attrs,controller) {

        }
    }
});