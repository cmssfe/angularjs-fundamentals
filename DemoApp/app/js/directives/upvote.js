'use strict';

eventsApp.directive('upvote',function ($compile) {
    return {
        restrict:'E',
        templateUrl:"templates/upvote.html",
        scope:{
            upvote:"&",//function in parent scope
            downvote:"&",
            count:"=",
            label:"@"
        },
        link:function (scope,element,attrs,controller) {
            // var markup="<input type='text' ng-model='sampleData' /><br/>{{sampleData}}<br/>";
            // angular.element(element).html($compile(markup)(scope));
        }
    }
});