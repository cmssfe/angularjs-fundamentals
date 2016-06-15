angular.module('eventsApp')
    .constant('FirebaseUrl', 'https://eventplus.firebaseio.com/')
    .service('rootRef', ['FirebaseUrl', Firebase]);
