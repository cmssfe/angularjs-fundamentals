'use strict';

eventsApp.directive('dateKeys',function ($compile) {
    return {
        restrict:'A',
        replace:true,

        //isolating scope
        scope:{

        },
        link:function (scope,element,attrs,controller) {
            element.on('keydown',function(event){
                if(isNumericKey(event.keyCode) || isForwardSlashKeyCode(event.keyCode)||isNavigationKeyCode(event.keyCode)){
                    return true;
                }else{
                    return false;
                }
            });
        }
    }

    function isNumericKey(keyCode){
        return (event.keyCode>=48 && event.keyCode<=57)
        ||(event.keyCode>=96 && event.keyCode<=105);
    }

    function isForwardSlashKeyCode(keyCode){
        return event.keyCode===191;
    }

    function isNavigationKeyCode(keyCode){
        switch (keyCode){
            case 8:
            case 35:
            case 36:
            case 37:
            case 38:
            case 39:
            case 40:
            case 45:
            case 46:
                return true;
            default:
                return false;
        }
    }
});