'use strict';

eventsApp.directive('mySample',function ($compile) {
    return {
        restrict:'EA',
        template:"<input type='text' ng-model='sampleData' /><br/>{{sampleData}}<br/>",
        link:function (scope,element,attrs,controller) {
            // var markup="<input type='text' ng-model='sampleData' /><br/>{{sampleData}}<br/>";
            // angular.element(element).html($compile(markup)(scope));
        }
    }
});