'use strict';
eventsApp.directive('repeatX',function ($compile) {
    return {
        // link:function (scope,element,attrs,controller) {
        //     for(var i=0;i<Number(attrs.repeatX)-1;i++){
        //         element.after($compile(element.clone().attr('repeat-x',0))(scope));
        //     }
        // }
        compile:function(element,attrs){
            for(var i=0;i<Number(attrs.repeatX)-1;i++){
                element.after(element.clone().attr('repeat-x',0));
            }
            return function (scope,element,attrs,controller) {
                attrs.$observe('text',function(newValue,oldValue){
                    if(newValue==='hello world'){
                        element.css('color','red');
                    }
                })
            }
        }
    };
});