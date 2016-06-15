'use strcit'
eventsApp.controller('LogoutController', function ($scope, auth, $location) {
    auth.$unauth();
    $location.path("/login");
});