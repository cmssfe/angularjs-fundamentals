angular.module('eventsApp').factory('auth',function($firebaseAuth,rootRef){
    return $firebaseAuth(rootRef);
});