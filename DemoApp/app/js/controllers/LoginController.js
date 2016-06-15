'use strcit'
eventsApp.controller('LoginController', function ($scope, auth,currentAuth,$location) {
    var ctrl = this;
    
    $scope.loggedIn = !!currentAuth;
    

    ctrl.googlePlusLogin = function () {
        auth.$authWithOAuthPopup('google')
            .then(function () {
                $location.path('/home');
            })
            .catch(function (error) {

                ctrl.errorMessage = error.code;
            });
    };
    $scope.logout=function(){
        auth.$unauth();
        $location.path("#/login");
    }
    $scope.twitterLogin = function () {
        auth.$authWithOAuthRedirect('twitter')
            .then(function (authData) {
                $location.path('/events');
            })
            .catch(function (error) {
                $scope.errorMessage = error.code;
            });
    };

    ctrl.fbLogin = function () {
        auth.$authWithOAuthPopup('facebook')
            .then(function (auth) {
                $location.path('/home');
            })
            .catch(function (error) {
                ctrl.errorMessage = error.code;
            });
    };

    ctrl.githubLogin = function () {
        auth.$authWithOAuthPopup('github')
            .then(function () {
                $location.path('/home');
            })
            .catch(function (error) {
                ctrl.errorMessage = error.code;
            });
    }
});
