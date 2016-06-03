'use strict';

eventsApp.directive('greeting',function(){
    return {
        restrict:"E",
        replace:true,
        transclude:true,
        // priority:1,
        template:"<div><button class='btn' ng-click='sayHello()'>Say Hello</button><div ng-transclude=''></div></div>",
        controller:'GreetingController'
    }
})
    .directive('finnish',function(){
        return {
            restrict:'A',
            // priority:1,
            require:'^greeting',
            link:function(scope,element,attrs,controller){
                controller.addGreeting('world.')
            }
        }
    }).directive('hindi',function(){
    return {
        restrict:"A",
        require:'^greeting',
        // priority:2,
        link:function(scope,element,attrs,controller){
            controller.addGreeting('india worlds.')
        }

    }
});

eventsApp.controller('GreetingController',function($scope){
    var greetings=['hello'];
    $scope.sayHello=function(){
        alert(greetings.join());
    }
    this.addGreeting=function(greeting){
        greetings.push(greeting);
    }
});