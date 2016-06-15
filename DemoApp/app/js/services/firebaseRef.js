angular.module('eventsApp').factory('fbRef',function(rootRef,auth){
    return {
        getEvents:function(){
            return rootRef.child('list').child(auth.$getAuth().uid);
        },
        getCategoriesRef:function(){
            return rootRef.child('categories');
        },
        getExpensesRef:function(){
            return rootRef.child('expenses').child(auth.$getAuth().uid);
        }
    }
});